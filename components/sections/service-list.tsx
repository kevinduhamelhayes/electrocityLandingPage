import React from "react";
import { CheckCircle } from "lucide-react";

interface ServiceListProps {
  services: string[];
  className?: string;
}

export function ServiceList({ services, className }: ServiceListProps) {
  return (
    <ul className={`grid grid-cols-1 gap-3 ${className}`}>
      {services.map((service, index) => (
        <li key={index} className="flex items-start gap-2">
          <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <span className="text-base md:text-lg">{service}</span>
        </li>
      ))}
    </ul>
  );
} 