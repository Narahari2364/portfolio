"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { artworks, getArtworksByCategory } from "@/lib/data";
import ArtworkCard from "@/components/artwork/ArtworkCard";
import Link from "next/link";

export default function PortfolioGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";
  const filteredArtworks = getArtworksByCategory(category);

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {filteredArtworks.map((artwork) => (
        <Link key={artwork.id} href={`/portfolio/${artwork.slug}`}>
          <ArtworkCard artwork={artwork} />
        </Link>
      ))}
    </motion.div>
  );
}

