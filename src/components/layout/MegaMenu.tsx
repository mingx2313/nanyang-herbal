'use client'
import Link from 'next/link'
import { X } from 'lucide-react'

const CATS = [
  { slug: 'yanwo', label: '燕窝' },
  { slug: 'collagen', label: '胶原蛋白' },
  { slug: 'ginseng', label: '人参参茶' },
  { slug: 'lingzhi', label: '灵芝菇菌' },
  { slug: 'vitamins', label: '维生素补充' },
  { slug: 'giftsets', label: '养生礼盒' },
]

const BENEFITS = [
  { slug: 'qi-blood', label: '补气血' },
  { slug: 'beauty', label: '养颜美容' },
  { slug: 'sleep', label: '助眠安神' },
  { slug: 'energy', label: '提神抗疲劳' },
  { slug: 'immunity', label: '增强免疫' },
  { slug: 'digestion', label: '健脾养胃' },
]

export function MegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="md:hidden fixed inset-0 bg-ivory z-50 overflow-y-auto">
      <div className="flex justify-between items-center p-5 border-b border-sage/30">
        <span className="font-display text-xl text-nanyang">南洋本草</span>
        <button onClick={onClose} aria-label="关闭" className="p-2">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="px-6 py-8 space-y-10">
        <div>
          <h4 className="font-display text-lg text-nanyang mb-4">商品分类</h4>
          <ul className="space-y-3">
            {CATS.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products?cat=${c.slug}`}
                  onClick={onClose}
                  className="block text-base"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-nanyang mb-4">按功效选购</h4>
          <ul className="space-y-3">
            {BENEFITS.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/products?benefit=${b.slug}`}
                  onClick={onClose}
                  className="block text-base"
                >
                  #{b.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 border-t border-sage/30">
          <Link href="/brand" onClick={onClose} className="block py-2">
            品牌故事
          </Link>
          <Link href="/faq" onClick={onClose} className="block py-2">
            常见问题
          </Link>
          <Link href="/contact" onClick={onClose} className="block py-2">
            联系我们
          </Link>
          <Link href="/account" onClick={onClose} className="block py-2">
            我的账户
          </Link>
        </div>
      </div>
    </div>
  )
}
