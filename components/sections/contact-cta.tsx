import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

interface ContactCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

export function ContactCTA({
  title = "¿Listo para trabajar con nosotros?",
  description = "Contáctanos hoy mismo para una cotización sin compromiso.",
  buttonText = "Solicitar Presupuesto",
  className = "",
}: ContactCTAProps) {
  return (
    <div className={`text-center bg-primary/5 p-8 rounded-xl ${className}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">{description}</p>
      <Link
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="default"
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
} 