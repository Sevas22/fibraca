import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const galleryItems = [
  {
    image: '/images/gallery-1.jpg',
    title: 'Pasarela industrial PRFV',
    desc: 'Instalación en planta química costera',
    layout: 'tall' as const,
  },
  {
    image: '/images/gallery-2.jpg',
    title: 'Barandilla de seguridad',
    desc: 'Escaleras de acceso en refinería',
    layout: 'cell' as const,
  },
  {
    image: '/images/gallery-4.jpg',
    title: 'Montaje fotovoltaico',
    desc: 'Parque solar con estructura PRFV',
    layout: 'cell' as const,
  },
  {
    image: '/images/gallery-3.jpg',
    title: 'Tubería sin zanja',
    desc: 'Renovación de red de agua potable urbana',
    layout: 'wide' as const,
  },
]

export default function GallerySection() {
  return (
    <section
      className="relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-muted/50 via-background to-background pt-20 pb-24 md:pt-24 md:pb-28"
      aria-labelledby="galeria-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden
      />
      <div className="container-max relative">
        <div className="mb-12 flex flex-col gap-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-12 bg-primary shrink-0" aria-hidden />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary">Galería</span>
            </div>
            <h2
              id="galeria-heading"
              className="font-display text-4xl font-black leading-[1.08] tracking-tight text-balance text-foreground md:text-5xl lg:text-[2.75rem] lg:leading-[1.05]"
            >
              Productos en{' '}
              <span className="text-gradient">acción</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Instalaciones reales: rejillas, barandillas, energía solar e infraestructura hídrica con PRFV.
            </p>
          </div>
          <Link
            href="/galeria"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-primary/35 bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md md:self-end"
          >
            Ver galería completa
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>

        <div
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5"
          style={{ gridAutoRows: 'minmax(160px, 1fr)' }}
        >
          {galleryItems.map((item) => (
            <Link
              key={item.title}
              href="/galeria"
              aria-label={`${item.title} — ver en galería`}
              className={[
                'group relative block min-h-[160px] overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_-16px_rgba(61,90,52,0.25)] md:min-h-[200px]',
                item.layout === 'tall' ? 'row-span-2 md:min-h-0' : '',
                item.layout === 'wide' ? 'col-span-2 md:col-span-2 md:col-start-2' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141a14]/92 via-[#141a14]/40 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 md:right-4 md:top-4">
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80 md:text-[11px]">
                  Caso real
                </p>
                <h3 className="mt-1 font-display text-base font-bold leading-snug text-primary-foreground md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-300 group-hover:opacity-100 md:mt-2">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
