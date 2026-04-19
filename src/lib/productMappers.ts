import type { ProductCardData } from '@/components/product/ProductCard'

type RawProduct = {
  slug: string
  nameZh: string
  nameEn: string
  tagline: string | null
  images: string
  createdAt: Date
  featured: boolean
  variants: { priceCents: number; stock: number }[]
  benefits: { benefitTag: { nameZh: string } }[]
  reviews: { rating: number }[]
}

export function toCardData(p: RawProduct): ProductCardData {
  const images = JSON.parse(p.images) as string[]
  const reviewCount = p.reviews.length
  const rating =
    reviewCount > 0
      ? p.reviews.reduce((s, r) => s + r.rating, 0) / reviewCount
      : null

  // Mark as "new" if created within the last 30 days
  const isNew = Date.now() - new Date(p.createdAt).getTime() < 30 * 24 * 60 * 60 * 1000

  return {
    slug: p.slug,
    nameZh: p.nameZh,
    nameEn: p.nameEn,
    tagline: p.tagline,
    imageUrl: images[0] ?? '',
    priceMinCents: Math.min(...p.variants.map((v) => v.priceCents)),
    benefits: p.benefits.map((b) => b.benefitTag.nameZh),
    soldOut: p.variants.every((v) => v.stock <= 0),
    rating,
    reviewCount,
    isBestSeller: p.featured,
    isNew,
  }
}
