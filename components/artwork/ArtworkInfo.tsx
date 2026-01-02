"use client";

import { motion } from "framer-motion";
import { Artwork } from "@/types";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface ArtworkInfoProps {
  artwork: Artwork;
}

export default function ArtworkInfo({ artwork }: ArtworkInfoProps) {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
          {artwork.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {artwork.year} • {artwork.category}
        </p>
      </div>

      <div className="space-y-4 text-lg leading-relaxed">
        <div>
          <span className="font-medium uppercase tracking-wider text-sm">Medium</span>
          <p className="mt-1">{artwork.medium}</p>
        </div>
        <div>
          <span className="font-medium uppercase tracking-wider text-sm">Dimensions</span>
          <p className="mt-1">{artwork.dimensions}</p>
        </div>
        <div>
          <span className="font-medium uppercase tracking-wider text-sm">Description</span>
          <p className="mt-1 font-light">{artwork.description}</p>
        </div>
        {artwork.tags && artwork.tags.length > 0 && (
          <div>
            <span className="font-medium uppercase tracking-wider text-sm">Tags</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {artwork.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="pt-8 border-t border-black/10 dark:border-white/10">
        <Link href="/portfolio">
          <Button variant="outline">← Back to Portfolio</Button>
        </Link>
      </div>
    </motion.div>
  );
}

