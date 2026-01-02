"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FluidBlobProps {
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "tertiary";
  animate?: boolean;
}

export default function FluidBlob({
  children,
  className,
  size = "md",
  color = "primary",
  animate = true,
}: FluidBlobProps) {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[600px] h-[600px]",
  };

  const colors = {
    primary: "from-accent-primary/30 via-accent-primary/20 to-accent-secondary/30",
    secondary: "from-accent-secondary/30 via-accent-secondary/20 to-accent-tertiary/30",
    tertiary: "from-accent-tertiary/30 via-accent-tertiary/20 to-accent-primary/30",
  };

  const morphVariants = {
    animate: {
      borderRadius: [
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "30% 60% 70% 40% / 50% 60% 30% 60%",
        "60% 40% 30% 70% / 60% 30% 70% 40%",
      ],
    },
  };

  return (
    <motion.div
      className={cn(
        sizes[size],
        `bg-gradient-to-br ${colors[color]}`,
        "rounded-full blur-3xl",
        className
      )}
      animate={animate ? morphVariants.animate : undefined}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

