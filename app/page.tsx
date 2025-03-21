"use client";

import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import { ChevronRight, Zap, Shield, Clock, Tool, Award, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Servicios que ofrecemos
const services = [
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "Instalaciones Eléctricas",
    description: "Instalaciones nuevas y renovaciones para su hogar o negocio, cumpliendo todas las normativas de seguridad.",
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Seguridad Eléctrica",
    description: "Protección y prevención para evitar accidentes eléctricos con instalaciones seguras y confiables.",
  },
  {
    icon: <Clock className="h-12 w-12 text-primary" />,
    title: "Servicio de Urgencia",
    description: "Atención rápida para solucionar sus problemas eléctricos en el menor tiempo posible.",
  },
  {
    icon: <Tool className="h-12 w-12 text-primary" />,
    title: "Mantenimiento",
    description: "Mantenimiento preventivo y correctivo para garantizar el óptimo funcionamiento de sus instalaciones.",
  },
];

// Testimonios de clientes
const testimonials = [
  {
    name: "Carolina Méndez",
    role: "Propietaria de Vivienda",
    comment: "Excelente servicio, muy profesional y puntual. Solucionó todos los problemas eléctricos de mi casa de manera rápida y eficiente.",
    image: "/testimonial-1.jpg", // Añadir imágenes de testimonios
  },
  {
    name: "Martín Rodríguez",
    role: "Gerente de Local Comercial",
    comment: "Contratamos sus servicios para la instalación eléctrica de nuestro nuevo local y quedamos muy satisfechos con el resultado y la calidad del trabajo.",
    image: "/testimonial-2.jpg",
  },
  {
    name: "Luciana Torres",
    role: "Administradora de Edificio",
    comment: "Realizan un excelente trabajo de mantenimiento en nuestro edificio. Siempre responden rápido a las emergencias y son muy profesionales.",
    image: "/testimonial-3.jpg",
  },
];

// Razones para elegirnos
const reasons = [
  "Más de 15 años de experiencia",
  "Técnicos certificados",
  "Materiales de primera calidad",
  "Garantía en todos nuestros trabajos",
  "Servicio rápido y eficiente",
  "Precios competitivos",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <BackgroundCarousel />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Soluciones eléctricas profesionales en <span className="text-primary">Rosario</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Instalaciones, reparaciones y mantenimiento con la máxima calidad y seguridad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton />
              <Button size="lg" variant="secondary" className="gap-2">
                Nuestros Servicios <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Servicios Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios eléctricos para satisfacer todas sus necesidades, tanto para hogares como para empresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="gap-2">
              Ver todos los servicios <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros / Por qué elegirnos */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegirnos?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Somos un equipo de electricistas profesionales dedicados a brindar soluciones eléctricas seguras y confiables. Nuestra prioridad es su seguridad y satisfacción.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button size="lg" className="gap-2">
                  Conoce más sobre nosotros <ChevronRight size={16} />
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/electrician-working.jpg" 
                alt="Electricista trabajando" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 shadow-md border border-border flex flex-col"
              >
                <div className="flex-grow">
                  <p className="italic text-muted-foreground mb-6">"{testimonial.comment}"</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted overflow-hidden relative">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesita un electricista profesional?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
            Contáctenos ahora y reciba una respuesta rápida para solucionar sus problemas eléctricos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton />
            <Button size="lg" variant="secondary" className="gap-2">
              Solicitar presupuesto <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
