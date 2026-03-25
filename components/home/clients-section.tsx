import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const clientLogos = [
  'ENDESA',
  'ACCIONA',
  'FERROVIAL',
  'ACS GROUP',
  'COBRA',
  'SACYR',
  'TÉCNICAS REUNIDAS',
  'ABENGOA',
]

const testimonials = [
  {
    quote: 'Las barras PRFV de Fibraca han eliminado por completo los problemas de corrosión que teníamos en nuestras instalaciones costeras. La durabilidad es extraordinaria.',
    author: 'Director de Ingeniería',
    company: 'Empresa de infraestructura portuaria',
  },
  {
    quote: 'Las estructuras de montaje fotovoltaico en PRFV nos permiten reducir el mantenimiento de los parques al mínimo. Una solución brillante para el sector solar.',
    author: 'Jefe de Proyecto',
    company: 'Promotora de energía renovable',
  },
]

export default function ClientsSection() {
  return (
    <section className="section-padding bg-card border-t border-border" aria-labelledby="clientes-heading">
      <div className="container-max">
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary shrink-0" aria-hidden />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">Clientes</span>
            <span className="h-px w-8 bg-primary shrink-0" aria-hidden />
          </div>
          <h2
            id="clientes-heading"
            className="text-3xl md:text-4xl font-display font-black text-foreground text-balance leading-tight"
          >
            Confianza industrial
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Construcción, energía e infraestructura con productos Fibraca en proyectos exigentes.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden mb-16">
          {clientLogos.map((name) => (
            <div
              key={name}
              className="bg-card/80 flex items-center justify-center py-8 px-4"
            >
              <span className="text-sm font-display font-bold tracking-widest text-muted-foreground/60 text-center uppercase">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="surface-card rounded-sm p-6 border-l-2 border-primary"
            >
              <p className="text-sm text-foreground leading-relaxed italic mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="text-xs font-semibold text-primary">{t.author}</span>
                  <span className="text-xs text-muted-foreground"> — {t.company}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-primary/5 border border-primary/20 rounded-sm p-10">
          <h3 className="text-2xl font-display font-black text-foreground mb-4">
            Listo para empezar tu proyecto?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Contacta con nuestro equipo técnico para asesoramiento personalizado y cotización de tu proyecto.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-md hover:bg-primary-hover transition-all duration-200 shadow-md text-sm"
          >
            Solicitar Cotización
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
