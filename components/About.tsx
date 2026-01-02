"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-12">
            About
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-light">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              I'm a digital artist and designer exploring the intersection of technology and
              creativity. My work focuses on creating immersive visual experiences that blend
              organic forms with digital precision.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Through experimentation with color, form, and motion, I aim to create artwork that
              resonates on both an aesthetic and emotional level. Each piece is a journey of
              discovery, pushing the boundaries of digital expression.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              This portfolio represents a curated selection of my recent work, showcasing various
              techniques and styles that reflect my ongoing creative evolution.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

