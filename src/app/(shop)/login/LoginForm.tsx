'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') ?? '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await signIn('credentials', { email, password, redirect: false })
    setLoading(false)
    if (res?.error) {
      setError('邮箱或密码不正确')
    } else {
      router.push(callbackUrl)
      router.refresh()
    }
  }

  return (
    <>
      <h1 className="font-display text-3xl text-cacao mb-2">登录</h1>
      <p className="text-sage text-sm mb-8">
        还没有账户？{' '}
        <Link href="/register" className="text-nanyang underline">
          立即注册
        </Link>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <label className="block text-sm text-cacao/80 mb-1">密码</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>
        {error && <p className="text-rouge text-sm">{error}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? '登录中…' : '登录'}
        </Button>
      </form>
    </>
  )
}
