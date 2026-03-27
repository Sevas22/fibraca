import { cn } from '@/lib/utils'

/** Misma dirección que en la columna de contacto */
export const FIBRACA_MAP_ADDRESS = 'Polígono Industrial Norte, Nave 12, 28000 Madrid, España'

type GoogleMapEmbedProps = {
  className?: string
}

/**
 * Mapa de Google embebido (sede en Madrid).
 * Opcional: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` con Maps Embed API activada en Google Cloud.
 * Sin clave se usa un iframe de búsqueda (puede ser menos estable; conviene configurar la clave en producción).
 */
export function GoogleMapEmbed({ className }: GoogleMapEmbedProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const q = encodeURIComponent(FIBRACA_MAP_ADDRESS)

  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${q}&zoom=14&language=es&maptype=roadmap`
    : `https://maps.google.com/maps?q=${q}&output=embed&hl=es&z=14`

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.12)]',
        className
      )}
    >
      <div className="relative aspect-[5/6] w-full min-h-[220px] sm:aspect-[16/10] sm:min-h-[240px] md:aspect-[21/9] md:min-h-[280px]">
        <iframe
          title="Ubicación Fibraca en Google Maps"
          src={src}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="border-t border-border/50 bg-card/80 px-4 py-3 text-center text-xs text-muted-foreground md:text-sm">
        {FIBRACA_MAP_ADDRESS}
      </p>
    </div>
  )
}
