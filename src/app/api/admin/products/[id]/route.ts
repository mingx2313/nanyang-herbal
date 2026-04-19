import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { id } = await params
  const body = await req.json()
  const allowed: Record<string, unknown> = {}
  if (typeof body.active === 'boolean') allowed.active = body.active
  if (typeof body.featured === 'boolean') allowed.featured = body.featured

  const product = await db.product.update({ where: { id }, data: allowed })
  return NextResponse.json({ id: product.id })
}
