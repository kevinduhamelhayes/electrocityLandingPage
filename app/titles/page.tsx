import { title } from "@/components/primitives";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TitlesPage() {
  // Array de certificaciones y títulos
  const certifications = [
    {
      id: 1,
      title: "Técnico Electricista Matriculado",
      issuer: "Colegio de Técnicos de Santa Fe",
      year: "2010",
      description:
        "Matrícula profesional que habilita para realizar trabajos eléctricos en toda la provincia.",
      imagePath: "/certifications/matricula.jpg",
    },
    {
      id: 2,
      title: "Especialista en Instalaciones de Baja Tensión",
      issuer: "Universidad Tecnológica Nacional",
      year: "2012",
      description:
        "Certificación para instalaciones eléctricas domiciliarias y comerciales.",
      imagePath: "/certifications/baja-tension.jpg",
    },
    {
      id: 3,
      title: "Técnico en Seguridad Eléctrica",
      issuer: "APSE - Asociación para la Seguridad Eléctrica",
      year: "2015",
      description:
        "Formación especializada en seguridad y prevención de riesgos eléctricos.",
      imagePath: "/certifications/seguridad.jpg",
    },
    {
      id: 4,
      title: "Curso de Automatización Industrial",
      issuer: "SIEMENS Argentina",
      year: "2018",
      description:
        "Especialización en automatización y control de sistemas eléctricos industriales.",
      imagePath: "/certifications/automatizacion.jpg",
    },
    {
      id: 5,
      title: "Habilitación Municipal",
      issuer: "Municipalidad de Rosario",
      year: "2010 - Actual",
      description:
        "Permiso oficial para operar como electricista en la ciudad de Rosario.",
      imagePath: "/certifications/habilitacion.jpg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <h1 className={title({ size: "lg" }) + " mb-4"}>Títulos y Certificaciones</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Contamos con todas las certificaciones y habilitaciones necesarias para
          garantizar un trabajo profesional y seguro. Nuestro compromiso con la
          formación continua nos permite ofrecer el mejor servicio.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {certifications.map((cert) => (
            <Card key={cert.id} className="overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/3 bg-muted rounded-lg flex items-center justify-center p-4 h-40 mb-4 sm:mb-0">
                    <div className="text-sm text-muted-foreground text-center">
                      Imagen de certificación
                    </div>
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h2 className="text-xl font-bold">{cert.title}</h2>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-semibold">{cert.issuer}</span> • {cert.year}
                    </p>
                    <p className="text-sm md:text-base">{cert.description}</p>
                  </div>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="p-4 bg-muted/20">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  La validez de nuestras certificaciones puede verificarse en los
                  organismos correspondientes.
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-muted p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Formación Continua</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-base md:text-lg mb-4">
                Nos mantenemos constantemente actualizados con las últimas técnicas,
                normativas y tecnologías del sector eléctrico para ofrecer siempre el
                mejor servicio posible.
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg">
                Participamos regularmente en cursos, seminarios y capacitaciones para
                ampliar nuestros conocimientos y habilidades profesionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
