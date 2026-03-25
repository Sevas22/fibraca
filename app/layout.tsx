import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fibraca — Soluciones en PRFV',
  description:
    'Fibraca es líder en fabricación y venta de productos PRFV (Polímero Reforzado con Fibra de Vidrio). Resistencia industrial, innovación y durabilidad para construcción, energía e infraestructura.',
  keywords: [
    'PRFV',
    'fibra de vidrio',
    'fiberglass',
    'barras',
    'rejillas',
    'tubos',
    'perfiles',
    'Fibraca',
    'construcción',
    'infraestructura',
  ],
  authors: [{ name: 'Fibraca' }],
  openGraph: {
    title: 'Fibraca — Soluciones en PRFV',
    description: 'Fabricamos productos PRFV de alta resistencia para industrias exigentes.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#141a14',
  userScalable: false,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${barlow.variable}`}>
      <body className="font-sans bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
