import SiteLayout from '@/components/site-layout'
import HeroSection from '@/components/home/hero-section'
import ProductCarousel from '@/components/home/product-carousel'
import SectorSection from '@/components/home/sector-section'
import ApplicationsSection from '@/components/home/applications-section'
import GallerySection from '@/components/home/gallery-section'
import AdvantagesSection from '@/components/home/advantages-section'
import ClientsSection from '@/components/home/clients-section'

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <ProductCarousel />
      <SectorSection />
      <ApplicationsSection />
      <GallerySection />
      <AdvantagesSection />
      <ClientsSection />
    </SiteLayout>
  )
}
