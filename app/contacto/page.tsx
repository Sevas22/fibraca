'use client'

import { useState } from 'react'
import SiteLayout from '@/components/site-layout'
import { BannerHeroPanel, BANNER_OVERLAY_READABLE } from '@/components/banner-hero-panel'
import { PageBanner } from '@/components/page-banner'
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, CheckCircle } from 'lucide-react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <SiteLayout>
      {/* Hero */}
      <PageBanner
        imageSrc="/images/banner-contacto.png"
        sectionClassName="pt-32 pb-16"
        innerClassName="container-max"
        overlayClassName={BANNER_OVERLAY_READABLE}
      >
        <BannerHeroPanel>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Contacto</p>
          <h1 className="mb-4 text-balance font-display text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            Hablemos de tu <span className="text-gradient">proyecto</span>
          </h1>
          <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
            Nuestro equipo técnico está preparado para asesorarte y ofrecerte la mejor solución PRFV para tus necesidades
            industriales.
          </p>
        </BannerHeroPanel>
      </PageBanner>

      {/* Contact Grid */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="surface-card rounded-sm p-6">
                <h2 className="text-lg font-display font-bold text-foreground mb-6">Información de contacto</h2>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Teléfono</p>
                      <a href="tel:+34900000000" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +34 900 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a href="mailto:info@fibraca.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        info@fibraca.com
                      </a>
                      <br />
                      <a href="mailto:ventas@fibraca.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        ventas@fibraca.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Dirección</p>
                      <address className="text-sm text-muted-foreground not-italic">
                        Polígono Industrial Norte<br />
                        Nave 12, 28000 Madrid<br />
                        España
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Horario</p>
                      <p className="text-sm text-muted-foreground">
                        Lunes - Viernes: 8:00 - 18:00<br />
                        Sábados: 8:00 - 14:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="surface-card rounded-sm p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">Enlaces rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/productos" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      Catálogo de productos
                    </a>
                  </li>
                  <li>
                    <a href="/proyectos" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      Proyectos realizados
                    </a>
                  </li>
                  <li>
                    <a href="/galeria" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      Galería
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="surface-card rounded-sm p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      Mensaje enviado correctamente
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Gracias por contactar con Fibraca. Nuestro equipo se pondrá en contacto contigo en las próximas 24-48 horas.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ nombre: '', empresa: '', email: '', telefono: '', asunto: '', mensaje: '' })
                      }}
                      className="bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded-md hover:bg-primary-hover transition-colors text-sm"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-lg font-display font-bold text-foreground mb-2">
                      Solicita información o cotización
                    </h2>
                    <p className="text-sm text-muted-foreground mb-8">
                      Completa el formulario y te responderemos a la mayor brevedad posible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">
                            Nombre completo *
                          </label>
                          <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-secondary border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                            placeholder="Tu nombre"
                          />
                        </div>
                        <div>
                          <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-1.5">
                            Empresa
                          </label>
                          <input
                            type="text"
                            id="empresa"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-secondary border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                            placeholder="Nombre de tu empresa"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-secondary border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                            placeholder="tu@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1.5">
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-secondary border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                            placeholder="+34 600 000 000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="asunto" className="block text-sm font-medium text-foreground mb-1.5">
                          Asunto *
                        </label>
                        <select
                          id="asunto"
                          name="asunto"
                          required
                          value={formData.asunto}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-secondary border border-border rounded-sm text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="">Selecciona un asunto</option>
                          <option value="cotizacion">Solicitud de cotización</option>
                          <option value="informacion">Información de productos</option>
                          <option value="proyecto">Asesoría técnica para proyecto</option>
                          <option value="distribucion">Distribución / Representación</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1.5">
                          Mensaje *
                        </label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          required
                          rows={5}
                          value={formData.mensaje}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-secondary border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                          placeholder="Describe tu proyecto o consulta..."
                        />
                      </div>

                      <div className="flex items-center justify-between gap-4 pt-2">
                        <p className="text-xs text-muted-foreground">
                          * Campos obligatorios
                        </p>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:bg-primary-hover transition-all duration-200 shadow-md text-sm"
                        >
                          Enviar mensaje
                          <Send className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 bg-muted flex items-center justify-center border-t border-border">
        <div className="text-center">
          <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">Mapa interactivo</p>
          <p className="text-xs text-muted-foreground">Polígono Industrial Norte, Madrid</p>
        </div>
      </section>
    </SiteLayout>
  )
}
