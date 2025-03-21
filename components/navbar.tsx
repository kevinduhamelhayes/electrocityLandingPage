"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Clock, Mail, Menu } from "lucide-react";

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

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-300",
      scrolled 
        ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 py-2" 
        : "bg-transparent py-4"
    )}>
      {/* Top Info Bar - solo visible en escritorio */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-1">
        <div className="container flex justify-between items-center max-w-screen-2xl">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="text-sm font-medium">+54 9 341 588-3040</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="text-sm font-medium">info@electricistarosario.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span className="text-sm font-medium">Lun - Sáb: 8:00 - 20:00</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container flex items-center justify-between max-w-screen-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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
            <span className="font-bold text-xl block leading-tight">Electricista</span>
            <span className="text-primary text-lg block leading-tight">Rosario</span>
          </div>
        </Link>

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
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {item.label}
              <span 
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200",
                  pathname === item.href ? "scale-x-100" : ""
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Actions area */}
        <div className="flex items-center gap-3">
          <ThemeSwitch />
          
          <Button variant="primary" size="sm" className="hidden md:flex">
            <Phone size={16} className="mr-2" />
            Contactar
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
                          : "text-foreground/70 hover:text-foreground"
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
                  <span>+54 9 341 588-3040</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-primary" />
                  <span>info@electricistarosario.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  <span>Lun - Sáb: 8:00 - 20:00</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
