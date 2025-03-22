import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
}

export function CarouselControls({
  onPrevious,
  onNext,
  className,
}: CarouselControlsProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Siguiente"
      >
        <ChevronRight size={24} />
      </button>
    </>
  );
} 