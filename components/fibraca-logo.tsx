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
 * Isotipo: silueta latinoamericana (referencia regional) + fibras PRFV en paralelo.
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
      <g clipPath={`url(#${clipId})`}>
        {/* América Latina — forma esquemática (negocio regional), detrás de las fibras */}
        <g transform="translate(24 31.5) scale(0.92)" fill="currentColor" opacity={light ? 0.22 : 0.16}>
          <path d="M -14 -9.5 C -15 -6 -14 -2 -12 1 C -11 4 -8 6 -5 6.5 C -1 7 3 6 6.5 4 C 10 2 12.5 -1 13 -4.5 C 13.5 -8 11.5 -11 8 -12.5 C 4 -14 -1 -13.5 -5 -12 C -9.5 -11 -13.5 -10.5 -14 -9.5 Z" />
          <path d="M -5 -12 L -7 -15.5 L -3.5 -16.5 L -1 -14.5 L -2 -12.5 Z" opacity="0.85" />
        </g>
        <g stroke="currentColor" strokeLinecap="round">
          <g transform="translate(24 24) rotate(-27)">
            <line x1="-19" y1="-7.5" x2="19" y2="-7.5" strokeWidth="2.2" opacity="0.4" />
            <line x1="-19" y1="-2.5" x2="19" y2="-2.5" strokeWidth="2.35" opacity="0.72" />
            <line x1="-19" y1="2.5" x2="19" y2="2.5" strokeWidth="2.35" opacity="0.72" />
            <line x1="-19" y1="7.5" x2="19" y2="7.5" strokeWidth="2.2" opacity="0.4" />
          </g>
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
