"use client";

import React from "react";
import { Phone, Clock, Mail } from "lucide-react";

export function TopInfoBar() {
  return (
    <div className="hidden lg:block bg-primary text-primary-foreground py-1">
      <div className="container flex justify-between items-center max-w-screen-2xl">
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span className="text-sm font-medium">+54 9 341 588-3040</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span className="text-sm font-medium">
              info@electricistarosario.com
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span className="text-sm font-medium">Lun - Sáb: 8:00 - 20:00</span>
        </div>
      </div>
    </div>
  );
} 