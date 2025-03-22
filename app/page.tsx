"use client";

import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { BackgroundCarousel } from "@/components/carousel";
import { FeatureCard } from "@/components/ui/feature-card";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { ServiceList } from "@/components/sections/service-list";
import { ContactCTA } from "@/components/sections/contact-cta";
import {
  ChevronRight,
  Zap,
  Shield,
  Clock,
  Wrench,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Servicios que ofrecemos
const services = [
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "Instalaciones Eléctricas",
    description:
      "Instalaciones nuevas y renovaciones para su hogar o negocio, cumpliendo todas las normativas de seguridad.",
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Seguridad Eléctrica",
    description:
      "Protección y prevención para evitar accidentes eléctricos con instalaciones seguras y confiables.",
  },
  {
    icon: <Clock className="h-12 w-12 text-primary" />,
    title: "Servicio de Urgencia",
    description:
      "Atención rápida para solucionar sus problemas eléctricos en el menor tiempo posible.",
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary" />,
    title: "Mantenimiento",
    description:
      "Mantenimiento preventivo y correctivo para garantizar el óptimo funcionamiento de sus instalaciones.",
  },
];

// Testimonios de clientes
const testimonials = [
  {
    name: "Carolina Méndez",
    role: "Propietaria de Vivienda",
    comment:
      "Excelente servicio, muy profesional y puntual. Solucionó todos los problemas eléctricos de mi casa de manera rápida y eficiente.",
    image: "https://randomuser.me/api/portraits/women/1.jpg", // Usando una imagen de placeholder
  },
  {
    name: "Martín Rodríguez",
    role: "Gerente de Local Comercial",
    comment:
      "Contratamos sus servicios para la instalación eléctrica de nuestro nuevo local y quedamos muy satisfechos con el resultado y la calidad del trabajo.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Luciana Torres",
    role: "Administradora de Edificio",
    comment:
      "Realizan un excelente trabajo de mantenimiento en nuestro edificio. Siempre responden rápido a las emergencias y son muy profesionales.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
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
        <BackgroundCarousel 
          images={["/electricidad1.jpg", "/electricidad2.jpg", "/electricidad3.jpg"]}
          interval={6000}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Soluciones eléctricas profesionales en{" "}
              <span className="text-primary">Rosario</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Instalaciones, reparaciones y mantenimiento con la máxima calidad
              y seguridad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton />
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="#servicios">
                  Nuestros Servicios <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos soluciones eléctricas completas para su hogar, negocio o
              industria. Trabajamos con los más altos estándares de calidad y
              seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué elegirnos?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Somos especialistas en instalaciones eléctricas con amplia
                experiencia en proyectos residenciales, comerciales e
                industriales. Nuestro compromiso es brindar un servicio de
                calidad, seguro y garantizado.
              </p>

              <ServiceList services={reasons} />

              <div className="mt-8">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/about">
                    Conozca más sobre nosotros <ChevronRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/electricidad5.jpg"
                alt="Electricista trabajando"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-white font-medium">
                    Profesionales certificados
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trabajamos para garantizar la máxima satisfacción de nuestros
              clientes. Aquí algunos testimonios de quienes ya confiaron en
              nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                comment={testimonial.comment}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <ContactCTA 
            title="¿Necesita un servicio eléctrico profesional?"
            description="Contáctenos hoy mismo para una evaluación sin compromiso. Le ofrecemos un presupuesto claro y detallado ajustado a sus necesidades."
            buttonText="Solicitar Presupuesto Gratis"
          />
        </div>
      </section>
    </>
  );
}
