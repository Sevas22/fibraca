import SiteLayout from '@/components/site-layout'
import { BannerHeroPanel, BANNER_OVERLAY_READABLE } from '@/components/banner-hero-panel'
import { PageBanner } from '@/components/page-banner'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos — Fibraca',
  description: 'Casos de aplicación real de productos PRFV Fibraca en construcción, energía, agua e infraestructura industrial.',
}

const projects = [
  {
    id: 'pasarelas-offshore',
    title: 'Pasarelas y Plataformas Offshore',
    sector: 'Oil & Gas',
    location: 'Costa atlántica, España',
    image: '/images/gallery-1.jpg',
    description: 'Suministro e instalación de 2.400 m² de rejilla PRFV y 680 ml de barandilla de seguridad para plataformas marinas. Solución elegida frente al acero galvanizado por su nula corrosión y eliminación total del mantenimiento.',
    products: ['Rejillas moldeadas 38×38', 'Perfiles estructurales L y U', 'Barandillas de seguridad'],
    results: ['0 incidencias de corrosión en 7 años', '60% reducción en costes de mantenimiento', 'Instalación 40% más rápida que con acero'],
  },
  {
    id: 'solar-extremadura',
    title: 'Parque Solar Fotovoltaico — 50 MW',
    sector: 'Energía Solar',
    location: 'Extremadura, España',
    image: '/images/sector-energia.jpg',
    description: 'Diseño y suministro de estructuras de montaje PRFV para 12.000 paneles fotovoltaicos en un parque solar de 50 MW. La elección del PRFV frente al acero elimina el riesgo de corrosión en suelos ácidos y reduce la perturbación electromagnética.',
    products: ['Kit montaje fotovoltaico PRFV', 'Perfiles T 60×60', 'Conectores y tornillería PRFV'],
    results: ['Sin corrosión en suelos ácidos', 'Sin interferencia electromagnética', '+30 años de vida útil garantizados'],
  },
  {
    id: 'red-agua-potable',
    title: 'Renovación Red de Agua Potable Urbana',
    sector: 'Infraestructura Hidráulica',
    location: 'Municipio mediterráneo, 80.000 hab.',
    image: '/images/gallery-3.jpg',
    description: 'Rehabilitación de 12 km de red de agua potable mediante tecnología sin zanja con tubería de revestimiento PRFV. El proyecto se completó sin cortar el suministro y con mínima afección al tráfico urbano.',
    products: ['Tubería revestimiento PRFV DN200–DN600', 'Solución sin zanja CIPP', 'Uniones y accesorios PRFV'],
    results: ['0 días de corte de suministro', '85% reducción de obra civil', 'Vida útil proyectada +50 años'],
  },
  {
    id: 'planta-quimica',
    title: 'Planta de Tratamiento Químico',
    sector: 'Industria Química',
    location: 'Tarragona, España',
    image: '/images/gallery-2.jpg',
    description: 'Sustitución integral de estructuras metálicas corroídas por sistemas PRFV en planta de producción química. Se instalaron 1.800 m² de rejillas, 400 ml de escaleras y 600 ml de barandillas resistentes a ácidos y disolventes.',
    products: ['Rejilla pultruída 25×25', 'Escaleras PRFV', 'Zancas y peldaños pultruídos'],
    results: ['Cero corrosión en ambiente con HCl', 'Cumplimiento ATEX zona clasificada', '30% ahorro en peso estructural'],
  },
  {
    id: 'bandeja-portacables-offshore',
    title: 'Instalación Eléctrica Plataforma Offshore',
    sector: 'Oil & Gas',
    location: 'Mar del Norte',
    image: '/images/product-bandeja.jpg',
    description: 'Instalación de 3.500 ml de bandejas portacables PRFV en plataforma offshore. La naturaleza no conductora del PRFV es esencial en áreas clasificadas y previene interferencias en sistemas de control.',
    products: ['Bandeja portacables 100–500mm', 'Tapas y accesorios', 'Soportes de montaje PRFV'],
    results: ['Certificación ATEX ZonE 1', 'Sin mantenimiento anticorrosivo', 'Instalación 2x más rápida'],
  },
  {
    id: 'refuerzo-tunel',
    title: 'Refuerzo Estructural en Túnel Ferroviario',
    sector: 'Infraestructura Ferroviaria',
    location: 'Madrid – Barcelona, España',
    image: '/images/sector-construccion.jpg',
    description: 'Suministro de 180.000 barras PRFV de Ø8mm y Ø12mm para refuerzo de hormigón proyectado en secciones del nuevo túnel ferroviario de alta velocidad. El PRFV fue elegido por su transparencia al radar GPR para inspecciones no destructivas.',
    products: ['Barras PRFV Ø8mm', 'Barras PRFV Ø12mm', 'Mallas PRFV 150×150'],
    results: ['Transparencia total a inspección GPR', 'Sin corrosión en ambiente húmedo', 'Cumple EN 13670'],
  },
]

export default function ProyectosPage() {
  return (
    <SiteLayout>
      {/* Header */}
      <PageBanner
        imageSrc="/images/banner-marca.png"
        sectionClassName="pt-32 pb-12 border-b border-primary/35"
        innerClassName="container-max"
        aria-labelledby="proyectos-heading"
        overlayClassName={BANNER_OVERLAY_READABLE}
      >
        <BannerHeroPanel>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Casos de aplicación</p>
          <h1
            id="proyectos-heading"
            className="mb-6 text-balance font-display text-4xl font-black text-foreground md:text-6xl"
          >
            Proyectos reales,
            <br />
            resultados comprobados
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            El PRFV de Fibraca ha resuelto retos de ingeniería en los entornos más exigentes. Estos son algunos de los
            proyectos que demuestran el potencial de nuestros materiales.
          </p>
        </BannerHeroPanel>
      </PageBanner>

      {/* Projects grid */}
      <section className="section-padding pt-4 bg-background" aria-label="Lista de proyectos">
        <div className="container-max">
          <div className="flex flex-col divide-y divide-primary/35">
            {projects.map((project, i) => (
              <article
                key={project.id}
                className={`grid md:grid-cols-2 gap-8 items-center py-12 md:py-14 first:pt-6 md:first:pt-8 ${i % 2 !== 0 ? 'md:[direction:rtl]' : ''}`}
              >
                <div className={`relative overflow-hidden rounded-sm h-72 group ${i % 2 !== 0 ? '[direction:ltr]' : ''}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/20 text-primary text-[10px] font-medium px-2 py-1 rounded-sm border border-primary/30 tracking-wide">
                      {project.sector}
                    </span>
                  </div>
                </div>

                <div className={i % 2 !== 0 ? '[direction:ltr]' : ''}>
                  <p className="text-xs text-muted-foreground tracking-wide mb-2">{project.location}</p>
                  <h2 className="text-2xl font-display font-black text-foreground mb-4 text-balance">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 className="text-[10px] font-semibold text-primary tracking-widest uppercase mb-2">Productos utilizados</h3>
                      <ul className="flex flex-col gap-1">
                        {project.products.map((p) => (
                          <li key={p} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-semibold text-primary tracking-widest uppercase mb-2">Resultados</h3>
                      <ul className="flex flex-col gap-1">
                        {project.results.map((r) => (
                          <li key={r} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-accent transition-colors"
                  >
                    Consultar proyecto similar
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card border-t border-primary/30" aria-label="Llamada a la acción">
        <div className="container-max text-center">
          <h2 className="text-3xl font-display font-black text-foreground mb-4">
            Tu proyecto, nuestra experiencia
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Cuéntanos los retos técnicos de tu proyecto y nuestro equipo de ingeniería diseñará la solución PRFV óptima para tus necesidades.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-md hover:bg-primary-hover transition-colors shadow-md text-sm"
          >
            Iniciar un proyecto
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
