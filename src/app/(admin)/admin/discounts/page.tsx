export const dynamic = 'force-dynamic'

import { db } from '@/lib/db'
import { formatMYR } from '@/lib/pricing'
import { DiscountCreateForm } from '@/components/admin/DiscountCreateForm'
import { DiscountDeleteButton } from '@/components/admin/DiscountDeleteButton'

export default async function AdminDiscounts() {
  const codes = await db.discountCode.findMany({ orderBy: { id: 'desc' } })

  return (
    <div className="space-y-8">
      <h1 className="font-display text-2xl text-cacao">优惠码管理</h1>

      <DiscountCreateForm />

      <div className="bg-white rounded-sm shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-sage/20">
            <tr className="text-left text-xs text-sage">
              <th className="px-4 py-3">优惠码</th>
              <th className="px-4 py-3">折扣</th>
              <th className="px-4 py-3">最低消费</th>
              <th className="px-4 py-3">已用/上限</th>
              <th className="px-4 py-3">到期</th>
              <th className="px-4 py-3">状态</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sage/10">
            {codes.map((c) => (
              <tr key={c.id} className="hover:bg-coconut/20">
                <td className="px-4 py-3 font-mono font-medium">{c.code}</td>
                <td className="px-4 py-3">
                  {c.percentOff ? `${c.percentOff}% OFF` : ''}
                  {c.amountOffCents ? formatMYR(c.amountOffCents) + ' OFF' : ''}
                  {c.freeShipping ? '免运费' : ''}
                </td>
                <td className="px-4 py-3 text-sage">
                  {c.minSubtotalCents ? formatMYR(c.minSubtotalCents) : '—'}
                </td>
                <td className="px-4 py-3 text-sage">
                  {c.timesUsed} / {c.usageLimit ?? '∞'}
                </td>
                <td className="px-4 py-3 text-sage text-xs">
                  {c.expiresAt ? new Date(c.expiresAt).toLocaleDateString('zh-CN') : '永久'}
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-sm ${c.active ? 'bg-sage/20 text-cacao' : 'bg-rouge/10 text-rouge'}`}>
                    {c.active ? '有效' : '已停用'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <DiscountDeleteButton id={c.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {codes.length === 0 && <p className="text-center text-sage py-10 text-sm">暂无优惠码</p>}
      </div>
    </div>
  )
}
