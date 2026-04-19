import { describe, it, expect } from 'vitest'
import { computeOrderTotals } from '@/lib/orders'

describe('computeOrderTotals', () => {
  it('computes subtotal, shipping, total with no discount', () => {
    const r = computeOrderTotals(
      [
        { priceCents: 5000, qty: 2 },
        { priceCents: 3000, qty: 1 },
      ],
      null,
    )
    expect(r.subtotalCents).toBe(13000)
    expect(r.shippingCents).toBe(1000)
    expect(r.discountCents).toBe(0)
    expect(r.totalCents).toBe(14000)
  })

  it('applies percent discount and auto free-shipping above threshold', () => {
    const r = computeOrderTotals(
      [{ priceCents: 8000, qty: 2 }],
      { code: 'WELCOME10', percentOff: 10 },
    )
    expect(r.subtotalCents).toBe(16000)
    expect(r.shippingCents).toBe(0) // subtotal above 15000
    expect(r.discountCents).toBe(1600)
    expect(r.totalCents).toBe(14400)
  })

  it('applies amount-off discount with min subtotal', () => {
    const r = computeOrderTotals(
      [{ priceCents: 15000, qty: 2 }],
      { code: 'RAYA50', amountOffCents: 5000, minSubtotalCents: 30000 },
    )
    expect(r.subtotalCents).toBe(30000)
    expect(r.discountCents).toBe(5000)
    expect(r.shippingCents).toBe(0)
    expect(r.totalCents).toBe(25000)
  })
})
