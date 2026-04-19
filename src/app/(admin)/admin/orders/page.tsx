export const dynamic = 'force-dynamic'

import { db } from '@/lib/db'
import { formatMYR } from '@/lib/pricing'
import { OrderStatusSelect } from '@/components/admin/OrderStatusSelect'

export default async function AdminOrders({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; page?: string }>
}) {
  const { status, page } = await searchParams
  const pageNum = Number(page ?? 1)
  const take = 25
  const skip = (pageNum - 1) * take

  const where = status ? { status } : {}

  const [orders, total] = await Promise.all([
    db.order.findMany({
      where,
      include: { user: { select: { email: true, name: true } }, items: true },
      orderBy: { createdAt: 'desc' },
      take,
      skip,
    }),
    db.order.count({ where }),
  ])

  const STATUS_LABEL: Record<string, string> = {
    PENDING: '待付款', PAID: '已付款', SHIPPED: '已发货',
    DELIVERED: '已送达', CANCELLED: '已取消',
  }
  const STATUSES = Object.keys(STATUS_LABEL)

  return (
    <div>
      <h1 className="font-display text-2xl text-cacao mb-6">订单管理</h1>

      <div className="flex gap-2 mb-4 text-sm">
        <a href="/admin/orders" className={`px-3 py-1 rounded-sm ${!status ? 'bg-cacao text-ivory' : 'bg-white'}`}>全部</a>
        {STATUSES.map((s) => (
          <a key={s} href={`/admin/orders?status=${s}`}
            className={`px-3 py-1 rounded-sm ${status === s ? 'bg-cacao text-ivory' : 'bg-white'}`}>
            {STATUS_LABEL[s]}
          </a>
        ))}
      </div>

      <div className="bg-white rounded-sm shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-sage/20">
            <tr className="text-left text-xs text-sage">
              <th className="px-4 py-3">订单号</th>
              <th className="px-4 py-3">用户</th>
              <th className="px-4 py-3">商品</th>
              <th className="px-4 py-3">金额</th>
              <th className="px-4 py-3">日期</th>
              <th className="px-4 py-3">状态</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sage/10">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-coconut/20">
                <td className="px-4 py-3 font-mono text-xs">#{o.id.slice(-8).toUpperCase()}</td>
                <td className="px-4 py-3">
                  <div>{o.user.name ?? '—'}</div>
                  <div className="text-xs text-sage">{o.user.email}</div>
                </td>
                <td className="px-4 py-3 text-xs text-cacao/70">
                  {o.items.map((i) => `${i.nameSnapshot}×${i.qty}`).join(', ')}
                </td>
                <td className="px-4 py-3 font-display">{formatMYR(o.totalCents)}</td>
                <td className="px-4 py-3 text-xs text-sage">
                  {new Date(o.createdAt).toLocaleDateString('zh-CN')}
                </td>
                <td className="px-4 py-3">
                  <OrderStatusSelect orderId={o.id} current={o.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {orders.length === 0 && (
          <p className="text-center text-sage py-10 text-sm">暂无订单</p>
        )}
      </div>

      <p className="text-xs text-sage mt-3">共 {total} 条记录</p>
    </div>
  )
}
