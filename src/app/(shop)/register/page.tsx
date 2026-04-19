'use client'
import Link from 'next/link'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

export default function RegisterPage() {
  return (
    <Section className="pt-20">
      <Container className="max-w-sm">
        <h1 className="font-display text-3xl text-cacao mb-2">注册会员</h1>
        <p className="text-sage text-sm mb-8">已有账户？ <Link href="/login" className="text-nanyang underline">立即登录</Link></p>
        <form className="space-y-4">
          <Input type="text" placeholder="姓名" required />
          <Input type="email" placeholder="电子邮箱" required />
          <Input type="password" placeholder="密码" required />
          <p className="text-sage text-sm">Portfolio 展示模式 — 注册功能即将开放</p>
          <Button type="button" className="w-full" disabled>注册（展示模式）</Button>
        </form>
      </Container>
    </Section>
  )
}
