"use client";

import { motion } from "framer-motion";
import ArtistPhoto from "./ArtistPhoto";
import ArtistBio from "./ArtistBio";
import ArtistStatement from "./ArtistStatement";
import { transitions } from "@/lib/motion";

// Sample content - replace with your actual content
const artistBio = [
  "I'm a digital artist and designer exploring the intersection of technology and creativity. My work focuses on creating immersive visual experiences that blend organic forms with digital precision.",
  "Through experimentation with color, form, and motion, I aim to create artwork that resonates on both an aesthetic and emotional level. Each piece is a journey of discovery, pushing the boundaries of digital expression.",
  "This portfolio represents a curated selection of my recent work, showcasing various techniques and styles that reflect my ongoing creative evolution.",
];

const artistStatement =
  "My practice is rooted in the belief that digital art can be as organic and expressive as traditional mediums. I explore the tension between algorithmic precision and human intuition, creating work that feels both calculated and spontaneous.";

interface AboutContentProps {
  showPhoto?: boolean;
  photoSrc?: string;
  photoAlt?: string;
  bio?: string[];
  statement?: string;
}

export default function AboutContent({
  showPhoto = true,
  photoSrc,
  photoAlt,
  bio = artistBio,
  statement = artistStatement,
}: AboutContentProps) {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Main content grid */}
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 mb-16">
        {/* Artist photo (optional) */}
        {showPhoto && (
          <motion.div
            className="lg:sticky lg:top-32 lg:self-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, ...transitions.fluid }}
          >
            <ArtistPhoto src={photoSrc} alt={photoAlt} />
          </motion.div>
        )}

        {/* Biography */}
        <div className={showPhoto ? "" : "lg:col-span-2 max-w-3xl mx-auto"}>
          <ArtistBio bio={bio} />
        </div>
      </div>

      {/* Artist statement */}
      <ArtistStatement statement={statement} />
    </div>
  );
}

