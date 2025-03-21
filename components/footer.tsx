"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 12.5L18 9L12 3L6 9L9.5 12.5" />
                  <path d="M18 9v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
                  <path d="M15 14v3" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-xl block leading-tight text-white">Electricista</span>
                <span className="text-primary text-lg block leading-tight">Rosario</span>
              </div>
            </div>
            <p className="mb-6 text-slate-400">
              Brindamos servicios eléctricos profesionales en Rosario y alrededores, con soluciones seguras, eficientes y de calidad para hogares y empresas.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full border-slate-700 text-slate-400 hover:text-primary hover:border-primary">
                  <Facebook size={18} />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full border-slate-700 text-slate-400 hover:text-primary hover:border-primary">
                  <Instagram size={18} />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full border-slate-700 text-slate-400 hover:text-primary hover:border-primary">
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Servicios</h3>
            <ul className="space-y-3">
              {['Instalaciones eléctricas', 'Reparaciones', 'Mantenimiento', 'Tableros eléctricos', 'Iluminación', 'Cableado de redes'].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-primary" />
                  <Link href="/services" className="text-slate-400 hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-slate-400">Rosario, Santa Fe, Argentina</span>
              </div>
              <div className="flex items-start gap-3">
                <PhoneCall size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-slate-400">+54 9 341 588-3040</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-slate-400">info@electricistarosario.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-slate-400">Lun - Sáb: 8:00 - 20:00</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="mb-4 text-slate-400">
              Suscríbete para recibir nuestras últimas novedades y ofertas especiales.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-slate-800 border-slate-700 text-slate-300 placeholder:text-slate-500"
              />
              <Button className="w-full">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} Electricista Rosario. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span className="text-slate-500">Desarrollado por</span>
            <Link
              className="text-slate-400 hover:text-primary transition-colors font-medium"
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