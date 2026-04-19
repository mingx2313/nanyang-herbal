import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { formatMYR } from '@/lib/pricing'

export type ProductCardData = {
  slug: string
  nameZh: string
  nameEn: string
  tagline: string | null
  imageUrl: string
  priceMinCents: number
  benefits: string[]
  soldOut: boolean
  rating: number | null
  reviewCount: number
  isBestSeller: boolean
  isNew: boolean
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  return (
    <span className="text-turmeric text-sm leading-none">
      {'★'.repeat(full)}
      {half ? '½' : ''}
      {'☆'.repeat(5 - full - (half ? 1 : 0))}
    </span>
  )
}

export function ProductCard({ p }: { p: ProductCardData }) {
  return (
    <Link href={`/products/${p.slug}`} className="group block">
      <div className="aspect-[4/5] bg-coconut overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.imageUrl}
          alt={p.nameZh}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges top-left */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {p.isBestSeller && (
            <span className="bg-rouge text-ivory text-[10px] font-medium px-2 py-0.5 rounded-sm">
              🔥 热销
            </span>
          )}
          {p.isNew && !p.isBestSeller && (
            <span className="bg-nanyang text-ivory text-[10px] font-medium px-2 py-0.5 rounded-sm">
              NEW
            </span>
          )}
        </div>
        {p.soldOut && (
          <div className="absolute inset-0 bg-ivory/70 flex items-center justify-center text-cacao font-display text-lg">
            已售罄
          </div>
        )}
      </div>
      <div className="pt-3 space-y-1.5">
        <div className="flex flex-wrap gap-1">
          {p.benefits.slice(0, 2).map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
        <h3 className="font-display text-lg text-cacao leading-tight">{p.nameZh}</h3>
        <p className="font-latinBody text-xs text-sage tracking-wider uppercase">{p.nameEn}</p>
        {/* Rating row */}
        {p.rating !== null && p.reviewCount > 0 ? (
          <div className="flex items-center gap-1.5">
            <Stars rating={p.rating} />
            <span className="text-xs text-sage">{p.rating.toFixed(1)}</span>
            <span className="text-xs text-sage/70">({p.reviewCount})</span>
          </div>
        ) : (
          <div className="h-4" /> // placeholder to keep card height consistent
        )}
        <p className="font-body text-base text-nanyang pt-0.5">{formatMYR(p.priceMinCents)} 起</p>
      </div>
    </Link>
  )
}
