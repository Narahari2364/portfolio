"use client";

import { motion } from "framer-motion";
import { Artwork } from "@/types";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { transitions } from "@/lib/motion";

interface ArtworkInfoProps {
  artwork: Artwork;
}

export default function ArtworkInfo({ artwork }: ArtworkInfoProps) {
  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.fluid,
    },
  };

  return (
    <motion.div
      className="space-y-8 lg:sticky lg:top-32 lg:self-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title with slide animation */}
      <motion.div variants={itemVariants}>
        <h1 className="text-fluid-4xl sm:text-fluid-5xl font-light tracking-tight mb-4">
          {artwork.title}
        </h1>
        <motion.p
          className="text-fluid-lg text-foreground-secondary"
          variants={itemVariants}
        >
          {artwork.year} • {artwork.category}
        </motion.p>
      </motion.div>

      {/* Metadata with fade animations */}
      <motion.div
        className="space-y-6 text-lg leading-relaxed"
        variants={itemVariants}
      >
        <div className="space-y-1">
          <span className="font-medium uppercase tracking-wider text-sm text-foreground-tertiary">
            Medium
          </span>
          <p className="font-light">{artwork.medium}</p>
        </div>

        <div className="space-y-1">
          <span className="font-medium uppercase tracking-wider text-sm text-foreground-tertiary">
            Dimensions
          </span>
          <p className="font-light">{artwork.dimensions}</p>
        </div>

        {artwork.description && (
          <div className="space-y-2 pt-4 border-t border-foreground-tertiary/10">
            <span className="font-medium uppercase tracking-wider text-sm text-foreground-tertiary block">
              Description
            </span>
            <p className="font-light text-foreground-secondary leading-relaxed">
              {artwork.description}
            </p>
          </div>
        )}

        {artwork.tags && artwork.tags.length > 0 && (
          <div className="space-y-2 pt-4 border-t border-foreground-tertiary/10">
            <span className="font-medium uppercase tracking-wider text-sm text-foreground-tertiary block">
              Tags
            </span>
            <div className="flex flex-wrap gap-2">
              {artwork.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1.5 bg-background-surface border border-foreground-tertiary/10 rounded-full text-sm font-light"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(124, 58, 237, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Back button */}
      <motion.div
        className="pt-8 border-t border-foreground-tertiary/10"
        variants={itemVariants}
      >
        <Link href="/portfolio">
          <Button variant="outline">
            ← Back to Portfolio
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
