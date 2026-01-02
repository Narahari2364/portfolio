"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </motion.p>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {Object.entries(SOCIAL_LINKS).map(([platform, url], index) => (
              <motion.a
                key={platform}
                href={url}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors capitalize"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
              >
                {platform}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

