"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Artwork } from "@/types";
import { springConfig, transitions } from "@/lib/motion";

interface ArtworkNavigationProps {
  currentArtwork: Artwork;
  allArtworks: Artwork[];
}

export default function ArtworkNavigation({
  currentArtwork,
  allArtworks,
}: ArtworkNavigationProps) {
  const currentIndex = allArtworks.findIndex(
    (art) => art.id === currentArtwork.id
  );

  const previousArtwork =
    currentIndex > 0 ? allArtworks[currentIndex - 1] : null;
  const nextArtwork =
    currentIndex < allArtworks.length - 1
      ? allArtworks[currentIndex + 1]
      : null;

  if (!previousArtwork && !nextArtwork) {
    return null;
  }

  return (
    <motion.div
      className="flex items-center justify-between pt-12 border-t border-foreground-tertiary/10 mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, ...transitions.fluid }}
    >
      {/* Previous artwork */}
      {previousArtwork ? (
        <Link href={`/portfolio/${previousArtwork.slug}`}>
          <motion.div
            className="flex items-center gap-4 group"
            whileHover={{ x: -4, transition: springConfig.medium }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full border border-foreground-tertiary/20 flex items-center justify-center group-hover:border-accent-primary group-hover:bg-accent-primary/10 transition-colors"
              whileHover={{ rotate: -180 }}
              transition={springConfig.medium}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-foreground-primary"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
            <div className="hidden sm:block">
              <div className="text-xs uppercase tracking-wider text-foreground-tertiary mb-1">
                Previous
              </div>
              <div className="font-light text-foreground-primary group-hover:text-accent-primary transition-colors">
                {previousArtwork.title}
              </div>
            </div>
          </motion.div>
        </Link>
      ) : (
        <div />
      )}

      {/* Next artwork */}
      {nextArtwork ? (
        <Link href={`/portfolio/${nextArtwork.slug}`}>
          <motion.div
            className="flex items-center gap-4 group text-right"
            whileHover={{ x: 4, transition: springConfig.medium }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="hidden sm:block">
              <div className="text-xs uppercase tracking-wider text-foreground-tertiary mb-1">
                Next
              </div>
              <div className="font-light text-foreground-primary group-hover:text-accent-primary transition-colors">
                {nextArtwork.title}
              </div>
            </div>
            <motion.div
              className="w-10 h-10 rounded-full border border-foreground-tertiary/20 flex items-center justify-center group-hover:border-accent-primary group-hover:bg-accent-primary/10 transition-colors"
              whileHover={{ rotate: 180 }}
              transition={springConfig.medium}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-foreground-primary"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </Link>
      ) : (
        <div />
      )}
    </motion.div>
  );
}

