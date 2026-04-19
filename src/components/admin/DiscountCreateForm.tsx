'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export function DiscountCreateForm() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    code: '', percentOff: '', amountOffCents: '', freeShipping: false,
    minSubtotalCents: '', usageLimit: '', expiresAt: '',
  })
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  function set(k: keyof typeof form, v: string | boolean) {
    setForm((f) => ({ ...f, [k]: v }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSaving(true)

    const body: Record<string, unknown> = { code: form.code.trim().toUpperCase() }
    if (form.percentOff) body.percentOff = Number(form.percentOff)
    if (form.amountOffCents) body.amountOffCents = Math.round(Number(form.amountOffCents) * 100)
    if (form.freeShipping) body.freeShipping = true
    if (form.minSubtotalCents) body.minSubtotalCents = Math.round(Number(form.minSubtotalCents) * 100)
    if (form.usageLimit) body.usageLimit = Number(form.usageLimit)
    if (form.expiresAt) body.expiresAt = new Date(form.expiresAt).toISOString()

    const res = await fetch('/api/admin/discounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    setSaving(false)
    if (!res.ok) { const d = await res.json(); setError(d.error ?? '创建失败'); return }
    setOpen(false)
    setForm({ code: '', percentOff: '', amountOffCents: '', freeShipping: false, minSubtotalCents: '', usageLimit: '', expiresAt: '' })
    router.refresh()
  }

  if (!open) {
    return <Button onClick={() => setOpen(true)}>+ 新建优惠码</Button>
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-sm shadow-sm p-6 space-y-4 max-w-xl">
      <h2 className="font-display text-lg">新建优惠码</h2>
      <div>
        <label className="block text-xs text-sage mb-1">优惠码（英文大写）</label>
        <Input value={form.code} onChange={(e) => set('code', e.target.value)} required placeholder="WELCOME10" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-sage mb-1">折扣百分比 (%)</label>
          <Input type="number" min="0" max="100" value={form.percentOff} onChange={(e) => set('percentOff', e.target.value)} placeholder="10" />
        </div>
        <div>
          <label className="block text-xs text-sage mb-1">固定折扣 (RM)</label>
          <Input type="number" min="0" step="0.01" value={form.amountOffCents} onChange={(e) => set('amountOffCents', e.target.value)} placeholder="5.00" />
        </div>
        <div>
          <label className="block text-xs text-sage mb-1">最低消费 (RM)</label>
          <Input type="number" min="0" step="0.01" value={form.minSubtotalCents} onChange={(e) => set('minSubtotalCents', e.target.value)} placeholder="50.00" />
        </div>
        <div>
          <label className="block text-xs text-sage mb-1">使用上限</label>
          <Input type="number" min="1" value={form.usageLimit} onChange={(e) => set('usageLimit', e.target.value)} placeholder="留空=无限" />
        </div>
        <div>
          <label className="block text-xs text-sage mb-1">到期日</label>
          <Input type="date" value={form.expiresAt} onChange={(e) => set('expiresAt', e.target.value)} />
        </div>
        <div className="flex items-end pb-1">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={form.freeShipping} onChange={(e) => set('freeShipping', e.target.checked)} className="h-4 w-4" />
            免运费
          </label>
        </div>
      </div>
      {error && <p className="text-rouge text-sm">{error}</p>}
      <div className="flex gap-2">
        <Button type="submit" disabled={saving}>{saving ? '保存中…' : '创建'}</Button>
        <Button type="button" variant="ghost" onClick={() => setOpen(false)}>取消</Button>
      </div>
    </form>
  )
}
