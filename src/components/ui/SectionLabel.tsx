import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-medium tracking-[0.2em] uppercase text-stone',
        className
      )}
    >
      {children}
    </span>
  )
}
