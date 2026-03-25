'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { products } from '@/lib/products-data'
import { useCart } from '@/lib/cart-store'
import { useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const featured = products.filter((p) => p.featured).slice(0, 8)

/** Dos series iguales para carrusel infinito sin salto visible */
const loopItems = [...featured, ...featured]

export default function ProductCarousel() {
  const { addItem, openCart } = useCart()
  const scrollRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const rafRef = useRef<number | null>(null)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scroll = useCallback((dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    // El auto-scroll por RAF modifica scrollLeft cada frame; si no pausamos,
    // anula el desplazamiento de los botones (scrollBy smooth no "gana").
    pausedRef.current = true
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    const step = 304
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' })
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false
      resumeTimerRef.current = null
    }, 750)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    let last = performance.now()
    const speedPxPerSec = 28

    const tick = (now: number) => {
      const delta = (now - last) / 1000
      last = now

      if (!pausedRef.current) {
        el.scrollLeft += speedPxPerSec * delta
        const half = el.scrollWidth / 2
        if (half > 0 && el.scrollLeft >= half - 1) {
          el.scrollLeft -= half
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [])

  return (
    <section
      className="section-padding bg-background border-t border-border/60"
      aria-labelledby="productos-heading"
    >
      <div className="container-max">
        <div className="flex items-end justify-between mb-12 md:mb-14 gap-4 flex-wrap">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary shrink-0" aria-hidden />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">Tienda</span>
            </div>
            <h2
              id="productos-heading"
              className="text-3xl md:text-4xl lg:text-[2.35rem] font-display font-black text-foreground text-balance leading-tight"
            >
              Productos destacados
            </h2>
            <p className="text-muted-foreground mt-3 text-sm md:text-base max-w-lg leading-relaxed">
              Referencias PRFV con cotización y asesoramiento técnico.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-2 border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Desplazar carrusel hacia la izquierda"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-2 border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Desplazar carrusel hacia la derecha"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <Link
              href="/productos"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              Ver todos <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div
          className="relative -mx-1 md:mx-0 rounded-lg"
          onMouseEnter={() => {
            pausedRef.current = true
          }}
          onMouseLeave={() => {
            pausedRef.current = false
          }}
        >
          <div
            ref={scrollRef}
            role="region"
            aria-roledescription="carrusel"
            aria-label="Productos destacados, desplazamiento automático. Pausa al pasar el cursor o al enfocar."
            className="flex min-w-0 touch-pan-x gap-4 overflow-x-auto overflow-y-hidden pb-4 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {loopItems.map((product, index) => (
              <article
                key={`${product.id}-${index}`}
                className="flex-none w-[min(100vw-2.5rem,18rem)] sm:w-72 surface-card-hover rounded-lg overflow-hidden group"
              >
                <Link href={`/productos/${product.id}`} className="block relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="288px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/20 text-primary text-[10px] font-medium px-2 py-0.5 rounded-sm border border-primary/30 tracking-wide">
                      PRFV
                    </span>
                  </div>
                </Link>

                <div className="p-4">
                  <p className="text-[10px] text-primary font-medium tracking-widest uppercase mb-1">
                    {product.category}
                  </p>
                  <Link href={`/productos/${product.id}`}>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    {product.price > 0 ? (
                      <span className="text-sm font-bold text-primary">{product.price.toFixed(2)} €</span>
                    ) : (
                      <span className="text-xs text-muted-foreground">Consultar precio</span>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        addItem({
                          id: product.id,
                          name: product.name,
                          category: product.category,
                          price: product.price,
                          image: product.image,
                        })
                        openCart()
                      }}
                      className="flex items-center gap-1.5 bg-secondary border border-border text-xs font-medium px-3 py-1.5 rounded-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                    >
                      <ShoppingCart className="w-3 h-3" aria-hidden="true" />
                      Añadir
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-2 text-center text-[11px] text-muted-foreground md:hidden">
          Desliza para ver más productos
        </p>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-hover transition-colors"
          >
            Ver todo el catálogo <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
