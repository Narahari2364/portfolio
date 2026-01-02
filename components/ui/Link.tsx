"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function Link({ href, children, className, external }: LinkProps) {
  const Component = external ? motion.a : motion(NextLink);

  return (
    <Component
      href={href}
      className={cn(
        "relative text-sm font-medium tracking-wide uppercase",
        "hover:scale-110 transition-transform",
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </Component>
  );
}

