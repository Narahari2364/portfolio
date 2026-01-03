"use client";

import { motion } from "framer-motion";
import { transitions } from "@/lib/motion";

export default function AboutHero() {
  return (
    <motion.div
      className="text-center mb-16 sm:mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitions.fluid}
    >
      <motion.h1
        className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl font-light tracking-tight mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, ...transitions.fluid }}
      >
        About
      </motion.h1>
      <motion.div
        className="w-16 h-px bg-foreground-primary mx-auto"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}
