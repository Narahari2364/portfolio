"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { NAV_ITEMS } from "@/lib/constants";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/10 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="text-xl font-medium tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium tracking-wide uppercase"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
            aria-expanded="false"
          >
            <span className="w-full h-0.5 bg-current transition-all" />
            <span className="w-full h-0.5 bg-current transition-all" />
            <span className="w-full h-0.5 bg-current transition-all" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

