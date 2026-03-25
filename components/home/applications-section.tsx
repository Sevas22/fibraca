import { Layers, Droplets, Zap, Building2, ShieldCheck, TreePine } from 'lucide-react'

const applications = [
  {
    icon: Building2,
    title: 'Refuerzo Estructural',
    description: 'Barras y mallas PRFV como sustituto del acero en estructuras de hormigón expuestas a ambientes corrosivos, marinos o químicos.',
  },
  {
    icon: Droplets,
    title: 'Conducción de Fluidos',
    description: 'Tubería PRFV para transporte de agua potable, aguas residuales y fluidos químicos agresivos a presión.',
  },
  {
    icon: Zap,
    title: 'Instalaciones Eléctricas',
    description: 'Bandejas portacables y canalizaciones no conductoras para plantas industriales y centros de datos.',
  },
  {
    icon: Layers,
    title: 'Plataformas y Pasarelas',
    description: 'Rejillas y perfiles PRFV para accesos industriales, offshore y plantas de tratamiento de aguas.',
  },
  {
    icon: TreePine,
    title: 'Energía Renovable',
    description: 'Estructuras de montaje fotovoltaico que no requieren mantenimiento y resisten condiciones climáticas extremas.',
  },
  {
    icon: ShieldCheck,
    title: 'Cerramiento y Seguridad',
    description: 'Cercas, barandillas y sistemas de protección PRFV para perímetros industriales y zonas de riesgo.',
  },
]

export default function ApplicationsSection() {
  return (
    <section className="section-padding bg-background" aria-labelledby="aplicaciones-heading">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary shrink-0" aria-hidden />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">Aplicaciones</span>
            </div>
            <h2
              id="aplicaciones-heading"
              className="text-3xl md:text-4xl font-display font-black text-foreground text-balance mb-6 leading-tight"
            >
              Donde el PRFV transforma la industria
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              El Polímero Reforzado con Fibra de Vidrio ofrece ventajas únicas frente al acero y 
              los plásticos convencionales: mayor resistencia química, vida útil sin mantenimiento 
              y comportamiento dieléctrico, abriendo posibilidades en sectores donde los materiales 
              tradicionales fallan.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Resistencia química superior al acero',
                'No conduce la electricidad (dieléctrico)',
                'Peso hasta 4 veces menor que el acero',
                'Vida útil superior a 50 años en ambiente marino',
                'Cero mantenimiento en condiciones de servicio',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {applications.map((app) => (
              <div
                key={app.title}
                className="surface-card rounded-sm p-5 group hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <app.icon
                  className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform duration-200"
                  aria-hidden="true"
                />
                <h3 className="text-sm font-semibold text-foreground mb-2">{app.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
