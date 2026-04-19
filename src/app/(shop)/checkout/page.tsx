'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/hooks/useCart'
import { formatMYR, shippingFor } from '@/lib/pricing'
import { applyDiscount, type DiscountRule } from '@/lib/discount'

const STATES = [
  'Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan',
  'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah',
  'Sarawak', 'Selangor', 'Terengganu', 'W.P. Kuala Lumpur',
  'W.P. Labuan', 'W.P. Putrajaya',
]

export default function CheckoutPage() {
  const router = useRouter()
  const { lines, subtotalCents, clear } = useCart()

  const [form, setForm] = useState({
    name: '', phone: '', line1: '', line2: '', city: '', state: '', postcode: '',
  })
  const [discountInput, setDiscountInput] = useState('')
  const [discount, setDiscount] = useState<DiscountRule | null>(null)
  const [discountError, setDiscountError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const baseShipping = shippingFor(subtotalCents)
  const { discountCents, shippingCents } = applyDiscount(subtotalCents, baseShipping, discount)
  const total = subtotalCents - discountCents + shippingCents

  function setField(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }))
  }

  async function applyCode() {
    setDiscountError('')
    const res = await fetch('/api/discount/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: discountInput, subtotalCents }),
    })
    const data = await res.json()
    if (!res.ok) { setDiscountError(data.error); return }
    setDiscount(data)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const res = await fetch('/api/checkout/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: lines.map((l) => ({ variantId: l.variantId, qty: l.qty })),
        shippingAddress: {
          name: form.name,
          phone: form.phone,
          line1: form.line1,
          line2: form.line2,
          city: form.city,
          state: form.state,
          postcode: form.postcode,
          country: 'Malaysia',
        },
        discountCode: discount?.code ?? null,
      }),
    })

    if (res.status === 401) {
      router.push('/login?callbackUrl=/checkout')
      return
    }

    const data = await res.json()
    setSubmitting(false)

    if (!res.ok) { setError(data.error ?? '结账失败,请重试'); return }
    clear()
    window.location.href = data.url
  }

  if (lines.length === 0) {
    return (
      <Section>
        <Container className="max-w-2xl text-center">
          <p className="text-sage mb-6">购物车是空的</p>
          <Link href="/products"><Button>去逛逛</Button></Link>
        </Container>
      </Section>
    )
  }

  return (
    <Section className="pt-8">
      <Container className="max-w-5xl">
        <h1 className="font-display text-3xl text-cacao mb-8">结账</h1>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-[1fr_380px] gap-10">

          {/* Left: Shipping address */}
          <div className="space-y-5">
            <h2 className="font-display text-xl mb-2">收货地址</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm text-cacao/70 mb-1">收件人姓名</label>
                <Input value={form.name} onChange={(e) => setField('name', e.target.value)} required placeholder="张小明" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-cacao/70 mb-1">手机号码</label>
                <Input value={form.phone} onChange={(e) => setField('phone', e.target.value)} required placeholder="0123456789" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-cacao/70 mb-1">地址第一行</label>
                <Input value={form.line1} onChange={(e) => setField('line1', e.target.value)} required placeholder="No. 12, Jalan Ampang" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-cacao/70 mb-1">地址第二行（选填）</label>
                <Input value={form.line2} onChange={(e) => setField('line2', e.target.value)} placeholder="Taman Sri Petaling" />
              </div>
              <div>
                <label className="block text-sm text-cacao/70 mb-1">城市</label>
                <Input value={form.city} onChange={(e) => setField('city', e.target.value)} required placeholder="Kuala Lumpur" />
              </div>
              <div>
                <label className="block text-sm text-cacao/70 mb-1">邮编</label>
                <Input value={form.postcode} onChange={(e) => setField('postcode', e.target.value)} required placeholder="50450" maxLength={5} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-cacao/70 mb-1">州属</label>
                <select
                  value={form.state}
                  onChange={(e) => setField('state', e.target.value)}
                  required
                  className="w-full h-12 border border-sage/40 bg-ivory px-3 text-cacao focus:outline-none focus:ring-1 focus:ring-nanyang rounded-sm"
                >
                  <option value="">请选择州属</option>
                  {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Right: Order summary */}
          <div className="space-y-5">
            <h2 className="font-display text-xl mb-2">订单摘要</h2>
            <div className="space-y-3">
              {lines.map((l) => (
                <div key={l.variantId} className="flex justify-between text-sm">
                  <span className="text-cacao/80">{l.nameZh} × {l.qty}</span>
                  <span>{formatMYR(l.priceCents * l.qty)}</span>
                </div>
              ))}
            </div>

            {/* Discount code */}
            <div>
              <label className="block text-sm text-cacao/70 mb-1">优惠码</label>
              <div className="flex gap-2">
                <Input
                  value={discountInput}
                  onChange={(e) => setDiscountInput(e.target.value.toUpperCase())}
                  placeholder="WELCOME10"
                  disabled={!!discount}
                />
                {discount ? (
                  <Button type="button" variant="outline" size="sm" onClick={() => { setDiscount(null); setDiscountInput('') }}>
                    移除
                  </Button>
                ) : (
                  <Button type="button" variant="outline" size="sm" onClick={applyCode}>
                    使用
                  </Button>
                )}
              </div>
              {discountError && <p className="text-rouge text-xs mt-1">{discountError}</p>}
              {discount && <p className="text-sage text-xs mt-1">优惠码 {discount.code} 已使用</p>}
            </div>

            <div className="border-t border-sage/20 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>小计</span>
                <span>{formatMYR(subtotalCents)}</span>
              </div>
              {discountCents > 0 && (
                <div className="flex justify-between text-turmeric">
                  <span>优惠</span>
                  <span>−{formatMYR(discountCents)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>运费</span>
                <span>{shippingCents === 0 ? '免运费' : formatMYR(shippingCents)}</span>
              </div>
              <div className="flex justify-between font-display text-lg text-nanyang pt-2 border-t border-sage/20">
                <span>合计</span>
                <span>{formatMYR(total)}</span>
              </div>
            </div>

            {error && (
              <div className="text-rouge text-sm bg-rouge/5 border border-rouge/20 p-3 rounded-sm">
                {error}
                <a
                  href="https://wa.me/60123456789?text=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E5%9C%A8%E7%BB%93%E8%B4%A6%E6%97%B6%E9%81%87%E5%88%B0%E9%97%AE%E9%A2%98%EF%BC%8C%E8%AF%B7%E5%B8%AE%E5%8A%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-nanyang underline"
                >
                  WhatsApp 联系客服解决
                </a>
              </div>
            )}

            {/* Secure badge */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-sage">
              <span>🔒</span>
              <span>SSL 安全加密结账</span>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={submitting}>
              {submitting ? '跳转至付款…' : '🔒 前往付款'}
            </Button>

            {/* Payment logos */}
            <div className="text-center space-y-2">
              <p className="text-xs text-sage">支持以下付款方式</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {/* eslint-disable @next/next/no-img-element */}
                <img src="/logos/fpx.svg" alt="FPX" className="h-6" />
                <img src="/logos/tng.svg" alt="Touch n Go eWallet" className="h-6" />
                <img src="/logos/grabpay.svg" alt="GrabPay" className="h-6" />
                <img src="/logos/boost.svg" alt="Boost" className="h-6" />
                <img src="/logos/visa.svg" alt="Visa" className="h-6" />
                <img src="/logos/mastercard.svg" alt="Mastercard" className="h-6" />
                {/* eslint-enable @next/next/no-img-element */}
              </div>
            </div>

            {/* Return policy */}
            <p className="text-xs text-sage/70 text-center">
              ↩️ 未开封商品 7 天内可退货退款 ·{' '}
              <a href="/faq#returns" className="underline hover:text-nanyang">退货政策</a>
            </p>
          </div>
        </form>
      </Container>
    </Section>
  )
}
