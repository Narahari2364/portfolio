"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function Biography() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <FadeIn delay={0.1}>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-light">
          I'm a digital artist and designer exploring the intersection of technology and
          creativity. My work focuses on creating immersive visual experiences that blend
          organic forms with digital precision.
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-light">
          Through experimentation with color, form, and motion, I aim to create artwork that
          resonates on both an aesthetic and emotional level. Each piece is a journey of
          discovery, pushing the boundaries of digital expression.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-light">
          This portfolio represents a curated selection of my recent work, showcasing various
          techniques and styles that reflect my ongoing creative evolution.
        </p>
      </FadeIn>
    </div>
  );
}

