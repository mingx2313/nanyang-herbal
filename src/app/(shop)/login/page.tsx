import { Suspense } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { LoginForm } from './LoginForm'

export default function LoginPage() {
  return (
    <Section>
      <Container className="max-w-md">
        <Suspense>
          <LoginForm />
        </Suspense>
      </Container>
    </Section>
  )
}
