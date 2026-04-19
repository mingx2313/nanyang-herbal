'use client'
import { useEffect, useState } from 'react'
import { useCartStore } from '@/stores/cartStore'
import { cartItemCount, cartSubtotal } from '@/lib/cart'

export function useCart() {
  const lines = useCartStore((s) => s.lines)
  const add = useCartStore((s) => s.add)
  const update = useCartStore((s) => s.update)
  const remove = useCartStore((s) => s.remove)
  const clear = useCartStore((s) => s.clear)
  return {
    lines,
    add,
    update,
    remove,
    clear,
    subtotalCents: cartSubtotal(lines),
    count: cartItemCount(lines),
  }
}

// SSR-safe count for header badge
export function useCartCount(): number {
  const count = useCartStore((s) => cartItemCount(s.lines))
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? count : 0
}
