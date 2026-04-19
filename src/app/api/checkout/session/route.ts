import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { computeOrderTotals } from '@/lib/orders'
import type { DiscountRule } from '@/lib/discount'

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2026-03-25.dahlia' })
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: '请先登录' }, { status: 401 })

  const { items, shippingAddress, discountCode } = await req.json()
  // items: { variantId: string; qty: number }[]

  if (!items?.length) return NextResponse.json({ error: '购物车为空' }, { status: 400 })

  // Fetch variants from DB to get authoritative prices
  const variantIds = items.map((i: { variantId: string }) => i.variantId)
  const variants = await db.productVariant.findMany({
    where: { id: { in: variantIds } },
    include: { product: true },
  })

  const lineItems = items.map((item: { variantId: string; qty: number }) => {
    const v = variants.find((v) => v.id === item.variantId)
    if (!v) throw new Error(`Variant ${item.variantId} not found`)
    return { priceCents: v.priceCents, qty: item.qty, variantId: v.id }
  })

  // Resolve discount
  let discountRule: DiscountRule | null = null
  if (discountCode) {
    const rule = await db.discountCode.findUnique({
      where: { code: discountCode.trim().toUpperCase() },
    })
    if (rule && rule.active) discountRule = rule
  }

  const totals = computeOrderTotals(lineItems, discountRule)

  // Build Stripe line items
  const stripeLineItems = variants.map((v) => {
    const item = items.find((i: { variantId: string; qty: number }) => i.variantId === v.id)
    return {
      price_data: {
        currency: 'myr',
        product_data: { name: `${v.product.nameZh} · ${v.label}` },
        unit_amount: v.priceCents,
      },
      quantity: item?.qty ?? 1,
    }
  })

  // Add shipping as a line item if not free
  if (totals.shippingCents > 0) {
    stripeLineItems.push({
      price_data: {
        currency: 'myr',
        product_data: { name: '运费' },
        unit_amount: totals.shippingCents,
      },
      quantity: 1,
    })
  }

  // Add discount as a negative line item if applicable
  if (totals.discountCents > 0) {
    stripeLineItems.push({
      price_data: {
        currency: 'myr',
        product_data: { name: `优惠码 ${discountCode}` },
        unit_amount: -totals.discountCents,
      },
      quantity: 1,
    })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: stripeLineItems,
    success_url: `${process.env.NEXTAUTH_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
    metadata: {
      userId: session.user.id,
      shippingAddress: JSON.stringify(shippingAddress),
      discountCode: discountCode ?? '',
      itemsJson: JSON.stringify(lineItems),
    },
  })

  return NextResponse.json({ url: checkoutSession.url })
}
