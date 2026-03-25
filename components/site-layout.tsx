'use client'

import Navbar from './navbar'
import Footer from './footer'
import CartDrawer from './cart-drawer'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </>
  )
}
