import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/** Velo muy suave: la foto se ve casi al 100 %; la legibilidad la aporta la ficha */
export const BANNER_OVERLAY_READABLE = 'from-transparent via-transparent to-background/18'

type BannerHeroPanelProps = {
  children: ReactNode
  className?: string
}

/**
 * Tarjeta clara sobre el PageBanner, centrada en el hero (panel y texto).
 */
export function BannerHeroPanel({ children, className }: BannerHeroPanelProps) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-3xl flex-col items-center rounded-lg border border-border/50 bg-background/90 px-4 py-5 text-center shadow-[0_12px_48px_-16px_rgba(0,0,0,0.18)] backdrop-blur-md sm:rounded-xl sm:p-7 md:p-8',
        className
      )}
    >
      {children}
    </div>
  )
}
