export type DiscountRule = {
  code: string
  percentOff?: number | null
  amountOffCents?: number | null
  freeShipping?: boolean | null
  minSubtotalCents?: number | null
}

export type DiscountResult = {
  discountCents: number
  shippingCents: number
  error: string | null
}

export function applyDiscount(
  subtotalCents: number,
  shippingCents: number,
  rule: DiscountRule | null,
): DiscountResult {
  if (!rule) return { discountCents: 0, shippingCents, error: null }

  if (rule.minSubtotalCents && subtotalCents < rule.minSubtotalCents) {
    return {
      discountCents: 0,
      shippingCents,
      error: `订单金额未达最低 RM${(rule.minSubtotalCents / 100).toFixed(0)}`,
    }
  }

  let discountCents = 0
  if (rule.percentOff) discountCents = Math.floor((subtotalCents * rule.percentOff) / 100)
  else if (rule.amountOffCents) discountCents = rule.amountOffCents
  if (discountCents > subtotalCents) discountCents = subtotalCents

  const finalShipping = rule.freeShipping ? 0 : shippingCents
  return { discountCents, shippingCents: finalShipping, error: null }
}
