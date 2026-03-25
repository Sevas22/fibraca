import { Shield, Feather, Thermometer, Wrench, Clock, Award } from 'lucide-react'

const advantages = [
  {
    icon: Shield,
    title: 'Resistencia a la Corrosión',
    description: 'Inmune a ácidos, álcalis y sales. No requiere recubrimientos protectores en ambientes marinos o industriales agresivos.',
    stat: '0%',
    statLabel: 'Corrosión',
  },
  {
    icon: Feather,
    title: 'Ligereza Excepcional',
    description: 'Hasta 4 veces más ligero que el acero, reduciendo costes de transporte, manipulación e instalación.',
    stat: '¼',
    statLabel: 'Peso vs. acero',
  },
  {
    icon: Shield,
    title: 'Alta Resistencia Mecánica',
    description: 'Resistencia a tracción superior a 700 MPa. Soporta cargas dinámicas, impactos y ciclos de fatiga extremos.',
    stat: '+700',
    statLabel: 'MPa tracción',
  },
  {
    icon: Thermometer,
    title: 'Estabilidad Térmica',
    description: 'Opera en rangos de temperatura de -60 °C a +180 °C según la formulación, sin pérdida de propiedades mecánicas.',
    stat: '180°',
    statLabel: 'Temperatura máx.',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento Mínimo',
    description: 'Sin pintura, galvanizado ni tratamientos periódicos. Reduce los costes operativos a lo largo de toda su vida útil.',
    stat: '~0',
    statLabel: 'Mantenimiento',
  },
  {
    icon: Clock,
    title: 'Vida Útil Prolongada',
    description: 'Diseñado para superar los 50 años en servicio continuo, incluso en entornos offshore y petroquímicos.',
    stat: '+50',
    statLabel: 'Años de vida útil',
  },
]

export default function AdvantagesSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden" aria-labelledby="ventajas-heading">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.60 0.08 130 / 0.5), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-max">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary shrink-0" aria-hidden />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">Ventajas</span>
          </div>
          <h2
            id="ventajas-heading"
            className="text-3xl md:text-4xl font-display font-black text-foreground text-balance mb-3 leading-tight"
          >
            Por qué elegir PRFV
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Prestaciones que ningún material tradicional iguala en entornos industriales exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="surface-card rounded-sm p-6 group hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <adv.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-right">
                  <div className="text-2xl font-display font-black text-primary leading-none">{adv.stat}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{adv.statLabel}</div>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm">{adv.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
