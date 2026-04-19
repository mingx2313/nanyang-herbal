'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function DiscountDeleteButton({ id }: { id: string }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  async function handleDelete() {
    if (!confirm('确定要停用此优惠码吗？')) return
    setSaving(true)
    await fetch(`/api/admin/discounts/${id}`, { method: 'DELETE' })
    setSaving(false)
    router.refresh()
  }

  return (
    <button
      onClick={handleDelete}
      disabled={saving}
      className="text-xs text-rouge underline hover:no-underline disabled:opacity-50"
    >
      停用
    </button>
  )
}
