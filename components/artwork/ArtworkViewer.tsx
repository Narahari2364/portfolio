"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Artwork } from "@/types";
import Modal from "@/components/ui/Modal";
import { transitions, springConfig } from "@/lib/motion";

interface ArtworkViewerProps {
  artwork: Artwork;
}

export default function ArtworkViewer({ artwork }: ArtworkViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const images = artwork.images || [artwork.image];

  return (
    <>
      <motion.div
        className="relative w-full aspect-square lg:aspect-auto lg:min-h-[80vh] rounded-2xl overflow-hidden bg-background-surface border border-foreground-tertiary/10 cursor-zoom-in group"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={() => setIsFullscreen(true)}
      >
        {/* Image with smooth entrance */}
        <AnimatePresence mode="wait">
          <motion.div
            key={artwork.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: imageLoaded ? 1 : 0,
              scale: imageLoaded ? 1 : 1.05,
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={transitions.fluid}
          >
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 70vw"
              priority
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Loading overlay */}
        {!imageLoaded && (
          <motion.div
            className="absolute inset-0 bg-background-surface flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: imageLoaded ? 0 : 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-16 h-16 border-4 border-foreground-tertiary/20 border-t-accent-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-black/0 flex items-center justify-center pointer-events-none"
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          transition={transitions.fluid}
        >
          <motion.span
            className="text-foreground-primary opacity-0 group-hover:opacity-100 text-sm uppercase tracking-wider bg-background-elevated/90 backdrop-blur-sm px-4 py-2 rounded-full transition-opacity"
          >
            Click to view fullscreen
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Fullscreen Modal */}
      <Modal isOpen={isFullscreen} onClose={() => setIsFullscreen(false)}>
        <div className="relative max-w-7xl max-h-[90vh] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={transitions.fluid}
          >
            <Image
              src={artwork.image}
              alt={artwork.title}
              width={1920}
              height={1080}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              priority
            />
          </motion.div>
          <motion.button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-background-elevated/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground-primary hover:bg-background-elevated transition-colors text-2xl"
            aria-label="Close fullscreen"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={springConfig.medium}
          >
            ×
          </motion.button>
        </div>
      </Modal>
    </>
  );
}
