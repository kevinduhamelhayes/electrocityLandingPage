"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="es">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Ha ocurrido un error global
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Lo sentimos, ha ocurrido un error inesperado en la aplicación
          </p>
          <Button onClick={() => reset()} size="lg">
            Intentar de nuevo
          </Button>
        </div>
      </body>
    </html>
  );
}
