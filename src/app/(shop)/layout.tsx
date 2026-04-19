import { ShippingTicker } from '@/components/layout/ShippingTicker'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BottomNav } from '@/components/layout/BottomNav'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ShippingTicker />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BottomNav />
    </>
  )
}
