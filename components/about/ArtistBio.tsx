"use client";

import { motion } from "framer-motion";
import { transitions } from "@/lib/motion";

interface ArtistBioProps {
  bio: string[];
}

export default function ArtistBio({ bio }: ArtistBioProps) {
  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {bio.map((paragraph, index) => (
        <motion.p
          key={index}
          className="text-fluid-lg leading-relaxed text-foreground-secondary font-light"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: transitions.fluid,
            },
          }}
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  );
}

