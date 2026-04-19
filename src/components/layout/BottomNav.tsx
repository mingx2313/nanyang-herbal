'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Grid, ShoppingBag, User } from 'lucide-react'
import { useCartCount } from '@/hooks/useCart'

const NAV = [
  { href: '/', label: '首页', Icon: Home },
  { href: '/products', label: '商品', Icon: Grid },
  { href: '/cart', label: '购物车', Icon: ShoppingBag },
  { href: '/account', label: '账户', Icon: User },
]

export function BottomNav() {
  const pathname = usePathname()
  const count = useCartCount()

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-ivory border-t border-sage/30 flex">
      {NAV.map(({ href, label, Icon }) => {
        const active = pathname === href || (href !== '/' && pathname.startsWith(href))
        return (
          <Link
            key={href}
            href={href}
            className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 relative ${
              active ? 'text-nanyang' : 'text-cacao/50'
            }`}
          >
            <span className="relative">
              <Icon className="h-5 w-5" strokeWidth={active ? 2 : 1.5} />
              {href === '/cart' && count > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-rouge text-ivory text-[9px] h-4 min-w-[14px] px-0.5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </span>
            <span className="text-[10px] leading-none">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
