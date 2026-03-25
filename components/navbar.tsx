'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-store'
import { cn } from '@/lib/utils'
import { FibracaLogo } from '@/components/fibraca-logo'

const navLinks = [
  { label: 'Fibraca', href: '/' },
  { label: 'Tienda', href: '/productos' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleCart } = useCart()
  const count = itemCount()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
        <nav
          className="container-max flex items-center justify-between h-20 md:h-[5.5rem]"
          aria-label="Navegación principal"
        >
          {/* Logo — alineado a la izquierda, tamaño destacado */}
          <Link href="/" className="group shrink-0 mr-4 self-center" aria-label="Fibraca inicio">
            <FibracaLogo markSize="xl" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-sans font-medium tracking-wide transition-colors duration-200 relative',
                    'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-200',
                    'hover:text-primary hover:after:scale-x-100',
                    pathname === link.href
                      ? 'text-primary after:scale-x-100'
                      : 'text-muted-foreground'
                  )}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleCart}
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Carrito de compras, ${count} items`}
            >
              <ShoppingCart className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>
            <Link
              href="/contacto"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-primary-hover transition-colors shadow-sm"
            >
              Solicitar Cotización
            </Link>
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menú de navegación"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" aria-modal="true" role="dialog" aria-label="Menú móvil">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="absolute top-20 md:top-[5.5rem] left-0 right-0 bg-card border-b border-border p-6 shadow-lg">
            <ul className="flex flex-col gap-4" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block text-base font-medium py-2 border-b border-border/50 transition-colors',
                      pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contacto"
                  className="block mt-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-3 rounded-md text-center hover:bg-primary-hover transition-colors"
                >
                  Solicitar Cotización
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
