// pages/index.tsx
import Head from 'next/head';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackgroundCarousel from '@/components/BackgroundCarousel';

export default function Home() {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen gap-4 py-8 md:py-10">
            <BackgroundCarousel />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="inline-block max-w-lg">
                    <h1 className="text-4xl font-bold">Creamos&nbsp;</h1>
                    <h1 className="text-4xl font-bold text-violet-500">soluciones&nbsp;</h1>
                    <br />
                    <h1 className="text-4xl font-bold">
                        y damos seguridad a nuestros clientes
                    </h1>
                    <h2 className="mt-4 text-2xl text-gray-700">
                        Trabajamos en rosario y alrededores, rapida respuesta, increible atencion.
                    </h2>
                </div>
                <div className="flex gap-3 p-6 mt-6">
                    <WhatsAppButton />
                </div>
            </div>
        </section>
    );
}
