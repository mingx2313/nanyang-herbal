import { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export function Container({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 md:px-8', className)} {...rest} />
}
