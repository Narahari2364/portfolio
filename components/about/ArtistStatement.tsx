"use client";

import { motion } from "framer-motion";
import { transitions } from "@/lib/motion";

interface ArtistStatementProps {
  statement: string;
}

export default function ArtistStatement({ statement }: ArtistStatementProps) {
  return (
    <motion.div
      className="pt-12 border-t border-foreground-tertiary/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.3, ...transitions.fluid }}
    >
      <motion.h2
        className="text-fluid-2xl font-light tracking-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, ...transitions.fluid }}
      >
        Artist Statement
      </motion.h2>
      <motion.p
        className="text-fluid-lg leading-relaxed text-foreground-secondary font-light italic max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, ...transitions.fluid }}
      >
        {statement}
      </motion.p>
    </motion.div>
  );
}

