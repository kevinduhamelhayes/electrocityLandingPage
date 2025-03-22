"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TopInfoBar } from "./top-info-bar";
import { MainNavbar } from "./main-navbar";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 py-2"
          : "bg-transparent py-4",
      )}
    >
      {/* Top Info Bar - solo visible en escritorio */}
      <TopInfoBar />

      {/* Main Navbar */}
      <MainNavbar />
    </header>
  );
} 