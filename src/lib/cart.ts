export type CartLine = {
  variantId: string
  productId: string
  nameZh: string
  variantLabel: string
  imageUrl: string
  priceCents: number
  qty: number
  stock: number
}

export function cartSubtotal(lines: CartLine[]): number {
  return lines.reduce((sum, l) => sum + l.priceCents * l.qty, 0)
}

export function cartItemCount(lines: CartLine[]): number {
  return lines.reduce((sum, l) => sum + l.qty, 0)
}
