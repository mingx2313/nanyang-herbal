export const SHIPPING_FLAT_CENTS = 1000 // RM10
export const FREE_SHIPPING_THRESHOLD_CENTS = 15000 // RM150

export function formatMYR(cents: number): string {
  return `RM ${(cents / 100).toFixed(2)}`
}

export function shippingFor(subtotalCents: number): number {
  return subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS ? 0 : SHIPPING_FLAT_CENTS
}
