# Fluid Design System - Quick Reference

## 🎨 Color Palette

### Base Colors
- `bg-background-base` / `text-foreground-primary`
- `bg-background-surface` / `text-foreground-secondary`
- `bg-background-elevated` / `text-foreground-tertiary`

### Accent Colors
- `bg-accent-primary` (#7C3AED - Purple)
- `bg-accent-secondary` (#EC4899 - Pink)
- `bg-accent-tertiary` (#06B6D4 - Cyan)

## ✍️ Typography

### Headlines
- `text-fluid-6xl` - Hero (96px)
- `text-fluid-5xl` - Large (64px)
- `text-fluid-4xl` - Section (48px)
- `text-fluid-3xl` - Subsection (40px)

### Body
- `text-fluid-lg` - Large (20px)
- `text-fluid-base` - Base (16px)
- `text-fluid-sm` - Small (14px)

### Weights
- `font-light` (300)
- `font-normal` (400)
- `font-medium` (500)

## 📏 Spacing (4px base)

- `p-4` = 16px
- `p-8` = 32px
- `mb-12` = 48px
- `gap-6` = 24px

## 🔄 Border Radius

- `rounded-lg` = 16px
- `rounded-xl` = 24px
- `rounded-2xl` = 32px
- `rounded-full` = Pill
- `rounded-fluid` = Morphing blob

## 🎬 Animations

### Tailwind Classes
- `animate-fluid` - Morphing blob
- `animate-float` - Floating motion
- `animate-morph` - Morphing transform

### Framer Motion
```tsx
import { springConfig, hoverVariants } from "@/lib/motion";

<motion.div
  whileHover={hoverVariants.standard}
  transition={springConfig.medium}
>
```

## 🧩 Components

- `FluidButton` - Organic button
- `FluidCard` - Hoverable card
- `FluidBlob` - Morphing blob

## ⚡ Easing

- `ease-fluid` - Premium liquid
- `ease-elastic` - Bouncy
- `ease-smooth` - Standard

## 📐 Grid

```tsx
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

## 💡 Common Patterns

### Hover Lift
```tsx
whileHover={{ y: -8, transition: springConfig.soft }}
```

### Scale + Glow
```tsx
whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)" }}
```

### 3D Tilt
```tsx
whileHover={{ rotateY: 5, rotateX: -2, y: -8 }}
```

---

**Full Documentation**: See `DESIGN_SYSTEM.md` and `IMPLEMENTATION_GUIDE.md`

