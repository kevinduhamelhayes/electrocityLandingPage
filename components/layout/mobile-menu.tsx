"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function MobileMenu() {
  const pathname = usePathname();

  return (
    <>
      <div className="mt-6 border-t border-border/40 pt-6">
        <nav className="flex flex-col gap-4">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-md",
                pathname === item.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/70 hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-2">
          <Phone size={18} className="text-primary" />
          <a href={`tel:${siteConfig.links.tel.replace('tel:', '')}`}>
            +54 9 341 588-3040
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={18} className="text-primary" />
          <a href={siteConfig.links.email}>
            info@electricistarosario.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-primary" />
          <span>Lun - Sáb: 8:00 - 20:00</span>
        </div>
      </div>
    </>
  );
} 