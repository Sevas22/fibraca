import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const sectors = [
  {
    title: 'Construcción',
    description: 'Refuerzo estructural, losas y cimentaciones con barras y mallas PRFV en entornos agresivos.',
    image: '/images/sector-construccion.jpg',
    tags: ['Barras', 'Mallas', 'Perfiles'],
  },
  {
    title: 'Energía Solar',
    description: 'Estructuras de montaje fotovoltaico resistentes a la corrosión, con vida útil de más de 30 años.',
    image: '/images/sector-energia.jpg',
    tags: ['Montaje Solar', 'Perfiles', 'Conectores'],
  },
  {
    title: 'Agua y Saneamiento',
    description: 'Tubería PRFV para conducción de agua potable y saneamiento, incluyendo soluciones sin zanja.',
    image: '/images/sector-agua.jpg',
    tags: ['Tubería', 'Sin Zanja', 'Canales'],
  },
  {
    title: 'Infraestructura Industrial',
    description: 'Pasarelas, escaleras, rejillas y barandillas para plantas industriales, offshore y petroquímica.',
    image: '/images/gallery-1.jpg',
    tags: ['Rejillas', 'Cercas', 'Bandeja Cables'],
  },
]

export default function SectorSection() {
  return (
    <section className="section-padding bg-muted/40 border-t border-border/50" aria-labelledby="sectores-heading">
      <div className="container-max">
        <div className="mb-12 md:mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary shrink-0" aria-hidden />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">Sectores</span>
          </div>
          <h2
            id="sectores-heading"
            className="text-3xl md:text-4xl font-display font-black text-foreground text-balance leading-tight"
          >
            Aplicaciones industriales
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            PRFV donde hace falta resistencia extrema, ligereza y durabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector) => (
            <article
              key={sector.title}
              className="relative overflow-hidden rounded-sm group cursor-pointer surface-card-hover"
            >
              <Link href="/proyectos" className="block">
                {/* Image */}
                <div className="relative h-56 overflow-hidden border-b border-border/60">
                  <Image
                    src={sector.image}
                    alt={`Sector ${sector.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {sector.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {sector.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sector.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-sm tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
