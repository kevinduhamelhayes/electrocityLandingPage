"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { CarouselControls } from "./carousel-controls";
import { CarouselIndicators } from "./carousel-indicators";

export interface BackgroundCarouselProps {
  images: string[];
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  pauseOnHover?: boolean;
}

export function BackgroundCarousel({
  images = ["/electricidad1.jpg", "/electricidad2.jpg", "/electricidad3.jpg"],
  interval = 6000,
  showControls = true,
  showIndicators = true,
  pauseOnHover = true,
}: BackgroundCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Navegación manual
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    },
    [isTransitioning],
  );

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
    if (isPaused) return;
    
    const carouselInterval = setInterval(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, interval);

    return () => clearInterval(carouselInterval);
  }, [goToNext, isTransitioning, interval, isPaused]);

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Imágenes del carrusel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === currentIndex}
              quality={85}
              style={{
                objectFit: "cover",
                transform: index === currentIndex ? "scale(1.05)" : "scale(1)",
                transition: "transform 6s ease-in-out",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      ))}

      {/* Controles de navegación */}
      {showControls && (
        <CarouselControls 
          onPrevious={goToPrevious} 
          onNext={goToNext} 
        />
      )}

      {/* Indicadores */}
      {showIndicators && (
        <CarouselIndicators 
          count={images.length}
          currentIndex={currentIndex}
          onClick={goToSlide}
        />
      )}
    </div>
  );
} 