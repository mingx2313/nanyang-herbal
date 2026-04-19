import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/login?callbackUrl=/admin')
  if (session.user.role !== 'ADMIN') redirect('/')

  return (
    <div className="min-h-screen flex bg-coconut/30">
      <aside className="w-52 bg-cacao text-ivory flex flex-col shrink-0">
        <div className="px-5 py-6 font-display text-lg border-b border-ivory/10">
          管理后台
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
          <Link href="/admin" className="block px-3 py-2 rounded hover:bg-ivory/10 transition-colors">
            概览
          </Link>
          <Link href="/admin/orders" className="block px-3 py-2 rounded hover:bg-ivory/10 transition-colors">
            订单管理
          </Link>
          <Link href="/admin/products" className="block px-3 py-2 rounded hover:bg-ivory/10 transition-colors">
            商品管理
          </Link>
          <Link href="/admin/discounts" className="block px-3 py-2 rounded hover:bg-ivory/10 transition-colors">
            优惠码
          </Link>
        </nav>
        <div className="px-5 py-4 border-t border-ivory/10 text-xs text-ivory/50">
          {session.user.email}
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  )
}
