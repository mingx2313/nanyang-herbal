'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { formatMYR } from '@/lib/pricing'
import { useCart } from '@/hooks/useCart'

type Variant = { id: string; label: string; priceCents: number; stock: number }
type Product = {
  id: string
  slug: string
  nameZh: string
  nameEn: string
  tagline: string | null
  description: string
  variants: Variant[]
  benefits: string[]
  imageUrl: string
  reviewCount?: number
  rating?: number | null
}

export function ProductPurchasePanel({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? '')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const { add } = useCart()
  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0]
  if (!variant) return null
  const soldOut = variant.stock <= 0

  const waText = encodeURIComponent(
    `您好，我想询问「${product.nameZh}」的产品详情，请问有货吗？`,
  )

  function onAdd() {
    add({
      variantId: variant.id,
      productId: product.id,
      nameZh: product.nameZh,
      variantLabel: variant.label,
      imageUrl: product.imageUrl,
      priceCents: variant.priceCents,
      qty,
      stock: variant.stock,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-5">
      <div>
        <div className="flex flex-wrap gap-1 mb-3">
          {product.benefits.map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-cacao leading-tight">
          {product.nameZh}
        </h1>
        <p className="font-latinDisplay italic text-sage mt-1">{product.nameEn}</p>
        {product.tagline && <p className="text-cacao/70 mt-3">{product.tagline}</p>}

        {/* Rating inline */}
        {product.rating != null && (product.reviewCount ?? 0) > 0 && (
          <div className="flex items-center gap-2 mt-3">
            <span className="text-turmeric">
              {'★'.repeat(Math.round(product.rating))}
              {'☆'.repeat(5 - Math.round(product.rating))}
            </span>
            <span className="text-sm text-cacao font-medium">{product.rating.toFixed(1)}</span>
            <span className="text-sm text-sage">({product.reviewCount} 条评价)</span>
          </div>
        )}
      </div>

      <div className="text-3xl font-display text-nanyang">{formatMYR(variant.priceCents)}</div>

      <p className="text-cacao/80 leading-relaxed">{product.description}</p>

      <div>
        <label className="block text-sm font-medium mb-3">规格</label>
        <div className="grid grid-cols-3 gap-2">
          {product.variants.map((v) => (
            <button
              key={v.id}
              onClick={() => setVariantId(v.id)}
              disabled={v.stock <= 0}
              aria-label={v.stock <= 0 ? `${v.label} 已售罄` : v.label}
              aria-pressed={v.id === variantId}
              className={`h-12 border text-sm rounded-sm transition-colors ${
                v.id === variantId
                  ? 'border-nanyang bg-nanyang/5 text-nanyang'
                  : 'border-sage/40 text-cacao hover:border-nanyang'
              } ${v.stock <= 0 ? 'opacity-40 line-through cursor-not-allowed' : ''}`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="text-sm font-medium">数量</label>
        <div className="flex items-center border border-sage/40 rounded-sm">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="h-11 w-11 hover:bg-coconut"
            aria-label="减少"
          >
            −
          </button>
          <span className="w-12 text-center">{qty}</span>
          <button
            onClick={() => setQty((q) => Math.min(variant.stock, q + 1))}
            className="h-11 w-11 hover:bg-coconut"
            aria-label="增加"
          >
            +
          </button>
        </div>
        {variant.stock > 0 && variant.stock <= 5 && (
          <span className="text-xs text-rouge">🔥 仅剩 {variant.stock} 件</span>
        )}
      </div>

      <div className="flex gap-3">
        <Button size="lg" className="flex-1" onClick={onAdd} disabled={soldOut}>
          {soldOut ? '已售罄' : added ? '✓ 已加入购物车' : '加入购物车'}
        </Button>
        <a
          href={`https://wa.me/60123456789?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-14 w-14 rounded-sm bg-[#25D366] text-white hover:opacity-90 transition-opacity shrink-0"
          aria-label="WhatsApp 询问"
          title="WhatsApp 询问商品"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
            <path d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.18-1.62A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 21.8a9.77 9.77 0 0 1-5-1.38l-.36-.21-3.67.96.98-3.57-.23-.37A9.77 9.77 0 1 1 12 21.8zm5.6-7.32c-.3-.15-1.8-.89-2.08-.99s-.48-.15-.69.15-.79.99-.97 1.2-.36.22-.66.07a8.05 8.05 0 0 1-2.37-1.47 8.87 8.87 0 0 1-1.64-2.04c-.17-.3 0-.45.13-.6s.3-.36.45-.54.2-.3.3-.5.05-.37-.02-.52-.69-1.66-.94-2.28c-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.52.08-.8.37s-1.06 1.04-1.06 2.53 1.09 2.94 1.24 3.14 2.14 3.27 5.18 4.59c.72.31 1.29.5 1.73.63.73.23 1.4.2 1.92.12.59-.09 1.8-.74 2.06-1.46s.26-1.33.18-1.46-.27-.2-.57-.34z" />
          </svg>
        </a>
      </div>

      {/* Trust mini-bar */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-sage/20 text-xs text-cacao/60 text-center">
        <div>🔒 安全结账</div>
        <div>↩️ 7天退货</div>
        <div>🚚 满RM150免运</div>
      </div>
    </div>
  )
}
