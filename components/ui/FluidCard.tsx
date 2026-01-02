"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FluidCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "primary" | "secondary" | "tertiary" | false;
}

export default function FluidCard({
  children,
  className,
  hover = true,
  glow = false,
}: FluidCardProps) {
  const glowClasses = {
    primary: "hover:shadow-glow-primary",
    secondary: "hover:shadow-glow-secondary",
    tertiary: "hover:shadow-glow-tertiary",
  };

  return (
    <motion.div
      className={cn(
        "p-8 rounded-xl bg-background-surface border border-foreground-tertiary/10",
        hover && "cursor-pointer",
        glow && glowClasses[glow],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1], // fluid easing
      }}
      whileHover={hover ? {
        y: -8,
        rotateY: 2,
        rotateX: -1,
        boxShadow: "0 24px 48px rgba(0, 0, 0, 0.12)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
      } : undefined}
    >
      {children}
    </motion.div>
  );
}

