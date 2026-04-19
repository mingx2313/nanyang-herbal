export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductBySlug, CATEGORIES, getBenefitNameZh } from '@/lib/mock-data'
import { Container } from '@/components/ui/Container'
import { ProductGallery } from '@/components/product/ProductGallery'
import { ProductPurchasePanel } from '@/components/product/ProductPurchasePanel'
import { BenefitIcons } from '@/components/product/BenefitIcons'
import { TrustBadges } from '@/components/product/TrustBadges'
import { ReviewList } from '@/components/product/ReviewList'
import { PeranakanDivider } from '@/components/ui/PeranakanDivider'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const p = getProductBySlug(slug)
  if (!p) return {}
  return { title: `${p.nameZh} — 南洋本草`, description: p.tagline }
}

export default async function PDP({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProductBySlug(slug)
  if (!p) notFound()

  const category = CATEGORIES.find(c => c.slug === p.categorySlug)
  const benefitNames = p.benefits.map(slug => getBenefitNameZh(slug))
  const reviewCount = p.reviews.length
  const rating = reviewCount > 0
    ? p.reviews.reduce((s, r) => s + r.rating, 0) / reviewCount
    : null

  return (
    <article className="pb-20">
      <Container className="pt-8">
        <nav className="text-sm text-sage mb-6">
          <Link href="/products" className="hover:text-nanyang">商品</Link>{' '}
          /{' '}
          <Link href={`/products?cat=${p.categorySlug}`} className="hover:text-nanyang">
            {category?.nameZh ?? p.categorySlug}
          </Link>{' '}
          / {p.nameZh}
        </nav>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <ProductGallery images={p.images} alt={p.nameZh} />
          <ProductPurchasePanel
            product={{
              id: p.id,
              slug: p.slug,
              nameZh: p.nameZh,
              nameEn: p.nameEn,
              tagline: p.tagline,
              description: p.description,
              variants: p.variants.map((v) => ({
                id: v.id,
                label: v.label,
                priceCents: v.priceCents,
                stock: v.stock,
              })),
              benefits: benefitNames,
              imageUrl: p.images[0] ?? '',
              reviewCount,
              rating,
            }}
          />
        </div>
      </Container>

      <PeranakanDivider />

      <Container className="max-w-4xl space-y-20">
        <section>
          <h2 className="font-display text-2xl mb-6">功效</h2>
          <BenefitIcons benefits={benefitNames} />
        </section>

        <section>
          <h2 className="font-display text-2xl mb-6">成分</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {p.ingredients.map((i) => (
              <li key={i} className="border border-sage/30 p-3 text-sm text-cacao/80">{i}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl mb-6">品质保证</h2>
          <TrustBadges malNumber={p.malNumber} halalStatus={p.halalStatus} />
        </section>

        <section>
          <h2 className="font-display text-2xl mb-6">食用方法</h2>
          <p className="text-cacao/80 leading-relaxed whitespace-pre-wrap">{p.howToUse}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl mb-6">详细介绍</h2>
          <div className="text-cacao/80 leading-relaxed whitespace-pre-wrap">{p.longDescription}</div>
        </section>

        <section>
          <h2 className="font-display text-2xl mb-6">用户评价 ({reviewCount})</h2>
          <ReviewList reviews={p.reviews} />
        </section>
      </Container>
    </article>
  )
}
