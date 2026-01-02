"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { springConfig } from "@/lib/motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const baseStyles = "font-medium uppercase tracking-wider rounded-full transition-all";
  
  const variants = {
    primary: "bg-accent-primary text-white hover:shadow-glow-primary",
    secondary: "bg-accent-secondary text-white hover:shadow-glow-secondary",
    outline: "border-2 border-foreground-primary bg-transparent",
  };

  const sizes = {
    sm: "px-6 py-2 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  };

  const Component = href ? motion.a : motion.button;
  const props = href
    ? { href }
    : { type, onClick };

  return (
    <Component
      {...props}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ 
        scale: 1.05, 
        y: -4,
        transition: springConfig.medium,
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      transition={springConfig.medium}
    >
      {children}
    </Component>
  );
}

