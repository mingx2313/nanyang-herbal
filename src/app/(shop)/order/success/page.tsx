import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function OrderSuccessPage() {
  return (
    <Section>
      <Container className="max-w-lg text-center">
        <div className="text-5xl mb-6">✓</div>
        <h1 className="font-display text-3xl text-cacao mb-3">订单已确认</h1>
        <p className="text-cacao/70 leading-relaxed mb-8">
          感谢您的购买！我们将在工作日24小时内安排发货,
          请留意您的电子邮箱收取物流更新通知。
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/account">
            <Button variant="outline">查看订单</Button>
          </Link>
          <Link href="/products">
            <Button>继续购物</Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
