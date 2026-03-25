'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

type PageBannerProps = {
  /** Ruta en /public, p. ej. /images/banner-contacto.png */
  imageSrc: string
  children: React.ReactNode
  /** Clases del section (padding, bordes) */
  sectionClassName?: string
  /** Clases del contenedor interior (text-center, etc.) */
  innerClassName?: string
  /** Capas de velo para legibilidad sobre la foto */
  overlayClassName?: string
} & React.ComponentPropsWithoutRef<'section'>

/**
 * Cabecera de página con imagen de marca PRFV y velo al color del sitio.
 */
export function PageBanner({
  imageSrc,
  children,
  sectionClassName,
  innerClassName,
  overlayClassName = 'from-transparent via-transparent to-background/18',
  ...sectionProps
}: PageBannerProps) {
  return (
    <section className={cn('relative overflow-hidden', sectionClassName)} {...sectionProps}>
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="object-cover object-center brightness-[1.08] contrast-[0.98]"
          sizes="100vw"
        />
        <div className={cn('absolute inset-0 bg-gradient-to-b', overlayClassName)} />
      </div>
      <div className={cn('relative z-10', innerClassName)}>{children}</div>
    </section>
  )
}
