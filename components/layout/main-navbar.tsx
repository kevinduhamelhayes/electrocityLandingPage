"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "./logo";

export function MainNavbar() {
  const pathname = usePathname();

  return (
    <div className="container flex items-center justify-between max-w-screen-2xl">
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        {siteConfig.navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors relative group",
              pathname === item.href
                ? "text-primary"
                : "text-foreground/70 hover:text-foreground",
            )}
          >
            {item.label}
            <span
              className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200",
                pathname === item.href ? "scale-x-100" : "",
              )}
            />
          </Link>
        ))}
      </nav>

      {/* Actions area */}
      <div className="flex items-center gap-3">
        <ThemeSwitch />

        <Button
          variant="default"
          size="sm"
          className="hidden md:flex"
          asChild
        >
          <Link href={siteConfig.links.whatsapp}>
            <Phone size={16} className="mr-2" />
            Contactar
          </Link>
        </Button>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Electricista Rosario</SheetTitle>
            </SheetHeader>
            <MobileMenu />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
} 