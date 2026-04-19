import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { PeranakanDivider } from '@/components/ui/PeranakanDivider'

export function Footer() {
  return (
    <footer className="bg-coconut/60 mt-24 border-t border-sage/30 pb-16 md:pb-0">
      <Container className="pt-16 pb-10">
        <PeranakanDivider className="mt-0 mb-12 text-nanyang" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-lg text-nanyang mb-3">南洋本草</h3>
            <p className="text-sm text-cacao/80 leading-relaxed">
              承袭东方本草智慧,以现代工艺呈现南洋风土的健康之道。
            </p>
          </div>
          <div>
            <h4 className="font-body font-medium text-sm mb-4">选购</h4>
            <ul className="space-y-2 text-sm text-cacao/80">
              <li><Link href="/products" className="hover:text-nanyang">全部商品</Link></li>
              <li><Link href="/products?cat=yanwo" className="hover:text-nanyang">燕窝</Link></li>
              <li><Link href="/products?cat=collagen" className="hover:text-nanyang">胶原蛋白</Link></li>
              <li><Link href="/products?cat=giftsets" className="hover:text-nanyang">养生礼盒</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-medium text-sm mb-4">关于我们</h4>
            <ul className="space-y-2 text-sm text-cacao/80">
              <li><Link href="/brand" className="hover:text-nanyang">品牌故事</Link></li>
              <li><Link href="/faq" className="hover:text-nanyang">常见问题</Link></li>
              <li><Link href="/faq#returns" className="hover:text-nanyang">退货政策</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-medium text-sm mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm text-cacao/80">
              <li>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" className="hover:text-nanyang flex items-center gap-1.5">
                  <span>💬</span> WhatsApp: +60 12-345 6789
                </a>
              </li>
              <li>
                <a href="mailto:hello@nanyangherbal.com.my" className="hover:text-nanyang flex items-center gap-1.5">
                  <span>✉️</span> hello@nanyangherbal.com.my
                </a>
              </li>
              <li className="text-cacao/60 text-xs mt-1">
                周一至周六 9:00–18:00
              </li>
              <li className="text-cacao/60 text-xs">
                Level 3, Bangsar South, KL
              </li>
            </ul>
          </div>
        </div>

        {/* Payment logos */}
        <div className="border-t border-sage/30 pt-8 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div className="flex items-center gap-4 flex-wrap text-cacao/70">
            <span className="text-xs">HALAL 申请中</span>
            <span className="text-xs">KKM MAL19991234N</span>
            <span className="text-xs">SSM 202401012345</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap text-cacao/70">
            {/* eslint-disable @next/next/no-img-element */}
            <img src="/logos/fpx.svg" alt="FPX" className="h-6" />
            <img src="/logos/tng.svg" alt="Touch n Go" className="h-6" />
            <img src="/logos/grabpay.svg" alt="GrabPay" className="h-6" />
            <img src="/logos/boost.svg" alt="Boost" className="h-6" />
            <img src="/logos/visa.svg" alt="Visa" className="h-6" />
            <img src="/logos/mastercard.svg" alt="Mastercard" className="h-6" />
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </div>

        <p className="text-xs text-cacao/50 text-center mt-10">
          © 2026 Nanyang Herbal 南洋本草 · 本网站仅供示范之用
        </p>
      </Container>
    </footer>
  )
}
