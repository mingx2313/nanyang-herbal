export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { ProductGrid } from '@/components/product/ProductGrid'
import { searchProducts, productToCardData } from '@/lib/mock-data'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = q?.trim() ?? ''
  const products = query ? searchProducts(query) : []

  return (
    <Section className="pt-10">
      <Container>
        <h1 className="font-display text-3xl mb-6">搜索商品</h1>
        <form action="/search" method="get" className="flex gap-2 max-w-xl mb-10">
          <Input name="q" placeholder="搜索燕窝、人参、维生素..." defaultValue={query} />
          <Button type="submit">搜索</Button>
        </form>

        {query && (
          <p className="text-sage text-sm mb-6">
            搜索 &ldquo;{query}&rdquo; 共 {products.length} 件商品
          </p>
        )}

        {query && products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-sage mb-6">没有找到相关商品</p>
            <Link href="/products" className="text-nanyang underline">
              浏览全部商品 →
            </Link>
          </div>
        )}

        {products.length > 0 && <ProductGrid products={products.map(productToCardData)} />}
      </Container>
    </Section>
  )
}
