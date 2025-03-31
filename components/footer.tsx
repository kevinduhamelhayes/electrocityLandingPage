"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HomeIcon } from "@/components/icons";

export const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - About */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <HomeIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="block text-xl font-bold leading-tight text-foreground">
                  Electricista
                </span>
                <span className="block text-lg leading-tight text-primary">
                  Rosario
                </span>
              </div>
            </div>
            <p className="mb-6 text-muted-foreground">
              Brindamos servicios eléctricos profesionales en Rosario y
              alrededores, con soluciones seguras, eficientes y de calidad para
              hogares y empresas.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="social" size="icon">
                  <Facebook size={18} />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="social" size="icon">
                  <Instagram size={18} />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="social" size="icon">
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground">Servicios</h3>
            <ul className="space-y-3">
              {[
                "Instalaciones eléctricas",
                "Reparaciones",
                "Mantenimiento",
                "Tableros eléctricos",
                "Iluminación",
                "Cableado de redes",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-primary" />
                  <Link
                    href="/services"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Rosario, Santa Fe, Argentina
                </span>
              </div>
              <div className="flex items-start gap-3">
                <PhoneCall
                  size={20}
                  className="mt-1 flex-shrink-0 text-primary"
                />
                <span className="text-muted-foreground">+54 9 341 588-3040</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  info@electricistarosario.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Lun - Sáb: 8:00 - 20:00</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground">Newsletter</h3>
            <p className="mb-4 text-muted-foreground">
              Suscríbete para recibir nuestras últimas novedades y ofertas
              especiales.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="border-input bg-background text-foreground placeholder:text-muted-foreground"
              />
              <Button className="w-full">Suscribirse</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 text-center text-muted-foreground md:mb-0 md:text-left">
            © {new Date().getFullYear()} Electricista Rosario. Todos los
            derechos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Desarrollado por</span>
            <Link
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
              href="https://www.devink.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devink
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
