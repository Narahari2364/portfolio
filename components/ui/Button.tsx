"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
    primary: "bg-black dark:bg-white text-white dark:text-black",
    secondary: "bg-gray-200 dark:bg-gray-800 text-black dark:text-white",
    outline: "border-2 border-black dark:border-white bg-transparent",
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
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </Component>
  );
}

