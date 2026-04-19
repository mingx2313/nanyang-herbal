import { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type Tone = 'green' | 'pink' | 'turmeric' | 'sage'

export function Badge({
  className,
  tone = 'green',
  ...rest
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  const tones: Record<Tone, string> = {
    green: 'bg-nanyang/10 text-nanyang',
    pink: 'bg-enamel/20 text-rouge',
    turmeric: 'bg-turmeric/20 text-cacao',
    sage: 'bg-sage/20 text-cacao',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-sm',
        tones[tone],
        className,
      )}
      {...rest}
    />
  )
}
