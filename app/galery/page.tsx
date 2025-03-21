import { title } from "@/components/primitives";
import Image from "next/image";

export default function GalleryPage() {
  // Array de trabajos con información y rutas de imágenes reales
  const works = [
    {
      id: 1,
      title: "Instalación Residencial",
      description: "Instalación completa en vivienda unifamiliar",
      imagePath: "/electricidad1.jpg",
    },
    {
      id: 2,
      title: "Tablero Eléctrico",
      description: "Armado y conexión de tablero principal",
      imagePath: "/electricidad2.jpg",
    },
    {
      id: 3,
      title: "Iluminación Comercial",
      description: "Sistema de iluminación para local comercial",
      imagePath: "/electricidad3.jpg",
    },
    {
      id: 4,
      title: "Reparación Emergencia",
      description: "Solución rápida a problema eléctrico",
      imagePath: "/electricidad4.jpg",
    },
    {
      id: 5,
      title: "Instalación Exterior",
      description: "Tendido eléctrico para exteriores",
      imagePath: "/electricidad5.jpg",
    },
    {
      id: 6,
      title: "Mantenimiento Industrial",
      description: "Mantenimiento preventivo en planta industrial",
      imagePath: "/electricidad6.jpg",
    },
    {
      id: 7,
      title: "Cableado Estructurado",
      description: "Instalación de cableado organizado",
      imagePath: "/electricidad7.jpg",
    },
    {
      id: 8,
      title: "Iluminación LED",
      description: "Sistemas de iluminación eficiente",
      imagePath: "/electricidad8.jpg",
    },
    {
      id: 9,
      title: "Conexiones Especiales",
      description: "Soluciones para conexiones complejas",
      imagePath: "/electricidad9.jpg",
    },
    {
      id: 10,
      title: "Proyectos Residenciales",
      description: "Trabajos en domicilios particulares",
      imagePath: "/electricidad10.jpg",
    },
    {
      id: 11,
      title: "Instalaciones en Durlock",
      description: "Instalaciones eléctricas en construcción en seco",
      imagePath: "/durlock13.jpg",
    },
    {
      id: 12,
      title: "Inspección y Diagnóstico",
      description: "Evaluación de instalaciones existentes",
      imagePath: "/IMG-20211124-WA0064.jpg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <h1 className={title({ size: "lg" }) + " mb-4"}>Galería de Trabajos</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Explora algunos de nuestros trabajos realizados en Rosario y
          alrededores. Nos especializamos en instalaciones residenciales,
          comerciales e industriales.
        </p>

        {/* Grid de imágenes optimizado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col h-full border border-border"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={work.imagePath}
                  alt={work.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold">{work.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{work.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-muted p-6 rounded-lg">
          <p className="text-lg">
            ¿Necesitas un trabajo similar? No dudes en contactarnos para una
            cotización.
          </p>
        </div>
      </div>
    </section>
  );
}
