"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function PortfolioHeader() {
  return (
    <FadeIn className="text-center mb-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
        Portfolio
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
        A collection of recent projects and creative explorations
      </p>
    </FadeIn>
  );
}

