import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  cardClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  cardClassName,
  titleClassName,
  descriptionClassName,
}: FeatureCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className={cn("bg-card border border-border rounded-lg p-5", cardClassName)}>
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className={cn("font-bold text-xl mb-3", titleClassName)}>
          {title}
        </h3>
        <p className={cn("text-muted-foreground", descriptionClassName)}>
          {description}
        </p>
      </div>
    </div>
  );
} 