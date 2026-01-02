"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Artwork } from "@/types";
import Modal from "@/components/ui/Modal";

interface ArtworkViewerProps {
  artwork: Artwork;
}

export default function ArtworkViewer({ artwork }: ArtworkViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const images = artwork.images || [artwork.image];

  return (
    <>
      <motion.div
        className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 cursor-zoom-in"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setIsFullscreen(true)}
      >
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <motion.div
          className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center"
          whileHover={{ opacity: 1 }}
        >
          <span className="text-white opacity-0 hover:opacity-100 text-sm uppercase tracking-wider">
            Click to view fullscreen
          </span>
        </motion.div>
      </motion.div>

      <Modal isOpen={isFullscreen} onClose={() => setIsFullscreen(false)}>
        <div className="relative max-w-7xl max-h-[90vh] w-full">
          <Image
            src={artwork.image}
            alt={artwork.title}
            width={1920}
            height={1080}
            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            priority
          />
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-black/90 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-white dark:hover:bg-black transition-colors"
            aria-label="Close fullscreen"
          >
            ×
          </button>
        </div>
      </Modal>
    </>
  );
}

