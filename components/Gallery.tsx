"use client";

import { motion } from "framer-motion";
import ArtworkCard from "./ArtworkCard";

// Sample artwork data - replace with your actual artwork
const artworks = [
  {
    id: 1,
    title: "Digital Landscape",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop",
    description: "A surreal exploration of digital nature",
  },
  {
    id: 2,
    title: "Abstract Composition",
    category: "Abstract",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop",
    description: "Fluid forms and vibrant colors",
  },
  {
    id: 3,
    title: "Minimalist Study",
    category: "Minimalism",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=800&fit=crop",
    description: "Less is more",
  },
  {
    id: 4,
    title: "Color Harmony",
    category: "Color Study",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=800&fit=crop",
    description: "Exploring color relationships",
  },
  {
    id: 5,
    title: "Geometric Patterns",
    category: "Geometric",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=800&fit=crop",
    description: "Precision and rhythm",
  },
  {
    id: 6,
    title: "Organic Forms",
    category: "Organic",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop",
    description: "Nature-inspired digital art",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Gallery() {
  return (
    <section id="work" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
            Selected Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            A collection of recent projects and creative explorations
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

