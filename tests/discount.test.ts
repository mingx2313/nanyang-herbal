import { describe, it, expect } from 'vitest'
import { applyDiscount, type DiscountRule } from '@/lib/discount'

const percent10: DiscountRule = { code: 'WELCOME10', percentOff: 10 }
const raya: DiscountRule = { code: 'RAYA50', amountOffCents: 5000, minSubtotalCents: 30000 }
const freeship: DiscountRule = { code: 'FREESHIP', freeShipping: true }

describe('applyDiscount', () => {
  it('returns zero discount when no rule', () => {
    expect(applyDiscount(10000, 1000, null)).toEqual({
      discountCents: 0,
      shippingCents: 1000,
      error: null,
    })
  })
  it('applies percent off subtotal', () => {
    expect(applyDiscount(10000, 1000, percent10)).toEqual({
      discountCents: 1000,
      shippingCents: 1000,
      error: null,
    })
  })
  it('applies amount off with min subtotal met', () => {
    expect(applyDiscount(30000, 0, raya)).toEqual({
      discountCents: 5000,
      shippingCents: 0,
      error: null,
    })
  })
  it('rejects amount off when below min subtotal', () => {
    const r = applyDiscount(29999, 1000, raya)
    expect(r.discountCents).toBe(0)
    expect(r.error).toMatch(/最低/)
  })
  it('free shipping sets shipping to 0', () => {
    expect(applyDiscount(10000, 1000, freeship)).toEqual({
      discountCents: 0,
      shippingCents: 0,
      error: null,
    })
  })
})
