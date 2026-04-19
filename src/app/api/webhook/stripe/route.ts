import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { db } from '@/lib/db'
import { computeOrderTotals } from '@/lib/orders'
import type { DiscountRule } from '@/lib/discount'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2026-03-25.dahlia' })

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const { userId, shippingAddress, discountCode, itemsJson } = session.metadata ?? {}

  if (!userId || !itemsJson) return NextResponse.json({ received: true })

  // Idempotency check
  const existing = await db.order.findFirst({ where: { stripeSessionId: session.id } })
  if (existing) return NextResponse.json({ received: true })

  const lineItems: { variantId: string; priceCents: number; qty: number }[] = JSON.parse(itemsJson)

  let discountRule: DiscountRule | null = null
  if (discountCode) {
    const rule = await db.discountCode.findUnique({ where: { code: discountCode } })
    if (rule && rule.active) {
      discountRule = rule
      await db.discountCode.update({
        where: { code: discountCode },
        data: { timesUsed: { increment: 1 } },
      })
    }
  }

  const totals = computeOrderTotals(lineItems, discountRule)

  // Fetch variant snapshots
  const variantIds = lineItems.map((i) => i.variantId)
  const variants = await db.productVariant.findMany({
    where: { id: { in: variantIds } },
    include: { product: true },
  })

  await db.$transaction(async (tx) => {
    const order = await tx.order.create({
      data: {
        userId,
        status: 'PAID',
        subtotalCents: totals.subtotalCents,
        discountCents: totals.discountCents,
        shippingCents: totals.shippingCents,
        totalCents: totals.totalCents,
        stripeSessionId: session.id,
        stripePaymentIntentId: session.payment_intent as string | null,
        discountCode: discountCode || null,
        shippingAddress: shippingAddress ?? '{}',
        items: {
          create: lineItems.map((item) => {
            const v = variants.find((v) => v.id === item.variantId)!
            return {
              variantId: item.variantId,
              nameSnapshot: v.product.nameZh,
              variantLabelSnapshot: v.label,
              priceCentsSnapshot: item.priceCents,
              qty: item.qty,
            }
          }),
        },
      },
    })

    // Decrement stock
    for (const item of lineItems) {
      await tx.productVariant.update({
        where: { id: item.variantId },
        data: { stock: { decrement: item.qty } },
      })
    }

    return order
  })

  return NextResponse.json({ received: true })
}
