"use client";

import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getArtworksByCategory } from "@/lib/data";
import ArtworkCard from "@/components/artwork/ArtworkCard";
import Link from "next/link";
import { springConfig } from "@/lib/motion";

export default function PortfolioGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";
  const filteredArtworks = getArtworksByCategory(category);

  // Grid animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={category}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {filteredArtworks.map((artwork, index) => (
          <Link
            key={artwork.id}
            href={`/portfolio/${artwork.slug}`}
            className="block"
          >
            <ArtworkCard artwork={artwork} index={index} />
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
