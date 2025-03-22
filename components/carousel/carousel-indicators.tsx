import React from "react";

interface CarouselIndicatorsProps {
  count: number;
  currentIndex: number;
  onClick: (index: number) => void;
  className?: string;
}

export function CarouselIndicators({
  count,
  currentIndex,
  onClick,
  className,
}: CarouselIndicatorsProps) {
  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full transition-all ${
            index === currentIndex
              ? "bg-primary w-8"
              : "bg-white/50 hover:bg-white/80"
          }`}
          onClick={() => onClick(index)}
          aria-label={`Ir a diapositiva ${index + 1}`}
        />
      ))}
    </div>
  );
} 