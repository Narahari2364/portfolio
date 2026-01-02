"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedArtworks } from "@/lib/data";
import { springConfig, transitions } from "@/lib/motion";

export default function FeaturedArtwork() {
  const featuredArtworks = getFeaturedArtworks().slice(0, 3);

  // Scroll-triggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 bg-background-base">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transitions.fluid}
        >
          <h2 className="text-fluid-4xl sm:text-fluid-5xl font-light tracking-tight mb-6">
            Featured Work
          </h2>
          <p className="text-fluid-lg text-foreground-secondary font-light max-w-2xl mx-auto">
            A selection of recent projects
          </p>
        </motion.div>

        {/* Featured artwork grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              variants={itemVariants}
              className="group relative"
            >
              <Link href={`/portfolio/${artwork.slug}`}>
                <motion.div
                  className="relative aspect-square overflow-hidden rounded-2xl bg-background-surface border border-foreground-tertiary/10 cursor-pointer"
                  whileHover={{
                    y: -12,
                    rotateY: 3,
                    rotateX: -2,
                    transition: springConfig.soft,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Image with fluid scaling */}
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                  >
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                  />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={transitions.fluid}
                      className="opacity-0 group-hover:opacity-100"
                    >
                      <span className="text-xs uppercase tracking-wider mb-2 opacity-90 block">
                        {artwork.category}
                      </span>
                      <h3 className="text-2xl font-light mb-2">{artwork.title}</h3>
                      <p className="text-sm opacity-80 font-light line-clamp-2">
                        {artwork.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ boxShadow: "0 0 0 rgba(124, 58, 237, 0)" }}
                    whileHover={{
                      boxShadow: "0 20px 60px rgba(124, 58, 237, 0.4)",
                    }}
                    transition={transitions.fluid}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, ...transitions.fluid }}
        >
          <Link href="/portfolio">
            <motion.span
              className="inline-flex items-center gap-2 text-foreground-secondary hover:text-foreground-primary uppercase tracking-wider text-sm font-medium transition-colors"
              whileHover={{ 
                x: 4,
                transition: springConfig.medium,
              }}
            >
              View All Work
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ x: 4 }}
                transition={springConfig.medium}
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

