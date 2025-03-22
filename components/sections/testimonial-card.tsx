import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  comment: string;
  image: string;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  comment,
  image,
  className = "",
}: TestimonialCardProps) {
  return (
    <div className={`p-6 bg-card rounded-xl shadow-sm border border-border ${className}`}>
      <QuoteIcon className="h-8 w-8 text-primary/40 mb-4" />
      <p className="text-muted-foreground mb-6">{comment}</p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}{name.split(' ')[1]?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
} 