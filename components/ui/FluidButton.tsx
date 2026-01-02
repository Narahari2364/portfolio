"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FluidButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function FluidButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
}: FluidButtonProps) {
  const baseStyles = "font-medium uppercase tracking-wider rounded-full transition-all relative overflow-hidden";
  
  const variants = {
    primary: "bg-accent-primary text-white",
    secondary: "bg-accent-secondary text-white",
    tertiary: "bg-accent-tertiary text-white",
    outline: "border-2 border-foreground-primary bg-transparent",
    ghost: "bg-transparent hover:bg-background-surface",
  };

  const sizes = {
    sm: "px-6 py-2 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  };

  // Spring physics for elastic, liquid feel
  const springConfig = {
    type: "spring" as const,
    stiffness: 400,
    damping: 17,
    mass: 0.8,
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
        transition: springConfig,
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      transition={springConfig}
    >
      {/* Ripple effect on hover */}
      <motion.span
        className="absolute inset-0 bg-white/20 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <span className="relative z-10">{children}</span>
    </Component>
  );
}

