import { title } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { ServiceList } from "@/components/sections/service-list";
import { ContactCTA } from "@/components/sections/contact-cta";
import Link from "next/link";

// Servicios que ofrecemos
const services = [
  "Instalaciones eléctricas residenciales y comerciales",
  "Mantenimiento preventivo y correctivo",
  "Tableros eléctricos e instalación de protecciones",
  "Iluminación interior y exterior",
  "Detección y reparación de fallas",
  "Asesoramiento técnico y certificaciones",
  "Servicio de emergencia 24/7"
];

// Razones para elegirnos
const features = [
  {
    title: "Profesionales Certificados",
    description: "Todo nuestro equipo cuenta con las certificaciones y habilitaciones necesarias para garantizar un trabajo seguro y de calidad."
  },
  {
    title: "Respuesta Rápida",
    description: "Entendemos la urgencia de los problemas eléctricos. Por eso, ofrecemos tiempos de respuesta ágiles y eficientes."
  },
  {
    title: "Garantía en Todos los Trabajos",
    description: "Respaldamos todos nuestros servicios con garantía, asegurando tu completa satisfacción."
  }
];

export default function AboutPage() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <h1 className={title({ size: "lg" }) + " mb-6"}>Sobre Nosotros</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Con más de 15 años de experiencia en el sector eléctrico,
              Electrociti nació para ofrecer soluciones eléctricas de calidad a
              los residentes y negocios de Rosario y alrededores.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Fundada por un equipo de electricistas certificados, nuestra empresa
              se ha ganado la confianza de cientos de clientes satisfechos a lo
              largo de los años.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Nuestro compromiso con la seguridad, la calidad y el servicio al
              cliente ha sido la piedra angular de nuestro éxito continuo.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
            <ServiceList services={services} />
          </div>
        </div>

        <div className="mt-16 bg-muted p-6 md:p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <ContactCTA />
        </div>
      </div>
    </section>
  );
}
