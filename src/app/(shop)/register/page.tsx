'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })

    if (!res.ok) {
      const data = await res.json()
      setError(data.error ?? '注册失败,请稍后再试')
      setLoading(false)
      return
    }

    await signIn('credentials', { email, password, redirect: false })
    router.push('/')
    router.refresh()
  }

  return (
    <Section>
      <Container className="max-w-md">
        <h1 className="font-display text-3xl text-cacao mb-2">注册账户</h1>
        <p className="text-sage text-sm mb-8">
          已有账户？{' '}
          <Link href="/login" className="text-nanyang underline">
            立即登录
          </Link>
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-cacao/80 mb-1">姓名（选填）</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="您的姓名"
            />
          </div>
          <div>
            <label className="block text-sm text-cacao/80 mb-1">电子邮箱</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-cacao/80 mb-1">密码（至少8位）</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>
          {error && <p className="text-rouge text-sm">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? '注册中…' : '创建账户'}
          </Button>
        </form>
      </Container>
    </Section>
  )
}
