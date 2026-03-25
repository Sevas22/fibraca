'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import HeroStats from '@/components/home/hero-stats'
import HeroImageCarousel from '@/components/home/hero-image-carousel'

/**
 * Alineación con `.container-max`: mismo borde izquierdo (max-w-7xl centrado + 20px).
 */
const heroTextGutter =
  'pl-5 lg:pl-[max(1.25rem,calc((100vw-min(100vw,80rem))/2+1.25rem))] pr-5'

export default function HeroSection() {
  return (
    <section className="relative bg-background pt-20 lg:pt-0" aria-label="Sección principal">
      {/* Mobile / tablet: imagen arriba (dentro del contenedor con relleno) */}
      <div className="container-max lg:hidden">
        <div className="relative h-[34vh] min-h-[200px] max-h-[380px] overflow-hidden rounded-lg">
          <HeroImageCarousel sizes="100vw" showLeftGradient={false} compact />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-20 bg-gradient-to-t from-background to-transparent"
            aria-hidden
          />
        </div>
      </div>

      {/* Desktop: rejilla a ancho completo — imagen derecha hasta el borde del viewport */}
      <div className="lg:grid lg:grid-cols-2 lg:min-h-0 lg:items-stretch w-full">
        <div
          className={`
            relative z-10 flex flex-col lg:justify-start
            ${heroTextGutter}
            pt-8 pb-14 md:pt-10 md:pb-16
            lg:pt-28 lg:pb-8 xl:pt-32 xl:pb-10
            lg:gap-8 xl:gap-9
          `}
        >
          {/* Bloque superior: titular y CTAs */}
          <div className="w-full max-w-xl lg:max-w-none shrink-0">
            <div className="flex items-center gap-3 mb-6 lg:mb-7">
              <span className="h-px w-10 bg-primary shrink-0" aria-hidden />
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-primary">
                PRFV · Fibra de vidrio
              </span>
            </div>

            <h1 className="text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[clamp(2.35rem,4.2vw,3.65rem)] xl:text-[clamp(2.5rem,3.8vw,4rem)] font-display font-black leading-[1.05] tracking-tight text-foreground text-balance max-w-[22ch] sm:max-w-none lg:max-w-[28ch] xl:max-w-[32ch]">
              Ingeniería que{' '}
              <span className="text-gradient">resiste</span>
              {' '}
              <br className="hidden sm:block" />
              <span>el futuro</span>
            </h1>

            <p className="mt-5 lg:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed lg:max-w-[38ch] xl:max-w-[42ch]">
              Soluciones PRFV para construcción, energía e infraestructura: alta resistencia, cero corrosión y vida útil
              prolongada.
            </p>

            <div className="mt-7 lg:mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                href="/productos"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-lg hover:bg-primary-hover transition-colors shadow-[0_4px_24px_-4px_color-mix(in_srgb,var(--primary),transparent_40%)] text-sm tracking-wide"
              >
                Ver tienda
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground font-medium px-7 py-3.5 rounded-lg hover:border-primary/35 hover:bg-muted/80 transition-colors text-sm tracking-wide"
              >
                Ver proyectos
              </Link>
            </div>
          </div>

          <HeroStats />
        </div>

        {/* Mitad derecha: carrusel a sangrado completo (borde derecho del viewport) */}
        <div className="relative hidden min-h-[min(100vh-5rem,820px)] overflow-hidden border-l border-border/60 lg:block">
          <HeroImageCarousel sizes="50vw" showLeftGradient />
        </div>
      </div>

      <div className="container-max lg:hidden flex justify-center pb-8 pt-2 text-muted-foreground">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden />
        </div>
      </div>
    </section>
  )
}
