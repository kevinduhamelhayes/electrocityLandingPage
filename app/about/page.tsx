import { title } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

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
            <ul className="grid grid-cols-1 gap-3">
              {[
                "Instalaciones eléctricas residenciales y comerciales",
                "Mantenimiento preventivo y correctivo",
                "Tableros eléctricos e instalación de protecciones",
                "Iluminación interior y exterior",
                "Detección y reparación de fallas",
                "Asesoramiento técnico y certificaciones",
                "Servicio de emergencia 24/7"
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-base md:text-lg">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-muted p-6 md:p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-bold text-xl mb-3">
                Profesionales Certificados
              </h3>
              <p className="text-muted-foreground">
                Todo nuestro equipo cuenta con las certificaciones y
                habilitaciones necesarias para garantizar un trabajo seguro y de
                calidad.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-bold text-xl mb-3">Respuesta Rápida</h3>
              <p className="text-muted-foreground">
                Entendemos la urgencia de los problemas eléctricos. Por eso,
                ofrecemos tiempos de respuesta ágiles y eficientes.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-bold text-xl mb-3">
                Garantía en Todos los Trabajos
              </h3>
              <p className="text-muted-foreground">
                Respaldamos todos nuestros servicios con garantía, asegurando tu
                completa satisfacción.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-primary/5 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contáctanos hoy mismo para una cotización sin compromiso.
          </p>
          <Link
            href="https://api.whatsapp.com/send?phone=5493415883040&text=Hola%20quiero%20mas%20informacion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Solicitar Presupuesto
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
