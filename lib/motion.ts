/**
 * Framer Motion configuration for fluid, organic animations
 */

// Spring physics configurations
export const springConfig = {
  // Soft, elastic spring (for buttons, cards)
  soft: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  },
  // Medium spring (for general interactions)
  medium: {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
    mass: 0.7,
  },
  // Bouncy spring (for playful elements)
  bouncy: {
    type: "spring" as const,
    stiffness: 500,
    damping: 20,
    mass: 0.6,
  },
  // Smooth spring (for subtle movements)
  smooth: {
    type: "spring" as const,
    stiffness: 200,
    damping: 25,
    mass: 1,
  },
};

// Custom easing transitions
export const transitions = {
  // Fluid, premium easing
  fluid: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  // Elastic, bouncy easing
  elastic: {
    duration: 0.5,
    ease: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
  },
  // Smooth, standard easing
  smooth: {
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
  // Fast, snappy easing
  fast: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
  // Slow, dramatic easing
  slow: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

// Hover variants
export const hoverVariants = {
  // Standard hover (scale + lift)
  standard: {
    scale: 1.05,
    y: -4,
    transition: springConfig.medium,
  },
  // Lift only
  lift: {
    y: -8,
    transition: springConfig.smooth,
  },
  // Scale only
  scale: {
    scale: 1.05,
    transition: springConfig.medium,
  },
  // Glow effect
  glow: {
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)",
    transition: springConfig.smooth,
  },
  // 3D tilt
  tilt: {
    rotateY: 5,
    rotateX: -2,
    y: -8,
    transition: springConfig.soft,
  },
};

// Tap/press variants
export const tapVariants = {
  // Standard tap
  standard: {
    scale: 0.98,
  },
  // Soft tap
  soft: {
    scale: 0.99,
  },
  // Strong tap
  strong: {
    scale: 0.95,
  },
};

// Morphing blob variants
export const morphVariants = {
  // Continuous morphing
  continuous: {
    borderRadius: [
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 60% 70% 40% / 50% 60% 30% 60%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  // Slow morph
  slow: {
    borderRadius: [
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 60% 70% 40% / 50% 60% 30% 60%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
    ],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Fade in variants
export const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.fluid,
  },
};

// Stagger container variants
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger item variants
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.fluid,
  },
};

