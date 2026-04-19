export const dynamic = 'force-dynamic'

import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { formatMYR } from '@/lib/pricing'
import { AccountSignOut } from '@/components/account/AccountSignOut'

export default async function AccountPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/login?callbackUrl=/account')

  const orders = await db.order.findMany({
    where: { userId: session.user.id },
    include: { items: true },
    orderBy: { createdAt: 'desc' },
    take: 20,
  })

  const STATUS_LABEL: Record<string, string> = {
    PENDING: '待付款',
    PAID: '已付款',
    SHIPPED: '已发货',
    DELIVERED: '已送达',
    CANCELLED: '已取消',
  }

  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl text-cacao">我的账户</h1>
            <p className="text-sage text-sm mt-1">{session.user.email}</p>
          </div>
          <AccountSignOut />
        </div>

        <h2 className="font-display text-xl mb-4">订单记录</h2>

        {orders.length === 0 ? (
          <p className="text-sage py-10 text-center">暂无订单记录</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border border-sage/20 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-sm text-cacao">#{order.id.slice(-8).toUpperCase()}</span>
                  <span className="text-xs bg-coconut px-2 py-1 rounded-sm">
                    {STATUS_LABEL[order.status] ?? order.status}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-cacao/80">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>
                        {item.nameSnapshot} · {item.variantLabelSnapshot} × {item.qty}
                      </span>
                      <span>{formatMYR(item.priceCentsSnapshot * item.qty)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3 pt-3 border-t border-sage/20 text-sm font-display">
                  <span>合计</span>
                  <span className="text-nanyang">{formatMYR(order.totalCents)}</span>
                </div>
                <p className="text-xs text-sage mt-2">
                  {new Date(order.createdAt).toLocaleDateString('zh-CN')}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
