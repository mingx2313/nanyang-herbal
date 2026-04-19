'use client'
import { useState } from 'react'

const STATUS_LABEL: Record<string, string> = {
  PENDING: '待付款',
  PAID: '已付款',
  SHIPPED: '已发货',
  DELIVERED: '已送达',
  CANCELLED: '已取消',
}

export function OrderStatusSelect({ orderId, current }: { orderId: string; current: string }) {
  const [status, setStatus] = useState(current)
  const [saving, setSaving] = useState(false)

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value
    setSaving(true)
    await fetch(`/api/admin/orders/${orderId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: next }),
    })
    setStatus(next)
    setSaving(false)
  }

  return (
    <select
      value={status}
      onChange={handleChange}
      disabled={saving}
      className="text-xs border border-sage/30 bg-ivory px-2 py-1 rounded-sm focus:outline-none disabled:opacity-50"
    >
      {Object.entries(STATUS_LABEL).map(([v, l]) => (
        <option key={v} value={v}>{l}</option>
      ))}
    </select>
  )
}
