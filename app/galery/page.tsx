import { title } from "@/components/primitives";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function GalleryPage() {
  // Array de trabajos con información y rutas de imágenes reales
  const works = [
    {
      id: 1,
      title: "Instalación Residencial",
      description: "Instalación completa en vivienda unifamiliar",
      imagePath: "/electricidad1.jpg",
      category: "residencial"
    },
    {
      id: 2,
      title: "Tablero Eléctrico",
      description: "Armado y conexión de tablero principal",
      imagePath: "/electricidad2.jpg",
      category: "comercial"
    },
    {
      id: 3,
      title: "Iluminación Comercial",
      description: "Sistema de iluminación para local comercial",
      imagePath: "/electricidad3.jpg",
      category: "comercial"
    },
    {
      id: 4,
      title: "Reparación Emergencia",
      description: "Solución rápida a problema eléctrico",
      imagePath: "/electricidad4.jpg",
      category: "residencial"
    },
    {
      id: 5,
      title: "Instalación Exterior",
      description: "Tendido eléctrico para exteriores",
      imagePath: "/electricidad5.jpg",
      category: "residencial"
    },
    {
      id: 6,
      title: "Mantenimiento Industrial",
      description: "Mantenimiento preventivo en planta industrial",
      imagePath: "/electricidad6.jpg",
      category: "industrial"
    },
    {
      id: 7,
      title: "Cableado Estructurado",
      description: "Instalación de cableado organizado",
      imagePath: "/electricidad7.jpg",
      category: "comercial"
    },
    {
      id: 8,
      title: "Iluminación LED",
      description: "Sistemas de iluminación eficiente",
      imagePath: "/electricidad8.jpg",
      category: "residencial"
    },
    {
      id: 9,
      title: "Conexiones Especiales",
      description: "Soluciones para conexiones complejas",
      imagePath: "/electricidad9.jpg",
      category: "industrial"
    },
    {
      id: 10,
      title: "Proyectos Residenciales",
      description: "Trabajos en domicilios particulares",
      imagePath: "/electricidad10.jpg",
      category: "residencial"
    },
    {
      id: 11,
      title: "Instalaciones en Durlock",
      description: "Instalaciones eléctricas en construcción en seco",
      imagePath: "/durlock13.jpg",
      category: "residencial"
    },
    {
      id: 12,
      title: "Inspección y Diagnóstico",
      description: "Evaluación de instalaciones existentes",
      imagePath: "/IMG-20211124-WA0064.jpg",
      category: "comercial"
    },
  ];

  // Categorías únicas
  const categories = ["todos", ...new Set(works.map(work => work.category))];

  return (
    <section className="w-full py-12 md:py-16 lg:py-10 bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className={title({ size: "lg" }) + " mb-4"}>Galería de Trabajos</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explora algunos de nuestros trabajos realizados en Rosario y
            alrededores. Nos especializamos en instalaciones residenciales,
            comerciales e industriales.
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <ScrollArea className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {works
                    .filter((work) => category === "todos" || work.category === category)
                    .map((work) => (
                      <div
                        key={work.id}
                        className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col h-full border border-border"
                      >
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image
                            src={work.imagePath}
                            alt={work.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold">{work.title}</h3>
                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full capitalize">{work.category}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{work.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center bg-card p-8 rounded-xl shadow-sm border border-border">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas un servicio similar?</h2>
          <p className="text-lg mb-6">
            Contáctanos para obtener una cotización sin compromiso para tu proyecto eléctrico.
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=5493415883040&text=Hola%20quiero%20mas%20informacion"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
