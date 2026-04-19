import { describe, it, expect } from 'vitest'
import { cartSubtotal, cartItemCount, type CartLine } from '@/lib/cart'

const line = (priceCents: number, qty: number): CartLine => ({
  variantId: 'v',
  productId: 'p',
  nameZh: 'x',
  variantLabel: '30包',
  imageUrl: '',
  priceCents,
  qty,
  stock: 999,
})

describe('cartSubtotal', () => {
  it('is 0 for empty cart', () => {
    expect(cartSubtotal([])).toBe(0)
  })
  it('sums price * qty across lines', () => {
    expect(cartSubtotal([line(1000, 2), line(500, 3)])).toBe(3500)
  })
})

describe('cartItemCount', () => {
  it('sums quantities', () => {
    expect(cartItemCount([line(100, 2), line(100, 5)])).toBe(7)
  })
  it('is 0 for empty cart', () => {
    expect(cartItemCount([])).toBe(0)
  })
})
