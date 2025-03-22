"use client";

import React from "react";
import Link from "next/link";

export function Logo() {
  return (
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
        <span className="font-bold text-xl block leading-tight">
          Electricista
        </span>
        <span className="text-primary text-lg block leading-tight">
          Rosario
        </span>
      </div>
    </Link>
  );
} 