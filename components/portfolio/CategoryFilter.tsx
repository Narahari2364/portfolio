"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";
import { springConfig, transitions } from "@/lib/motion";

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setActiveCategory(searchParams.get("category") || "all");
  }, [searchParams]);

  const handleCategoryChange = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    const params = new URLSearchParams();
    if (categorySlug !== "all") {
      params.set("category", categorySlug);
    }
    router.push(`/portfolio?${params.toString()}`, { scroll: false });
  };

  if (!isMounted) {
    return (
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map((category) => (
          <div
            key={category.id}
            className="px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider"
          >
            {category.name} ({category.count})
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-wrap gap-4 justify-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitions.fluid}
    >
      {categories.map((category, index) => {
        const isActive = activeCategory === category.slug;
        
        return (
          <motion.button
            key={category.id}
            onClick={() => handleCategoryChange(category.slug)}
            className="relative px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: springConfig.medium,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background with slime-style morphing */}
            <motion.div
              className={`absolute inset-0 rounded-full ${
                isActive
                  ? "bg-accent-primary"
                  : "bg-background-surface border-2 border-foreground-tertiary/20"
              }`}
              animate={{
                scale: isActive ? 1 : 1,
              }}
              transition={springConfig.soft}
            />

            {/* Slime-style ripple effect on click */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-accent-secondary/30 rounded-full"
                  initial={{ scale: 0, opacity: 0.8 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </AnimatePresence>

            {/* Text */}
            <span
              className={`relative z-10 ${
                isActive
                  ? "text-white"
                  : "text-foreground-primary hover:text-accent-primary"
              }`}
            >
              {category.name}
              <span className="opacity-60 ml-1">({category.count})</span>
            </span>

            {/* Active indicator glow */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full bg-accent-primary blur-xl opacity-50 -z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.5 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
