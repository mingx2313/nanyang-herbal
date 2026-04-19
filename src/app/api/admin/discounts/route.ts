import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await req.json()
  if (!body.code) return NextResponse.json({ error: '优惠码不能为空' }, { status: 400 })

  const existing = await db.discountCode.findUnique({ where: { code: body.code } })
  if (existing) return NextResponse.json({ error: '优惠码已存在' }, { status: 409 })

  const code = await db.discountCode.create({
    data: {
      code: body.code,
      percentOff: body.percentOff ?? null,
      amountOffCents: body.amountOffCents ?? null,
      freeShipping: body.freeShipping ?? false,
      minSubtotalCents: body.minSubtotalCents ?? null,
      usageLimit: body.usageLimit ?? null,
      expiresAt: body.expiresAt ? new Date(body.expiresAt) : null,
    },
  })

  return NextResponse.json({ id: code.id }, { status: 201 })
}
