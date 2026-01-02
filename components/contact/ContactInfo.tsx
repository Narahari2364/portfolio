"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div>
        <h3 className="text-xl font-medium mb-4 uppercase tracking-wider">Contact</h3>
        <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
          For inquiries, collaborations, or commissions, please reach out through the form or
          connect via social media.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-4 uppercase tracking-wider">Social</h3>
        <div className="flex flex-col gap-3">
          {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors capitalize"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

