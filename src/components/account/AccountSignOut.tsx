'use client'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/Button'

export function AccountSignOut() {
  return (
    <Button variant="outline" size="sm" onClick={() => signOut({ callbackUrl: '/' })}>
      退出登录
    </Button>
  )
}
