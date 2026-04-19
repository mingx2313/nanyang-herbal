import { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export function Section({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return <section className={cn('py-16 md:py-24', className)} {...rest} />
}
