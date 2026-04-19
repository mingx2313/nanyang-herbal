export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ProductGrid } from '@/components/product/ProductGrid'
import { db } from '@/lib/db'
import { toCardData } from '@/lib/productMappers'

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string; benefit?: string }>
}) {
  const { cat, benefit } = await searchParams
  const where: { active: boolean; category?: { slug: string }; benefits?: { some: { benefitTag: { slug: string } } } } = {
    active: true,
  }
  if (cat) where.category = { slug: cat }
  if (benefit) where.benefits = { some: { benefitTag: { slug: benefit } } }

  const products = await db.product.findMany({
    where,
    include: { variants: true, benefits: { include: { benefitTag: true } }, reviews: { select: { rating: true } } },
    orderBy: { createdAt: 'desc' },
  })
  const categories = await db.category.findMany({ orderBy: { order: 'asc' } })
  const benefits = await db.benefitTag.findMany()

  return (
    <Section className="pt-10">
      <Container>
        <h1 className="font-display text-3xl md:text-4xl mb-2">全部商品</h1>
        <p className="text-sage text-sm mb-8">共 {products.length} 件商品</p>

        <div className="mb-10 space-y-4">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/products"
              className={`px-3 py-1.5 text-sm border rounded-sm ${
                !cat
                  ? 'bg-nanyang text-ivory border-nanyang'
                  : 'border-sage/40 hover:border-nanyang'
              }`}
            >
              全部
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products?cat=${c.slug}`}
                className={`px-3 py-1.5 text-sm border rounded-sm ${
                  cat === c.slug
                    ? 'bg-nanyang text-ivory border-nanyang'
                    : 'border-sage/40 hover:border-nanyang'
                }`}
              >
                {c.nameZh}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {benefits.map((b) => (
              <Link
                key={b.slug}
                href={`/products?benefit=${b.slug}`}
                className={`px-3 py-1 text-xs border rounded-full ${
                  benefit === b.slug
                    ? 'bg-turmeric/30 border-turmeric text-cacao'
                    : 'border-sage/30 text-cacao/70 hover:border-turmeric'
                }`}
              >
                #{b.nameZh}
              </Link>
            ))}
          </div>
        </div>

        {products.length === 0 ? (
          <p className="text-sage text-center py-20">暂无商品</p>
        ) : (
          <ProductGrid products={products.map(toCardData)} />
        )}
      </Container>
    </Section>
  )
}
