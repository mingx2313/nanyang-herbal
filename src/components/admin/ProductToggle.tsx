'use client'
import { useState } from 'react'

export function ProductToggle({
  productId,
  field,
  value,
}: {
  productId: string
  field: 'active' | 'featured'
  value: boolean
}) {
  const [checked, setChecked] = useState(value)
  const [saving, setSaving] = useState(false)

  async function toggle() {
    setSaving(true)
    await fetch(`/api/admin/products/${productId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: !checked }),
    })
    setChecked((v) => !v)
    setSaving(false)
  }

  return (
    <button
      onClick={toggle}
      disabled={saving}
      className={`relative inline-flex h-5 w-9 rounded-full transition-colors disabled:opacity-50 ${
        checked ? 'bg-nanyang' : 'bg-sage/30'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform mt-0.5 ${
          checked ? 'translate-x-4 ml-0.5' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}
