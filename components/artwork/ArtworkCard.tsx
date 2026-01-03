"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Artwork } from "@/types";
import { springConfig, transitions } from "@/lib/motion";

interface ArtworkCardProps {
  artwork: Artwork;
  index?: number;
}

export default function ArtworkCard({ artwork, index = 0 }: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-background-surface border border-foreground-tertiary/10 cursor-pointer"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -12,
        rotateY: 2,
        rotateX: -1,
        transition: springConfig.soft,
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image container with fluid scaling */}
      <div className="relative aspect-square overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.15 : 1,
            rotate: isHovered ? 1 : 0,
          }}
          transition={transitions.fluid}
        >
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </motion.div>

        {/* Slime-style distortion overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={transitions.fluid}
          style={{
            mixBlendMode: "overlay",
          }}
        />

        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={transitions.fluid}
        />

        {/* Content overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white z-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 30,
            opacity: isHovered ? 1 : 0,
          }}
          transition={transitions.fluid}
        >
          <motion.span
            className="text-xs uppercase tracking-wider mb-2 opacity-90 block"
            initial={{ x: -10, opacity: 0 }}
            animate={{
              x: isHovered ? 0 : -10,
              opacity: isHovered ? 0.9 : 0,
            }}
            transition={{ delay: 0.1, ...transitions.fluid }}
          >
            {artwork.category}
          </motion.span>
          <motion.h3
            className="text-2xl font-light mb-2"
            initial={{ x: -10, opacity: 0 }}
            animate={{
              x: isHovered ? 0 : -10,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ delay: 0.15, ...transitions.fluid }}
          >
            {artwork.title}
          </motion.h3>
          <motion.div
            className="text-sm opacity-80 font-light"
            initial={{ x: -10, opacity: 0 }}
            animate={{
              x: isHovered ? 0 : -10,
              opacity: isHovered ? 0.8 : 0,
            }}
            transition={{ delay: 0.2, ...transitions.fluid }}
          >
            {artwork.medium} • {artwork.year}
          </motion.div>
        </motion.div>
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ 
          boxShadow: "0 0 0 rgba(124, 58, 237, 0)",
          opacity: 0,
        }}
        animate={{
          boxShadow: isHovered
            ? "0 20px 60px rgba(124, 58, 237, 0.4)"
            : "0 0 0 rgba(124, 58, 237, 0)",
          opacity: isHovered ? 1 : 0,
        }}
        transition={transitions.fluid}
      />

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-accent-primary/0 pointer-events-none"
        animate={{
          borderColor: isHovered
            ? "rgba(124, 58, 237, 0.3)"
            : "rgba(124, 58, 237, 0)",
        }}
        transition={transitions.fluid}
      />
    </motion.div>
  );
}

