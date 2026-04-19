import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartLine } from '@/lib/cart'

type State = {
  lines: CartLine[]
  add: (line: CartLine) => void
  update: (variantId: string, qty: number) => void
  remove: (variantId: string) => void
  clear: () => void
}

export const useCartStore = create<State>()(
  persist(
    (set) => ({
      lines: [],
      add: (line) =>
        set((s) => {
          const existing = s.lines.find((l) => l.variantId === line.variantId)
          if (existing) {
            return {
              lines: s.lines.map((l) =>
                l.variantId === line.variantId
                  ? { ...l, qty: Math.min(l.stock, l.qty + line.qty) }
                  : l,
              ),
            }
          }
          return { lines: [...s.lines, line] }
        }),
      update: (variantId, qty) =>
        set((s) => ({
          lines: s.lines
            .map((l) =>
              l.variantId === variantId
                ? { ...l, qty: Math.max(0, Math.min(l.stock, qty)) }
                : l,
            )
            .filter((l) => l.qty > 0),
        })),
      remove: (variantId) =>
        set((s) => ({ lines: s.lines.filter((l) => l.variantId !== variantId) })),
      clear: () => set({ lines: [] }),
    }),
    { name: 'nyh-cart' },
  ),
)
