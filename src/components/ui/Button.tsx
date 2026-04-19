import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/cn'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = 'primary', size = 'md', className, ...rest },
  ref,
) {
  const base =
    'inline-flex items-center justify-center font-body font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-sm tracking-wide'
  const variants = {
    primary: 'bg-nanyang text-ivory hover:bg-nanyang-dark',
    outline: 'border border-cacao text-cacao hover:bg-coconut',
    ghost: 'text-cacao hover:bg-coconut',
  }
  const sizes = {
    sm: 'h-10 px-4 text-sm min-w-[44px]',
    md: 'h-12 px-6 text-base min-w-[44px]',
    lg: 'h-14 px-8 text-base min-w-[44px]',
  }
  return (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...rest} />
  )
})
