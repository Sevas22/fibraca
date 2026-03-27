'use client'

import SiteLayout from '@/components/site-layout'
import { BannerHeroPanel, BANNER_OVERLAY_READABLE } from '@/components/banner-hero-panel'
import { PageBanner } from '@/components/page-banner'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import { ShoppingCart, Search, SlidersHorizontal } from 'lucide-react'
import { products, categories } from '@/lib/products-data'
import { useCart } from '@/lib/cart-store'

function ProductsContent() {
  const searchParams = useSearchParams()
  const initialCat = searchParams.get('cat') || ''
  const [activeCategory, setActiveCategory] = useState(initialCat)
  const [searchQuery, setSearchQuery] = useState('')
  const { addItem, openCart } = useCart()

  const filtered = products.filter((p) => {
    const matchesCat = !activeCategory || p.categorySlug === activeCategory
    const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <>
      {/* Header */}
      <PageBanner
        imageSrc="/images/banner-tienda.png"
        sectionClassName="page-hero border-b border-border/40"
        innerClassName="container-max"
        aria-labelledby="tienda-heading"
        overlayClassName={BANNER_OVERLAY_READABLE}
      >
        <BannerHeroPanel>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Tienda · Catálogo PRFV</p>
          <h1
            id="tienda-heading"
            className="mb-5 max-w-3xl text-balance font-display text-4xl font-black text-foreground md:text-5xl lg:text-6xl"
          >
            Todos los productos
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            17 familias de productos en fibra de vidrio (PRFV) para industria, construcción y energía. Precios orientativos;
            solicita cotización para proyectos a medida.
          </p>
        </BannerHeroPanel>
      </PageBanner>

      <div className="pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 md:pt-12">
        <div className="container-max">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            {/* Sidebar */}
            <aside className="w-full shrink-0 lg:w-64" aria-label="Filtros de productos">
              <div className="surface-card max-h-[min(52vh,22rem)] overflow-y-auto overscroll-contain rounded-sm p-4 lg:sticky lg:top-24 lg:max-h-none lg:overflow-visible">
                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Buscar producto..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-input border border-border rounded-sm pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    aria-label="Buscar productos"
                  />
                </div>

                {/* Categories */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Categorías</span>
                  </div>
                  <ul className="flex flex-col gap-1" role="list">
                    <li>
                      <button
                        onClick={() => setActiveCategory('')}
                        className={`w-full text-left text-sm px-3 py-2 rounded-sm transition-colors ${
                          !activeCategory
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                        }`}
                        aria-pressed={!activeCategory}
                      >
                        Todos los productos
                        <span className="ml-1.5 text-[10px] text-muted-foreground">({products.length})</span>
                      </button>
                    </li>
                    {categories.map((cat) => {
                      const count = products.filter((p) => p.categorySlug === cat.slug).length
                      return (
                        <li key={cat.slug}>
                          <button
                            onClick={() => setActiveCategory(cat.slug)}
                            className={`w-full text-left text-sm px-3 py-2 rounded-sm transition-colors ${
                              activeCategory === cat.slug
                                ? 'bg-primary/10 text-primary border border-primary/20'
                                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                            }`}
                            aria-pressed={activeCategory === cat.slug}
                          >
                            {cat.name}
                            {count > 0 && (
                              <span className="ml-1.5 text-[10px] text-muted-foreground">({count})</span>
                            )}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'} encontrados
                </p>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-16 surface-card rounded-sm">
                  <p className="text-muted-foreground">No se encontraron productos con los filtros seleccionados.</p>
                  <button
                    onClick={() => { setActiveCategory(''); setSearchQuery('') }}
                    className="mt-4 text-primary text-sm hover:text-accent transition-colors"
                  >
                    Limpiar filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((product) => (
                    <article
                      key={product.id}
                      className="surface-card-hover rounded-lg overflow-hidden group flex flex-col"
                    >
                      <Link href={`/productos/${product.id}`} className="block relative h-48 overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        {product.featured && (
                          <div className="absolute top-3 right-3">
                            <span className="bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-sm tracking-wide">
                              DESTACADO
                            </span>
                          </div>
                        )}
                      </Link>

                      <div className="p-4 flex flex-col flex-1">
                        <p className="text-[10px] text-primary font-medium tracking-widest uppercase mb-1">{product.category}</p>
                        <Link href={`/productos/${product.id}`}>
                          <h2 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                            {product.name}
                          </h2>
                        </Link>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4 flex-1">
                          {product.shortDescription}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          {product.price > 0 ? (
                            <span className="text-sm font-bold text-primary">{product.price.toFixed(2)} €</span>
                          ) : (
                            <span className="text-xs text-muted-foreground">Consultar</span>
                          )}
                          <button
                            onClick={() => {
                              addItem({ id: product.id, name: product.name, category: product.category, price: product.price, image: product.image })
                              openCart()
                            }}
                            className="flex items-center gap-1.5 bg-secondary border border-border text-xs font-medium px-3 py-1.5 rounded-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                            aria-label={`Añadir ${product.name} al carrito`}
                          >
                            <ShoppingCart className="w-3 h-3" aria-hidden="true" />
                            Añadir
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function ProductosPage() {
  return (
    <SiteLayout>
      <Suspense
        fallback={
          <div className="container-max py-24 text-center text-sm text-muted-foreground sm:py-28">Cargando productos…</div>
        }
      >
        <ProductsContent />
      </Suspense>
    </SiteLayout>
  )
}
