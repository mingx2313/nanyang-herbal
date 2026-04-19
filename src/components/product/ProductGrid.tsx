import { ProductCard, type ProductCardData } from './ProductCard'

export function ProductGrid({ products }: { products: ProductCardData[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {products.map((p) => (
        <ProductCard key={p.slug} p={p} />
      ))}
    </div>
  )
}
