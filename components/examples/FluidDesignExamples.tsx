"use client";

/**
 * Example component demonstrating the fluid design system
 * Use this as a reference for implementing fluid, organic UI elements
 */

import { motion } from "framer-motion";
import FluidButton from "@/components/ui/FluidButton";
import FluidCard from "@/components/ui/FluidCard";
import FluidBlob from "@/components/ui/FluidBlob";
import { hoverVariants, tapVariants, springConfig } from "@/lib/motion";

export default function FluidDesignExamples() {
  return (
    <div className="min-h-screen p-12 space-y-16 bg-background-base">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Blob */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <FluidBlob size="xl" color="primary" />
          </div>
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-fluid-6xl font-light mb-6">
              Fluid Design System
            </h1>
            <p className="text-fluid-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
              Organic, slime-inspired motion with premium easing and alive-feeling interactions
            </p>
            <div className="flex gap-4 justify-center">
              <FluidButton variant="primary">Get Started</FluidButton>
              <FluidButton variant="outline">Learn More</FluidButton>
            </div>
          </motion.div>
        </section>

        {/* Button Examples */}
        <section className="py-16">
          <h2 className="text-fluid-3xl font-light mb-12 text-center">
            Button Variants
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <FluidButton variant="primary">Primary</FluidButton>
            <FluidButton variant="secondary">Secondary</FluidButton>
            <FluidButton variant="tertiary">Tertiary</FluidButton>
            <FluidButton variant="outline">Outline</FluidButton>
            <FluidButton variant="ghost">Ghost</FluidButton>
          </div>
        </section>

        {/* Card Examples */}
        <section className="py-16">
          <h2 className="text-fluid-3xl font-light mb-12 text-center">
            Fluid Cards
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FluidCard glow="primary">
              <h3 className="text-fluid-xl font-medium mb-4">Card with Glow</h3>
              <p className="text-foreground-secondary">
                Hover to see the organic glow effect with soft shadow transitions.
              </p>
            </FluidCard>
            <FluidCard glow="secondary">
              <h3 className="text-fluid-xl font-medium mb-4">3D Tilt Effect</h3>
              <p className="text-foreground-secondary">
                Cards tilt slightly on hover, creating depth and dimension.
              </p>
            </FluidCard>
            <FluidCard glow="tertiary">
              <h3 className="text-fluid-xl font-medium mb-4">Smooth Lift</h3>
              <p className="text-foreground-secondary">
                Notice the smooth, elastic lift animation on hover.
              </p>
            </FluidCard>
          </div>
        </section>

        {/* Morphing Blob Examples */}
        <section className="py-16">
          <h2 className="text-fluid-3xl font-light mb-12 text-center">
            Morphing Blobs
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <FluidBlob size="md" color="primary" />
              <p className="mt-4 text-sm text-foreground-secondary">Primary</p>
            </div>
            <div className="text-center">
              <FluidBlob size="md" color="secondary" />
              <p className="mt-4 text-sm text-foreground-secondary">Secondary</p>
            </div>
            <div className="text-center">
              <FluidBlob size="md" color="tertiary" />
              <p className="mt-4 text-sm text-foreground-secondary">Tertiary</p>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="py-16">
          <h2 className="text-fluid-3xl font-light mb-12 text-center">
            Interactive Elements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hover with Skew */}
            <motion.div
              className="p-8 rounded-xl bg-background-surface border border-foreground-tertiary/10"
              whileHover={{
                skewX: -2,
                y: -8,
                transition: springConfig.soft,
              }}
            >
              <h3 className="text-fluid-xl font-medium mb-4">Subtle Skew</h3>
              <p className="text-foreground-secondary">
                Hover to see a subtle organic skew effect.
              </p>
            </motion.div>

            {/* Scale with Glow */}
            <motion.div
              className="p-8 rounded-xl bg-background-surface border border-foreground-tertiary/10"
              whileHover={hoverVariants.glow}
              whileTap={tapVariants.standard}
            >
              <h3 className="text-fluid-xl font-medium mb-4">Glow Effect</h3>
              <p className="text-foreground-secondary">
                Interactive element with glowing shadow on hover.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Typography Showcase */}
        <section className="py-16">
          <h2 className="text-fluid-3xl font-light mb-12 text-center">
            Typography Scale
          </h2>
          <div className="space-y-4">
            <h1 className="text-fluid-6xl font-light">Heading 1</h1>
            <h2 className="text-fluid-5xl font-light">Heading 2</h2>
            <h3 className="text-fluid-4xl font-light">Heading 3</h3>
            <h4 className="text-fluid-3xl font-light">Heading 4</h4>
            <p className="text-fluid-lg">Large body text with generous line height</p>
            <p className="text-fluid-base">Base body text for comfortable reading</p>
            <p className="text-fluid-sm">Small text for captions and metadata</p>
          </div>
        </section>
      </div>
    </div>
  );
}

