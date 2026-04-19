'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Search, ShoppingBag, User, Menu } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { MegaMenu } from './MegaMenu'
import { useCartCount } from '@/hooks/useCart'

export function Header() {
  const [open, setOpen] = useState(false)
  const count = useCartCount()
  return (
    <header className="border-b border-sage/30 bg-ivory sticky top-0 z-40">
      <Container className="flex items-center h-16 md:h-20 gap-4">
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setOpen(true)}
          aria-label="菜单"
        >
          <Menu className="h-6 w-6" />
        </button>
        <Link href="/" className="font-display text-xl md:text-2xl font-semibold text-nanyang leading-none">
          南洋本草
          <span className="block text-[10px] md:text-xs font-latinDisplay italic text-sage tracking-widest mt-0.5">
            NANYANG HERBAL
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 ml-10 font-body text-sm text-cacao">
          <Link href="/products" className="hover:text-nanyang transition-colors">全部商品</Link>
          <Link href="/products?cat=yanwo" className="hover:text-nanyang transition-colors">燕窝</Link>
          <Link href="/products?cat=collagen" className="hover:text-nanyang transition-colors">胶原蛋白</Link>
          <Link href="/brand" className="hover:text-nanyang transition-colors">品牌故事</Link>
          <Link href="/faq" className="hover:text-nanyang transition-colors">常见问题</Link>
        </nav>
        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <Link href="/search" aria-label="搜索" className="p-2 hover:text-nanyang">
            <Search className="h-5 w-5" />
          </Link>
          <Link href="/account" aria-label="账户" className="p-2 hover:text-nanyang">
            <User className="h-5 w-5" />
          </Link>
          <Link href="/cart" aria-label="购物车" className="p-2 relative hover:text-nanyang">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute top-0 right-0 bg-rouge text-ivory text-[10px] h-4 min-w-[16px] px-1 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </Container>
      {open && <MegaMenu onClose={() => setOpen(false)} />}
    </header>
  )
}
