"use client";

import { Artwork } from "@/types";
import FadeIn from "@/components/animations/FadeIn";
import ArtworkCard from "./ArtworkCard";
import Link from "next/link";

interface RelatedArtworkProps {
  artworks: Artwork[];
}

export default function RelatedArtwork({ artworks }: RelatedArtworkProps) {
  return (
    <FadeIn>
      <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">
        Related Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {artworks.map((artwork) => (
          <Link key={artwork.id} href={`/portfolio/${artwork.slug}`}>
            <ArtworkCard artwork={artwork} />
          </Link>
        ))}
      </div>
    </FadeIn>
  );
}

