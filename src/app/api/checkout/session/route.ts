import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ error: '结账功能即将开放' }, { status: 503 })
}
