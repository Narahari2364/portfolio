"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "all"
  );

  const handleCategoryChange = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    const params = new URLSearchParams();
    if (categorySlug !== "all") {
      params.set("category", categorySlug);
    }
    router.push(`/portfolio?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          onClick={() => handleCategoryChange(category.slug)}
          className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
            activeCategory === category.slug
              ? "bg-black dark:bg-white text-white dark:text-black"
              : "bg-transparent border-2 border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.name} ({category.count})
        </motion.button>
      ))}
    </div>
  );
}

