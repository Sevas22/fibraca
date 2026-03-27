'use client'

import SiteLayout from '@/components/site-layout'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import { products } from '@/lib/products-data'
import { useCart } from '@/lib/cart-store'
import { ShoppingCart, ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react'

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = products.find((p) => p.id === id)
  if (!product) notFound()

  const related = products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 3)
  const { addItem, openCart } = useCart()

  return (
    <SiteLayout>
      <div className="pt-[5.25rem] pb-14 sm:pt-24 sm:pb-16 md:pb-20">
        <div className="container-max">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground sm:mb-8">
            <Link href="/productos" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" aria-hidden="true" />
              Tienda
            </Link>
            <span>/</span>
            <Link href={`/productos?cat=${product.categorySlug}`} className="hover:text-primary transition-colors">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-2 lg:gap-12">
            {/* Image */}
            <div className="relative h-64 overflow-hidden rounded-lg border border-border bg-muted sm:h-80 md:h-96 lg:h-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded-sm border border-primary/30 tracking-widest uppercase">
                  PRFV
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <p className="text-xs text-primary font-medium tracking-widest uppercase mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4 text-balance">
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-secondary border border-border rounded-sm text-muted-foreground tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price */}
              {product.price > 0 ? (
                <div className="mb-6">
                  <p className="text-3xl font-display font-black text-primary">{product.price.toFixed(2)} €</p>
                  <p className="text-xs text-muted-foreground mt-1">Precio orientativo por unidad / metro lineal. IVA no incluido.</p>
                </div>
              ) : (
                <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-sm">
                  <p className="text-sm font-semibold text-primary">Precio bajo consulta</p>
                  <p className="text-xs text-muted-foreground mt-1">Este producto requiere especificaciones técnicas personalizadas. Contacte con nuestro equipo.</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={() => { addItem({ id: product.id, name: product.name, category: product.category, price: product.price, image: product.image }); openCart() }}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 rounded-md hover:bg-primary-hover transition-colors shadow-md text-sm"
                >
                  <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                  Añadir al carrito
                </button>
                <Link
                  href="/contacto"
                  className="flex-1 flex items-center justify-center gap-2 border border-border text-muted-foreground font-medium py-3.5 rounded-sm hover:border-primary hover:text-primary transition-colors text-sm"
                >
                  Solicitar cotización
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Quick benefits */}
              <div className="flex flex-col gap-2">
                {['Resistencia a la corrosión total', 'Sin mantenimiento', 'Alta resistencia mecánica', 'Dieléctrico y no magnético'].map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-xs text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specs */}
          <section className="mb-16" aria-labelledby="specs-heading">
            <h2 id="specs-heading" className="text-xl font-display font-bold text-foreground mb-6">Especificaciones Técnicas</h2>
            <div className="surface-card overflow-x-auto rounded-sm">
              <table className="w-full min-w-[280px]" aria-label="Especificaciones técnicas">
                <thead>
                  <tr className="bg-secondary border-b border-border">
                    <th className="text-left text-[10px] font-bold text-primary tracking-widest uppercase px-4 py-3">Parámetro</th>
                    <th className="text-left text-[10px] font-bold text-primary tracking-widest uppercase px-4 py-3">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={spec.label} className={`border-b border-border ${i % 2 === 0 ? '' : 'bg-secondary/30'}`}>
                      <td className="px-4 py-3 text-sm text-muted-foreground font-medium">{spec.label}</td>
                      <td className="px-4 py-3 text-sm text-foreground font-semibold">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-xl font-display font-bold text-foreground mb-6">Productos relacionados</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link key={rel.id} href={`/productos/${rel.id}`} className="surface-card-hover rounded-sm overflow-hidden group block">
                    <div className="relative h-36 overflow-hidden bg-muted">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="33vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] text-primary uppercase tracking-widest mb-1">{rel.category}</p>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{rel.name}</h3>
                      {rel.price > 0 && <p className="text-xs text-primary font-bold mt-1">{rel.price.toFixed(2)} €</p>}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </SiteLayout>
  )
}
