'use client'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/hooks/useCart'
import { formatMYR, shippingFor } from '@/lib/pricing'

export default function CartPage() {
  const { lines, update, remove, subtotalCents } = useCart()
  const shipping = shippingFor(subtotalCents)
  const total = subtotalCents + shipping

  if (lines.length === 0) {
    return (
      <Section>
        <Container className="max-w-2xl text-center">
          <h1 className="font-display text-3xl mb-4">购物车</h1>
          <p className="text-sage mb-8">您的购物车还是空的</p>
          <Link href="/products">
            <Button>去逛逛</Button>
          </Link>
        </Container>
      </Section>
    )
  }

  return (
    <Section>
      <Container className="max-w-4xl">
        <h1 className="font-display text-3xl mb-8">购物车</h1>
        <div className="space-y-6 mb-10">
          {lines.map((l) => (
            <div key={l.variantId} className="flex gap-4 pb-6 border-b border-sage/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.imageUrl} alt="" className="h-24 w-24 object-cover bg-coconut" />
              <div className="flex-1">
                <h3 className="font-display text-lg">{l.nameZh}</h3>
                <p className="text-sm text-sage">{l.variantLabel}</p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center border border-sage/40 rounded-sm">
                    <button
                      onClick={() => update(l.variantId, l.qty - 1)}
                      className="h-9 w-9 hover:bg-coconut"
                      aria-label="减少"
                    >
                      −
                    </button>
                    <span className="w-10 text-center text-sm">{l.qty}</span>
                    <button
                      onClick={() => update(l.variantId, l.qty + 1)}
                      className="h-9 w-9 hover:bg-coconut"
                      aria-label="增加"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => remove(l.variantId)}
                    className="text-sm text-sage underline hover:text-rouge"
                  >
                    移除
                  </button>
                </div>
              </div>
              <div className="font-display text-nanyang">
                {formatMYR(l.priceCents * l.qty)}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-coconut/40 p-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span>小计</span>
            <span>{formatMYR(subtotalCents)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>运费</span>
            <span>{shipping === 0 ? '免运费' : formatMYR(shipping)}</span>
          </div>
          {subtotalCents < 15000 && (
            <p className="text-xs text-turmeric">
              再购买 {formatMYR(15000 - subtotalCents)} 即可享免运费
            </p>
          )}
          <div className="flex justify-between text-lg font-display text-nanyang pt-3 border-t border-sage/30">
            <span>合计</span>
            <span>{formatMYR(total)}</span>
          </div>
          <Link href="/checkout" className="block pt-4">
            <Button className="w-full" size="lg">
              前往结账
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
