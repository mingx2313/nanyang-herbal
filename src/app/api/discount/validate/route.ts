import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ error: '无效优惠码' }, { status: 400 })
}
