// components/BackgroundCarousel.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BackgroundCarouselProps {}

const BackgroundCarousel: React.FC<BackgroundCarouselProps> = () => {
    const images = [
        "/electricidad1.jpg",
        "/electricidad2.jpg",
        "/electricidad3.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Navegación manual
    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 1000);
    }, [isTransitioning]);

    const goToPrevious = useCallback(() => {
        if (isTransitioning) return;
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        goToSlide(newIndex);
    }, [currentIndex, goToSlide, images.length, isTransitioning]);

    const goToNext = useCallback(() => {
        if (isTransitioning) return;
        const newIndex = (currentIndex + 1) % images.length;
        goToSlide(newIndex);
    }, [currentIndex, goToSlide, images.length, isTransitioning]);

    // Rotación automática
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning) {
                goToNext();
            }
        }, 6000);

        return () => clearInterval(interval);
    }, [goToNext, isTransitioning]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Imágenes del carrusel */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div 
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 6s ease-in-out',
                        }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
            ))}
            
            {/* Controles de navegación */}
            <button 
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Anterior"
            >
                <ChevronLeft size={24} />
            </button>
            
            <button 
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Siguiente"
            >
                <ChevronRight size={24} />
            </button>
            
            {/* Indicadores */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === currentIndex 
                                ? 'bg-primary w-8' 
                                : 'bg-white/50 hover:bg-white/80'
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Ir a diapositiva ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BackgroundCarousel;
