import { cn } from '@/lib/cn'

export function PeranakanDivider({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center text-nanyang/60 my-12', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/patterns/peranakan-divider.svg" alt="" className="h-6 opacity-70" aria-hidden />
    </div>
  )
}
