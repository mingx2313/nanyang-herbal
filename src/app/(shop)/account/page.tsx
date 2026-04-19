import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import Link from 'next/link'

export default function AccountPage() {
  return (
    <Section className="pt-20">
      <Container className="max-w-md text-center">
        <h1 className="font-display text-3xl mb-4">会员中心</h1>
        <p className="text-cacao/70 mb-8">此功能即将开放，敬请期待。</p>
        <Link href="/products" className="text-nanyang underline underline-offset-4">
          继续选购 →
        </Link>
      </Container>
    </Section>
  )
}
