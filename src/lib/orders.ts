import { shippingFor } from './pricing'
import { applyDiscount, type DiscountRule } from './discount'

export type Totals = {
  subtotalCents: number
  shippingCents: number
  discountCents: number
  totalCents: number
}

export function computeOrderTotals(
  items: { priceCents: number; qty: number }[],
  discount: DiscountRule | null,
): Totals {
  const subtotalCents = items.reduce((s, i) => s + i.priceCents * i.qty, 0)
  const baseShipping = shippingFor(subtotalCents)
  const { discountCents, shippingCents } = applyDiscount(subtotalCents, baseShipping, discount)
  const totalCents = Math.max(0, subtotalCents - discountCents + shippingCents)
  return { subtotalCents, shippingCents, discountCents, totalCents }
}
