export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { db } from '@/lib/db'
import { formatMYR } from '@/lib/pricing'
import { ProductToggle } from '@/components/admin/ProductToggle'

export default async function AdminProducts() {
  const products = await db.product.findMany({
    include: { category: true, variants: { orderBy: { priceCents: 'asc' }, take: 1 } },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-cacao">商品管理</h1>
      </div>

      <div className="bg-white rounded-sm shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-sage/20">
            <tr className="text-left text-xs text-sage">
              <th className="px-4 py-3">商品名称</th>
              <th className="px-4 py-3">分类</th>
              <th className="px-4 py-3">起售价</th>
              <th className="px-4 py-3">上架</th>
              <th className="px-4 py-3">精选</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sage/10">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-coconut/20">
                <td className="px-4 py-3">
                  <div className="font-medium">{p.nameZh}</div>
                  <div className="text-xs text-sage">{p.nameEn}</div>
                </td>
                <td className="px-4 py-3 text-sage">{p.category.nameZh}</td>
                <td className="px-4 py-3">
                  {p.variants[0] ? formatMYR(p.variants[0].priceCents) : '—'}
                </td>
                <td className="px-4 py-3">
                  <ProductToggle productId={p.id} field="active" value={p.active} />
                </td>
                <td className="px-4 py-3">
                  <ProductToggle productId={p.id} field="featured" value={p.featured} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
