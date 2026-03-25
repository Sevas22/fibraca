'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const SLIDES = [
  {
    src: '/images/banner-contacto.png',
    alt: 'Rollo de malla de fibra de vidrio y perfiles PRFV en entorno industrial',
  },
  { src: '/images/hero-fiberglass-banner.png', alt: 'Roving y malla de fibra de vidrio PRFV' },
  { src: '/images/sector-construccion.jpg', alt: 'Refuerzo estructural y construcción con PRFV' },
  { src: '/images/sector-energia.jpg', alt: 'Estructuras PRFV para instalación solar' },
  { src: '/images/product-rejillas.jpg', alt: 'Rejillas industriales PRFV en planta' },
  { src: '/images/sector-agua.jpg', alt: 'Tubería y soluciones PRFV para agua y saneamiento' },
] as const

const AUTO_MS = 6500

type HeroImageCarouselProps = {
  sizes: string
  /** Degradado suave en el borde que toca el texto (solo desktop típico) */
  showLeftGradient?: boolean
  /** Variante compacta: puntos y flechas más discretos */
  compact?: boolean
}

export default function HeroImageCarousel({ sizes, showLeftGradient = true, compact = false }: HeroImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((dir: -1 | 1) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (paused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused])

  return (
    <div
      className="absolute inset-0"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Imágenes de productos y aplicaciones PRFV"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            'absolute inset-0 transition-opacity duration-[850ms] ease-in-out',
            i === index ? 'z-[1] opacity-100' : 'z-0 opacity-0'
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className={cn('object-cover', compact ? 'object-center' : 'object-[center_40%]')}
            sizes={sizes}
            priority={i === 0}
          />
        </div>
      ))}

      {showLeftGradient && (
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-20 bg-gradient-to-r from-background to-transparent md:w-24 xl:w-32"
          aria-hidden
        />
      )}

      <div
        className={cn(
          'absolute z-[3] flex gap-2',
          compact ? 'bottom-3 left-1/2 -translate-x-1/2' : 'bottom-5 left-1/2 -translate-x-1/2 md:bottom-6'
        )}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              'rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
              compact
                ? i === index
                  ? 'h-1.5 w-5 bg-primary shadow-sm'
                  : 'h-1.5 w-1.5 bg-white/55 shadow-sm hover:bg-white/90'
                : i === index
                  ? 'h-2 w-7 bg-primary shadow-sm'
                  : 'h-2 w-2 bg-white/55 shadow-sm hover:bg-white/90'
            )}
            aria-label={`Imagen ${i + 1} de ${SLIDES.length}`}
            aria-pressed={i === index}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        className={cn(
          'absolute top-1/2 z-[3] -translate-y-1/2 rounded-full border border-white/35 bg-background/55 p-2 text-foreground shadow-md backdrop-blur-[2px] transition-colors hover:bg-background/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          compact ? 'left-2' : 'left-3 md:left-4'
        )}
        aria-label="Imagen anterior"
      >
        <ChevronLeft className={cn(compact ? 'h-4 w-4' : 'h-5 w-5')} aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className={cn(
          'absolute top-1/2 z-[3] -translate-y-1/2 rounded-full border border-white/35 bg-background/55 p-2 text-foreground shadow-md backdrop-blur-[2px] transition-colors hover:bg-background/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          compact ? 'right-2' : 'right-3 md:right-4'
        )}
        aria-label="Imagen siguiente"
      >
        <ChevronRight className={cn(compact ? 'h-4 w-4' : 'h-5 w-5')} aria-hidden />
      </button>
    </div>
  )
}
