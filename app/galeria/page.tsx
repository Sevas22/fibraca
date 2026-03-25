'use client'

import SiteLayout from '@/components/site-layout'
import { BannerHeroPanel, BANNER_OVERLAY_READABLE } from '@/components/banner-hero-panel'
import { PageBanner } from '@/components/page-banner'
import Image from 'next/image'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils'

const galleryItems = [
  { id: 1, src: '/images/gallery-1.jpg', title: 'Pasarela industrial PRFV', category: 'Instalaciones', desc: 'Pasarela de rejilla moldeada sobre canal en planta química costera.' },
  { id: 2, src: '/images/gallery-2.jpg', title: 'Barandilla de seguridad PRFV', category: 'Seguridad', desc: 'Sistema de barandilla pultruída en escaleras de acceso industrial.' },
  { id: 3, src: '/images/gallery-3.jpg', title: 'Tubería sin zanja', category: 'Infraestructura', desc: 'Renovación de red de agua potable urbana DN400 mediante CIPP PRFV.' },
  { id: 4, src: '/images/gallery-4.jpg', title: 'Parque solar con estructura PRFV', category: 'Energía Solar', desc: 'Montaje fotovoltaico de 50 MW con perfil estructural pultruído.' },
  { id: 5, src: '/images/sector-construccion.jpg', title: 'Refuerzo estructural', category: 'Construcción', desc: 'Colocación de barras PRFV en obra civil de alta velocidad ferroviaria.' },
  { id: 6, src: '/images/sector-energia.jpg', title: 'Instalación solar PRFV', category: 'Energía Solar', desc: 'Perfiles de montaje de aluminio sustituidos por PRFV en parque solar.' },
  { id: 7, src: '/images/sector-agua.jpg', title: 'Sistema de tuberías PRFV', category: 'Infraestructura', desc: 'Línea de conducción de agua industrial con tubería PRFV DN600.' },
  { id: 8, src: '/images/product-rejillas.jpg', title: 'Rejillas industriales', category: 'Productos', desc: 'Rejillas moldeadas 38×38mm para plataforma de proceso offshore.' },
  { id: 9, src: '/images/product-perfiles.jpg', title: 'Perfiles estructurales', category: 'Productos', desc: 'Perfiles angulares L y U pultruídos para estructura de soporte.' },
  { id: 10, src: '/images/product-tubos.jpg', title: 'Tubos redondos PRFV', category: 'Productos', desc: 'Tubería circular pultruída para instalaciones de baja presión.' },
  { id: 11, src: '/images/product-barras.jpg', title: 'Barras de refuerzo', category: 'Productos', desc: 'Barras de PRFV Ø8 y Ø12 para refuerzo de hormigón.' },
  { id: 12, src: '/images/product-bandeja.jpg', title: 'Bandeja portacables', category: 'Instalaciones', desc: 'Bandeja portacables 200mm PRFV en sala de control offshore.' },
]

const categories = ['Todos', 'Instalaciones', 'Seguridad', 'Infraestructura', 'Energía Solar', 'Construcción', 'Productos']

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null)

  const filtered = activeCategory === 'Todos'
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeCategory)

  return (
    <SiteLayout>
      <PageBanner
        imageSrc="/images/banner-marca.png"
        sectionClassName="pt-32 pb-16 md:pb-20"
        innerClassName="container-max"
        aria-labelledby="galeria-heading"
        overlayClassName={BANNER_OVERLAY_READABLE}
      >
        <BannerHeroPanel>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Galería</p>
          <h1
            id="galeria-heading"
            className="mb-6 text-balance font-display text-4xl font-black text-foreground md:text-6xl"
          >
            Productos en entornos reales
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Imágenes de instalaciones, proyectos y productos Fibraca en uso real a lo largo del mundo.
          </p>
        </BannerHeroPanel>
      </PageBanner>

      <div className="border-b border-border/50 bg-gradient-to-b from-muted/40 to-background">
        <div className="container-max pt-10 pb-8 md:pt-12 md:pb-10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Filtrar por sector</p>
              <p className="mt-1 font-display text-lg font-bold text-foreground md:text-xl">
                {filtered.length}{' '}
                <span className="font-medium text-muted-foreground">
                  {filtered.length === 1 ? 'imagen' : 'imágenes'}
                  {activeCategory !== 'Todos' ? ` · ${activeCategory}` : ''}
                </span>
              </p>
            </div>
          </div>

          <div
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] md:flex-wrap md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Filtrar por categoría"
          >
            {categories.map((cat) => {
              const active = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200',
                    active
                      ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25'
                      : 'border-border/80 bg-card text-muted-foreground hover:border-primary/40 hover:bg-muted/60 hover:text-foreground'
                  )}
                  aria-pressed={active}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <section className="bg-background pb-24 pt-8 md:pb-28 md:pt-10" aria-label="Galería de imágenes">
        <div className="container-max">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60 bg-card text-left shadow-[0_4px_24px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_40px_-16px_rgba(61,90,52,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label={`Ampliar imagen: ${item.title}`}
                onClick={() => setLightbox(item)}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141a14]/90 via-[#141a14]/25 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 md:right-4 md:top-4">
                  <ZoomIn className="h-4 w-4" aria-hidden />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                  <span className="inline-block rounded-full bg-primary/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                    {item.category}
                  </span>
                  <p className="mt-2 line-clamp-2 font-display text-sm font-bold leading-snug text-primary-foreground md:text-base">
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/25 p-4 backdrop-blur-sm md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full border border-border/60 bg-card/95 p-2.5 text-muted-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground md:right-8 md:top-8"
            aria-label="Cerrar imagen"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <div className="w-full max-w-4xl pt-10 md:pt-0" onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_24px_80px_-20px_rgba(0,0,0,0.2)]">
              <div className="relative aspect-[16/10] bg-muted/40">
                <Image
                  src={lightbox.src}
                  alt={lightbox.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
              <div className="border-t border-border/50 bg-gradient-to-b from-card to-muted/20 px-6 py-7 md:px-9 md:py-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0 flex-1 space-y-3">
                    <h2 className="font-display text-xl font-bold leading-snug tracking-tight text-foreground md:text-2xl">
                      {lightbox.title}
                    </h2>
                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{lightbox.desc}</p>
                  </div>
                  <span className="shrink-0 self-start rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {lightbox.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  )
}
