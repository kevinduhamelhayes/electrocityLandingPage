import { title } from "@/components/primitives";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
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
      description: "Matrícula profesional que habilita para realizar trabajos eléctricos en toda la provincia.",
      imagePath: "/certifications/matricula.jpg",
    },
    {
      id: 2,
      title: "Especialista en Instalaciones de Baja Tensión",
      issuer: "Universidad Tecnológica Nacional",
      year: "2012",
      description: "Certificación para instalaciones eléctricas domiciliarias y comerciales.",
      imagePath: "/certifications/baja-tension.jpg",
    },
    {
      id: 3,
      title: "Técnico en Seguridad Eléctrica",
      issuer: "APSE - Asociación para la Seguridad Eléctrica",
      year: "2015",
      description: "Formación especializada en seguridad y prevención de riesgos eléctricos.",
      imagePath: "/certifications/seguridad.jpg",
    },
    {
      id: 4,
      title: "Curso de Automatización Industrial",
      issuer: "SIEMENS Argentina",
      year: "2018",
      description: "Especialización en automatización y control de sistemas eléctricos industriales.",
      imagePath: "/certifications/automatizacion.jpg",
    },
    {
      id: 5,
      title: "Habilitación Municipal",
      issuer: "Municipalidad de Rosario",
      year: "2010 - Actual",
      description: "Permiso oficial para operar como electricista en la ciudad de Rosario.",
      imagePath: "/certifications/habilitacion.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className={title({ size: "lg" })}>Títulos y Certificaciones</h1>
      <p className="text-lg mt-4 mb-8">
        Contamos con todas las certificaciones y habilitaciones necesarias para garantizar un trabajo profesional 
        y seguro. Nuestro compromiso con la formación continua nos permite ofrecer el mejor servicio.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {certifications.map((cert) => (
          <Card key={cert.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3 bg-muted rounded-lg flex items-center justify-center p-4 h-40">
                  <div className="text-sm text-muted-foreground text-center">
                    Imagen de certificación
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-xl font-bold">{cert.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">{cert.issuer}</span> • {cert.year}
                  </p>
                  <p className="mt-2">{cert.description}</p>
                </div>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="p-4">
              <p className="text-sm text-muted-foreground">
                La validez de nuestras certificaciones puede verificarse en los organismos correspondientes.
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 bg-muted p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Formación Continua</h2>
        <p className="text-lg mb-4">
          Nos mantenemos constantemente actualizados con las últimas técnicas, normativas y tecnologías 
          del sector eléctrico para ofrecer siempre el mejor servicio posible.
        </p>
        <p className="text-lg">
          Participamos regularmente en cursos, seminarios y capacitaciones para ampliar nuestros 
          conocimientos y habilidades profesionales.
        </p>
      </div>
    </div>
  );
}
