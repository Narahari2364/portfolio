"use client";

import { motion } from "framer-motion";
import { transitions } from "@/lib/motion";

export default function PortfolioHeader() {
  return (
    <motion.div
      className="text-center mb-16 sm:mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitions.fluid}
    >
      <motion.h1
        className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl font-light tracking-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, ...transitions.fluid }}
      >
        Portfolio
      </motion.h1>
      <motion.p
        className="text-fluid-lg text-foreground-secondary font-light max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ...transitions.fluid }}
      >
        A collection of recent projects and creative explorations
      </motion.p>
    </motion.div>
  );
}

