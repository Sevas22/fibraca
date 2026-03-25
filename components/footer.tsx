import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'
import { FibracaLogo } from '@/components/fibraca-logo'

const footerLinks = {
  empresa: [
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Galería', href: '/galeria' },
    { label: 'Contacto', href: '/contacto' },
  ],
  productos: [
    { label: 'Barras y Mallas', href: '/productos?cat=barras' },
    { label: 'Perfiles', href: '/productos?cat=perfiles' },
    { label: 'Rejillas', href: '/productos?cat=rejillas' },
    { label: 'Tubería PRFV', href: '/productos?cat=tubo-prfv-mandril' },
    { label: 'Montaje Solar', href: '/productos?cat=montaje-fotovoltaico' },
    { label: 'Soluciones Sin Zanja', href: '/productos?cat=soluciones-sin-zanja' },
  ],
  sectores: [
    { label: 'Construcción', href: '/proyectos' },
    { label: 'Energía Solar', href: '/proyectos' },
    { label: 'Agua y Saneamiento', href: '/proyectos' },
    { label: 'Infraestructura', href: '/proyectos' },
    { label: 'Industria Química', href: '/proyectos' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white" role="contentinfo">
      <div className="container-max py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="group mb-5 inline-block" aria-label="Fibraca inicio">
              <FibracaLogo light markSize="sm" />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-8 text-white/90">
              Especialistas en fabricación y distribución de productos PRFV (Polímero Reforzado con Fibra de Vidrio) para aplicaciones industriales exigentes.
            </p>
            <div className="flex flex-col gap-3.5">
              <a
                href="tel:+34900000000"
                className="flex items-center gap-2.5 text-sm text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-white" aria-hidden="true" />
                +34 900 000 000
              </a>
              <a
                href="mailto:info@fibraca.com"
                className="flex items-center gap-2.5 text-sm text-white/90 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-white" aria-hidden="true" />
                info@fibraca.com
              </a>
              <address className="flex items-start gap-2.5 text-sm text-white/90 not-italic">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white" aria-hidden="true" />
                Polígono Industrial Norte, Nave 12<br />
                28000 Madrid, España
              </address>
            </div>
            <div className="flex items-center gap-2.5 mt-8">
              <a
                href="#"
                className="p-2.5 rounded-md border border-white/20 text-white/90 hover:text-white hover:border-white/45 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-md border border-white/20 text-white/90 hover:text-white hover:border-white/45 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-md border border-white/20 text-white/90 hover:text-white hover:border-white/45 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">Empresa</h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">Productos</h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">Sectores</h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.sectores.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-10 sm:flex-row">
          <p className="text-xs text-white/85">&copy; {new Date().getFullYear()} Fibraca. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <Link href="#" className="text-xs text-white/85 transition-colors hover:text-white">
              Política de privacidad
            </Link>
            <Link href="#" className="text-xs text-white/85 transition-colors hover:text-white">
              Aviso legal
            </Link>
            <Link href="#" className="text-xs text-white/85 transition-colors hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
