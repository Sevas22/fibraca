'use client'

import { useId } from 'react'

import { cn } from '@/lib/utils'

const MARK_SIZES = { sm: 32, md: 40, lg: 48, xl: 56 } as const

export type FibracaLogoSize = keyof typeof MARK_SIZES

const WORDMARK_BY_SIZE: Record<FibracaLogoSize, string> = {
  sm: 'text-[9px] sm:text-[10px]',
  md: 'text-[10px] sm:text-[11px] md:text-[11px]',
  lg: 'text-[10px] sm:text-xs md:text-xs',
  xl: 'text-[11px] sm:text-xs md:text-sm',
}

/**
 * Isotipo: fibras paralelas (PRFV) dentro de un aro — vector plano, legible a cualquier tamaño.
 */
export function FibracaLogoMark({
  className,
  size = 'md',
  light,
}: {
  className?: string
  size?: FibracaLogoSize
  /** Pie de página: trazo claro */
  light?: boolean
}) {
  const dim = MARK_SIZES[size]
  const clipId = `fibraca-mark-${useId().replace(/:/g, '')}`

  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 48 48"
      className={cn('shrink-0', light ? 'text-white' : 'text-primary', className)}
      aria-hidden
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="24" cy="24" r="20.5" />
        </clipPath>
      </defs>
      <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <g clipPath={`url(#${clipId})`} stroke="currentColor" strokeLinecap="round">
        <g transform="translate(24 24) rotate(-27)">
          <line x1="-19" y1="-7.5" x2="19" y2="-7.5" strokeWidth="2.2" opacity="0.4" />
          <line x1="-19" y1="-2.5" x2="19" y2="-2.5" strokeWidth="2.35" opacity="0.72" />
          <line x1="-19" y1="2.5" x2="19" y2="2.5" strokeWidth="2.35" opacity="0.72" />
          <line x1="-19" y1="7.5" x2="19" y2="7.5" strokeWidth="2.2" opacity="0.4" />
        </g>
      </g>
    </svg>
  )
}

type FibracaLogoProps = {
  className?: string
  markSize?: FibracaLogoSize
  light?: boolean
}

/**
 * Logo completo: isotipo + nombre FIBRACA.
 */
export function FibracaLogo({ className, markSize = 'md', light }: FibracaLogoProps) {
  return (
    <span className={cn('inline-flex flex-col items-start gap-1.5 text-left', className)}>
      <FibracaLogoMark
        size={markSize}
        light={light}
        className={cn('transition-opacity group-hover:opacity-90', light && 'opacity-95')}
      />
      <span
        className={cn(
          'font-display font-black tracking-[0.2em] leading-none select-none',
          WORDMARK_BY_SIZE[markSize],
          light
            ? 'text-footer-fg group-hover:opacity-90'
            : 'text-foreground group-hover:text-primary transition-colors'
        )}
      >
        FIBRACA
      </span>
    </span>
  )
}
