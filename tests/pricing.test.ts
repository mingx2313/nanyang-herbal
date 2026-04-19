import { describe, it, expect } from 'vitest'
import {
  formatMYR,
  shippingFor,
  SHIPPING_FLAT_CENTS,
  FREE_SHIPPING_THRESHOLD_CENTS,
} from '@/lib/pricing'

describe('formatMYR', () => {
  it('formats cents to RM with 2 decimals', () => {
    expect(formatMYR(12345)).toBe('RM 123.45')
    expect(formatMYR(0)).toBe('RM 0.00')
    expect(formatMYR(100)).toBe('RM 1.00')
  })
})

describe('shippingFor', () => {
  it('returns flat RM10 below free shipping threshold', () => {
    expect(shippingFor(14999)).toBe(SHIPPING_FLAT_CENTS)
    expect(SHIPPING_FLAT_CENTS).toBe(1000)
  })
  it('returns 0 at or above RM150', () => {
    expect(shippingFor(15000)).toBe(0)
    expect(shippingFor(99999)).toBe(0)
    expect(FREE_SHIPPING_THRESHOLD_CENTS).toBe(15000)
  })
})
