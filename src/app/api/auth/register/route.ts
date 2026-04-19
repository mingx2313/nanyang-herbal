import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ error: '注册功能即将开放' }, { status: 503 })
}
