import { title } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className={title({ size: "lg" })}>Sobre Nosotros</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
          <p className="text-lg mb-4">
            Con más de 15 años de experiencia en el sector eléctrico, Electrociti nació para ofrecer soluciones 
            eléctricas de calidad a los residentes y negocios de Rosario y alrededores.
          </p>
          <p className="text-lg mb-4">
            Fundada por un equipo de electricistas certificados, nuestra empresa se ha ganado la 
            confianza de cientos de clientes satisfechos a lo largo de los años.
          </p>
          <p className="text-lg">
            Nuestro compromiso con la seguridad, la calidad y el servicio al cliente ha sido la piedra 
            angular de nuestro éxito continuo.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">✓</span>
              <span>Instalaciones eléctricas residenciales y comerciales</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">✓</span>
              <span>Mantenimiento preventivo y correctivo</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">✓</span>
              <span>Tableros eléctricos e instalación de protecciones</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">✓</span>
              <span>Iluminación interior y exterior</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">✓</span>
              <span>Detección y reparación de fallas</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">✓</span>
              <span>Asesoramiento técnico y certificaciones</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">✓</span>
              <span>Servicio de emergencia 24/7</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 bg-muted p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Profesionales Certificados</h3>
            <p>Todo nuestro equipo cuenta con las certificaciones y habilitaciones necesarias para garantizar un trabajo seguro y de calidad.</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Respuesta Rápida</h3>
            <p>Entendemos la urgencia de los problemas eléctricos. Por eso, ofrecemos tiempos de respuesta ágiles y eficientes.</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Garantía en Todos los Trabajos</h3>
            <p>Respaldamos todos nuestros servicios con garantía, asegurando tu completa satisfacción.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Listo para trabajar con nosotros?</h2>
        <p className="text-lg mb-6">Contáctanos hoy mismo para una cotización sin compromiso.</p>
        <Link href="https://api.whatsapp.com/send?phone=5493415883040&text=Hola%20quiero%20mas%20informacion" target="_blank">
          <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Solicitar Presupuesto
          </Button>
        </Link>
      </div>
    </div>
  );
}
