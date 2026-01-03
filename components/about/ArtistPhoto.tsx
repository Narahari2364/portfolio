"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { transitions } from "@/lib/motion";

interface ArtistPhotoProps {
  src?: string;
  alt?: string;
}

export default function ArtistPhoto({
  src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
  alt = "Artist",
}: ArtistPhotoProps) {
  return (
    <motion.div
      className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden bg-background-surface border border-foreground-tertiary/10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={transitions.fluid}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 400px"
        loading="lazy"
      />
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
    </motion.div>
  );
}

