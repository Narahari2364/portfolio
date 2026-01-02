# Fluid Design System - Implementation Guide

This guide shows you how to implement the fluid, organic design system using Tailwind CSS, Framer Motion, and CSS variables.

---

## 🎨 Using Design Tokens

### Colors

#### In Tailwind Classes
```tsx
// Background colors
<div className="bg-background-base">Base background</div>
<div className="bg-background-surface">Surface background</div>
<div className="bg-background-elevated">Elevated background</div>

// Foreground colors
<p className="text-foreground-primary">Primary text</p>
<p className="text-foreground-secondary">Secondary text</p>
<p className="text-foreground-tertiary">Tertiary text</p>

// Accent colors
<button className="bg-accent-primary">Primary accent</button>
<button className="bg-accent-secondary">Secondary accent</button>
<button className="bg-accent-tertiary">Tertiary accent</button>
```

#### In CSS Variables
```css
.my-element {
  background-color: var(--color-bg-base);
  color: var(--color-fg-primary);
  border-color: var(--color-accent-primary);
}
```

### Typography

#### Fluid Typography Scale
```tsx
<h1 className="text-fluid-6xl font-light">Hero Heading</h1>
<h2 className="text-fluid-5xl font-light">Section Heading</h2>
<h3 className="text-fluid-4xl font-light">Subsection</h3>
<p className="text-fluid-lg">Large body text</p>
<p className="text-fluid-base">Base body text</p>
<p className="text-fluid-sm">Small text</p>
```

#### Font Weights
```tsx
<p className="font-light">Light (300)</p>
<p className="font-normal">Regular (400)</p>
<p className="font-medium">Medium (500)</p>
```

### Spacing

#### Using the 4px Base Unit
```tsx
<div className="p-4">16px padding</div>
<div className="p-8">32px padding</div>
<div className="mb-12">48px margin bottom</div>
<div className="gap-6">24px gap</div>
```

### Border Radius

#### Organic Shapes
```tsx
{/* Standard rounded corners */}
<div className="rounded-lg">16px radius</div>
<div className="rounded-xl">24px radius</div>
<div className="rounded-2xl">32px radius</div>
<div className="rounded-full">Perfect circle/pill</div>

{/* Fluid blob shapes (requires animation) */}
<div className="rounded-fluid">Morphing blob</div>
```

### Shadows

#### Organic, Soft Shadows
```tsx
<div className="shadow-fluid">Standard fluid shadow</div>
<div className="shadow-fluid-lg">Large fluid shadow</div>
<div className="shadow-glow-primary">Primary glow</div>
<div className="shadow-glow-secondary">Secondary glow</div>
```

---

## 🎬 Animation Implementation

### Using Framer Motion

#### Basic Hover with Spring Physics
```tsx
import { motion } from "framer-motion";
import { springConfig } from "@/lib/motion";

<motion.div
  whileHover={{
    scale: 1.05,
    y: -4,
    transition: springConfig.medium,
  }}
  whileTap={{ scale: 0.98 }}
>
  Hover me
</motion.div>
```

#### Using Pre-configured Variants
```tsx
import { hoverVariants, tapVariants } from "@/lib/motion";

<motion.div
  whileHover={hoverVariants.standard}
  whileTap={tapVariants.standard}
>
  Interactive element
</motion.div>
```

#### Custom Transitions
```tsx
import { transitions } from "@/lib/motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={transitions.fluid}
>
  Fluid animation
</motion.div>
```

### Using Tailwind Animations

#### Pre-built Animations
```tsx
{/* Fluid blob morphing */}
<div className="animate-fluid">Morphing blob</div>

{/* Floating motion */}
<div className="animate-float">Floating element</div>

{/* Morphing transform */}
<div className="animate-morph">Morphing element</div>

{/* Soft pulse */}
<div className="animate-pulse-soft">Pulsing element</div>
```

#### Custom Animation with CSS
```css
@keyframes my-custom-animation {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.my-element {
  animation: my-custom-animation 2s ease-in-out infinite;
}
```

---

## 🧩 Component Examples

### Fluid Button
```tsx
import FluidButton from "@/components/ui/FluidButton";

<FluidButton variant="primary" size="md">
  Click Me
</FluidButton>
```

### Fluid Card
```tsx
import FluidCard from "@/components/ui/FluidCard";

<FluidCard hover glow="primary">
  <h3>Card Title</h3>
  <p>Card content with organic hover effects</p>
</FluidCard>
```

### Morphing Blob
```tsx
import FluidBlob from "@/components/ui/FluidBlob";

<FluidBlob size="lg" color="primary" animate />
```

---

## 🎯 Common Patterns

### Hover Lift Effect
```tsx
<motion.div
  className="p-8 rounded-xl bg-background-surface"
  whileHover={{
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  }}
>
  Lift on hover
</motion.div>
```

### Scale with Glow
```tsx
<motion.div
  className="p-8 rounded-xl bg-background-surface"
  whileHover={{
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)",
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }}
>
  Scale with glow
</motion.div>
```

### 3D Tilt Effect
```tsx
<motion.div
  className="p-8 rounded-xl bg-background-surface"
  whileHover={{
    rotateY: 5,
    rotateX: -2,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  }}
>
  3D tilt on hover
</motion.div>
```

### Subtle Skew
```tsx
<motion.div
  whileHover={{
    skewX: -2,
    y: -4,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  }}
>
  Organic skew
</motion.div>
```

### Morphing Border Radius
```tsx
<motion.div
  className="w-64 h-64 bg-accent-primary"
  animate={{
    borderRadius: [
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 60% 70% 40% / 50% 60% 30% 60%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
    ],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
```

### Staggered Children
```tsx
import { staggerContainer, staggerItem } from "@/lib/motion";

<motion.div
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## 🎨 Easing Functions

### Using CSS Variables
```css
.my-element {
  transition: all var(--duration-normal) var(--ease-fluid);
}
```

### Using Tailwind Classes
```tsx
<div className="transition-all duration-normal ease-fluid">
  Fluid transition
</div>
```

### Using Framer Motion
```tsx
<motion.div
  transition={{
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1], // fluid easing
  }}
>
  Fluid motion
</motion.div>
```

---

## 📐 Grid System

### Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid items */}
</div>
```

### Container
```tsx
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
  {/* Content */}
</div>
```

---

## 🌈 Gradient Usage

### Accent Gradients
```tsx
<div className="bg-gradient-to-br from-accent-primary to-accent-secondary">
  Gradient background
</div>
```

### With Opacity
```tsx
<div className="bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30">
  Subtle gradient
</div>
```

---

## 💡 Best Practices

1. **Use Spring Physics**: Prefer spring animations over linear for organic feel
2. **Consistent Timing**: Use design system durations (fast, normal, slow)
3. **Subtle Effects**: Keep animations subtle and premium
4. **Performance**: Use `transform` and `opacity` for smooth animations
5. **Accessibility**: Respect `prefers-reduced-motion`
6. **Dark Mode**: All colors automatically adapt to dark mode
7. **Spacing**: Always use the 4px base unit system
8. **Border Radius**: Use larger radius (lg, xl) for organic feel

---

## 🔧 Customization

### Adding New Colors
1. Add to `app/globals.css` CSS variables
2. Add to `tailwind.config.ts` colors object
3. Use in components

### Adding New Animations
1. Add keyframes to `tailwind.config.ts`
2. Add animation class
3. Use in components

### Custom Spring Configs
Add to `lib/motion.ts`:
```typescript
export const springConfig = {
  // ... existing configs
  custom: {
    type: "spring" as const,
    stiffness: 350,
    damping: 28,
    mass: 0.75,
  },
};
```

---

## 📚 Reference

- **Design System**: See `DESIGN_SYSTEM.md`
- **Examples**: See `components/examples/FluidDesignExamples.tsx`
- **Motion Config**: See `lib/motion.ts`
- **Tailwind Config**: See `tailwind.config.ts`

