'use client'
import Link from 'next/link'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export function LoginForm() {
  return (
    <>
      <h1 className="font-display text-3xl text-cacao mb-2">登录</h1>
      <p className="text-sage text-sm mb-8">
        还没有账户？{' '}
        <Link href="/register" className="text-nanyang underline">立即注册</Link>
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-cacao/80 mb-1">电子邮箱</label>
          <Input type="email" placeholder="your@email.com" required />
        </div>
        <div>
          <label className="block text-sm text-cacao/80 mb-1">密码</label>
          <Input type="password" placeholder="••••••••" required />
        </div>
        <p className="text-sage text-sm">Portfolio 展示模式 — 登录功能即将开放</p>
        <Button type="button" className="w-full" disabled>登录（展示模式）</Button>
      </form>
    </>
  )
}
