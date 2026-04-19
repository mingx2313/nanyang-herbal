export const dynamic = 'force-dynamic'

import { db } from '@/lib/db'
import { formatMYR } from '@/lib/pricing'

export default async function AdminDashboard() {
  const [orderCount, revenue, productCount, pendingOrders] = await Promise.all([
    db.order.count(),
    db.order.aggregate({ _sum: { totalCents: true }, where: { status: { not: 'CANCELLED' } } }),
    db.product.count({ where: { active: true } }),
    db.order.count({ where: { status: 'PAID' } }),
  ])

  const stats = [
    { label: '总订单', value: orderCount },
    { label: '累计营收', value: formatMYR(revenue._sum.totalCents ?? 0) },
    { label: '上架商品', value: productCount },
    { label: '待发货', value: pendingOrders },
  ]

  return (
    <div>
      <h1 className="font-display text-2xl text-cacao mb-6">概览</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-sm p-5 shadow-sm">
            <p className="text-xs text-sage mb-1">{s.label}</p>
            <p className="font-display text-2xl text-cacao">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
