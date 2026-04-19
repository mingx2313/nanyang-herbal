import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  const { code, subtotalCents } = await req.json()
  if (!code) return NextResponse.json({ error: '请输入优惠码' }, { status: 400 })

  const rule = await db.discountCode.findUnique({ where: { code: code.trim().toUpperCase() } })

  if (!rule || !rule.active) {
    return NextResponse.json({ error: '优惠码无效' }, { status: 404 })
  }
  if (rule.expiresAt && rule.expiresAt < new Date()) {
    return NextResponse.json({ error: '优惠码已过期' }, { status: 400 })
  }
  if (rule.usageLimit && rule.timesUsed >= rule.usageLimit) {
    return NextResponse.json({ error: '优惠码已达使用上限' }, { status: 400 })
  }
  if (rule.minSubtotalCents && subtotalCents < rule.minSubtotalCents) {
    return NextResponse.json(
      { error: `订单金额未达最低 RM${(rule.minSubtotalCents / 100).toFixed(0)}` },
      { status: 400 },
    )
  }

  return NextResponse.json({
    code: rule.code,
    percentOff: rule.percentOff,
    amountOffCents: rule.amountOffCents,
    freeShipping: rule.freeShipping,
    minSubtotalCents: rule.minSubtotalCents,
  })
}
