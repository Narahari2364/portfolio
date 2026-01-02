"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { springConfig, transitions } from "@/lib/motion";
import FluidBlob from "@/components/ui/FluidBlob";
import Button from "@/components/ui/Button";

// Text reveal animation variants
const textRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    clipPath: "inset(100% 0 0 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Container for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          transition={springConfig.smooth}
        >
          <FluidBlob size="xl" color="primary" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"
          animate={{
            x: -mousePosition.x * 0.3,
            y: -mousePosition.y * 0.3,
          }}
          transition={springConfig.smooth}
        >
          <FluidBlob size="lg" color="secondary" />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Main headline with text reveal */}
        <motion.h1
          className="text-fluid-6xl sm:text-fluid-6xl md:text-[8rem] lg:text-[10rem] font-light tracking-tight mb-8 leading-[0.9]"
          variants={textRevealVariants}
        >
          <motion.span 
            className="block"
            variants={textRevealVariants}
          >
            Art &
          </motion.span>
          <motion.span 
            className="block"
            variants={textRevealVariants}
          >
            Design
          </motion.span>
        </motion.h1>

        {/* Subtitle with fade in */}
        <motion.p
          className="text-fluid-lg sm:text-fluid-xl text-foreground-secondary font-light max-w-2xl mx-auto mb-16 leading-relaxed"
          variants={textRevealVariants}
        >
          A curated collection of digital artwork and creative explorations
        </motion.p>

        {/* CTA Buttons with slime-style hover */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={textRevealVariants}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -4,
              transition: springConfig.medium,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/portfolio">
              <Button variant="primary" size="lg">
                View Work
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -4,
              transition: springConfig.medium,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/about">
              <Button variant="outline" size="lg">
                About
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with fluid animation */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-foreground-primary/30 rounded-full flex justify-center p-2 backdrop-blur-sm bg-background-surface/50"
          animate={{ 
            y: [0, 8, 0],
            borderColor: [
              "rgba(10, 10, 10, 0.3)",
              "rgba(124, 58, 237, 0.5)",
              "rgba(10, 10, 10, 0.3)",
            ],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <motion.div
            className="w-1 h-2 bg-foreground-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

