import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/cn'

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...rest }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          'h-12 w-full border border-sage/40 bg-ivory px-4 text-base text-cacao placeholder:text-sage/70 focus:outline-none focus:border-nanyang rounded-sm',
          className,
        )}
        {...rest}
      />
    )
  },
)
