# Slime / Fluid Design System

A comprehensive design system inspired by organic, fluid motion and slime-like interactions. This system emphasizes soft, elastic, liquid-like animations with premium easing and alive-feeling hover interactions.

---

## 🎨 Color Palette

### Base Colors (Neutral Foundation)
```
Background:
- Base: #FAFAFA (warm white)
- Surface: #F5F5F5 (subtle elevation)
- Elevated: #FFFFFF (pure white)

Foreground:
- Primary: #0A0A0A (deep black)
- Secondary: #404040 (soft gray)
- Tertiary: #8A8A8A (muted gray)

Dark Mode:
- Background Base: #0A0A0A
- Background Surface: #141414
- Background Elevated: #1F1F1F
- Foreground Primary: #FAFAFA
- Foreground Secondary: #B8B8B8
- Foreground Tertiary: #6A6A6A
```

### Accent Colors (Organic, Fluid)
```
Primary Accent: #7C3AED (Deep Purple)
- Creates depth and warmth
- Evokes organic, fluid qualities

Secondary Accent: #EC4899 (Vibrant Pink)
- Adds energy and movement
- Complements purple beautifully

Tertiary Accent: #06B6D4 (Cyan)
- Cool contrast
- Suggests fluidity and flow

Supporting:
- Success: #10B981 (Emerald)
- Warning: #F59E0B (Amber)
- Error: #EF4444 (Red)
```

### Color Usage Philosophy
- **Neutrals**: Provide calm, minimal foundation
- **Accents**: Used sparingly for emphasis and motion
- **Gradients**: Blend accents for fluid transitions
- **Opacity**: Use transparency for depth and layering

---

## ✍️ Typography Pairing

### Headline Font: **Inter** (Variable Weight)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium)
- **Usage**: Headings, hero text, emphasis
- **Characteristics**: Clean, modern, highly legible
- **Scale**:
  - H1: 4rem - 6rem (64px - 96px) / Light (300)
  - H2: 3rem - 4rem (48px - 64px) / Light (300)
  - H3: 2rem - 2.5rem (32px - 40px) / Regular (400)
  - H4: 1.5rem - 2rem (24px - 32px) / Regular (400)

### Body Font: **Inter** (Same Family, Different Weight)
- **Weight**: 400 (Regular), 300 (Light for large text)
- **Usage**: Body text, descriptions, metadata
- **Characteristics**: Excellent readability at all sizes
- **Scale**:
  - Large: 1.25rem (20px) / Light (300)
  - Base: 1rem (16px) / Regular (400)
  - Small: 0.875rem (14px) / Regular (400)
  - Tiny: 0.75rem (12px) / Regular (400)

### Typography Philosophy
- **Generous Line Height**: 1.6 - 1.8 for body, 1.2 - 1.3 for headlines
- **Letter Spacing**: Tight for headlines (-0.02em), normal for body
- **Tracking**: Wide for uppercase text (0.05em - 0.1em)

---

## 📏 Spacing System

### Base Unit: 4px
All spacing values are multiples of 4px for consistency.

### Scale
```
0.5: 2px   (0.5 × 4)
1:   4px   (1 × 4)
2:   8px   (2 × 4)
3:   12px  (3 × 4)
4:   16px  (4 × 4)
6:   24px  (6 × 4)
8:   32px  (8 × 4)
12:  48px  (12 × 4)
16:  64px  (16 × 4)
20:  80px  (20 × 4)
24:  96px  (24 × 4)
32:  128px (32 × 4)
40:  160px (40 × 4)
48:  192px (48 × 4)
```

### Usage Guidelines
- **Tight**: 4px - 8px (icons, small elements)
- **Comfortable**: 12px - 16px (buttons, cards)
- **Generous**: 24px - 32px (sections, large components)
- **Spacious**: 48px+ (major sections, page breaks)

---

## 🔄 Border Radius Philosophy

### Organic, Fluid Shapes
The border radius system creates soft, organic forms that feel alive and fluid.

### Scale
```
none:    0px      (sharp, intentional)
sm:      4px      (subtle softness)
base:    8px      (standard soft)
md:      12px     (comfortable round)
lg:      16px     (noticeably organic)
xl:      24px     (very soft, pill-like)
2xl:     32px     (highly organic)
full:    9999px   (perfect circle/pill)
```

### Fluid Blob Shapes
For truly organic, slime-like shapes, use dynamic border-radius:
```css
border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
```
This creates irregular, organic blob shapes that can animate.

### Usage
- **Cards**: `lg` (16px) or `xl` (24px)
- **Buttons**: `full` (pill shape)
- **Images**: `lg` or `xl` for organic feel
- **Containers**: `md` to `xl` depending on size
- **Blobs**: Dynamic, animated border-radius

---

## 📐 Grid System

### Base Grid: 12 Columns
- **Gutters**: 24px (mobile), 32px (tablet), 48px (desktop)
- **Max Width**: 1280px (7xl)
- **Breakpoints**:
  - Mobile: < 640px (1 column)
  - Tablet: 640px - 1024px (2-3 columns)
  - Desktop: 1024px+ (3-4 columns)

### Container System
```
Container: max-w-7xl (1280px)
Padding: 
  - Mobile: 24px (px-6)
  - Tablet: 32px (px-8)
  - Desktop: 48px (px-12)
```

### Grid Philosophy
- **Asymmetric layouts** for organic feel
- **Variable column widths** (not always equal)
- **Overlapping elements** for depth
- **Fluid, responsive** - adapts naturally

---

## 🎬 Animation Style

### Core Principles
1. **Soft & Elastic**: Spring physics, not linear
2. **Liquid-like**: Smooth, flowing transitions
3. **Premium Easing**: Custom cubic-bezier curves
4. **Alive Interactions**: Hover states that feel responsive
5. **Subtle Distortion**: Morphing, warping effects

### Easing Functions

#### Primary Easing (Liquid, Premium)
```css
/* Custom cubic-bezier for fluid motion */
ease-fluid: cubic-bezier(0.16, 1, 0.3, 1)
/* Slow start, smooth acceleration, gentle stop */
```

#### Secondary Easing (Elastic, Bouncy)
```css
ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55)
/* Subtle bounce, organic feel */
```

#### Tertiary Easing (Smooth, Fast)
```css
ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)
/* Standard smooth transition */
```

### Animation Durations
```
Fast:    200ms   (micro-interactions)
Normal:  400ms   (standard transitions)
Slow:    600ms   (major state changes)
Slower:  800ms   (page transitions, hero animations)
Slowest: 1200ms  (ambient, background animations)
```

### Hover Interactions

#### Scale Transform
```css
hover: scale(1.05)  /* Subtle growth */
active: scale(0.98) /* Gentle press */
```

#### Lift Effect
```css
hover: translateY(-4px) /* Floating feel */
transition: transform 400ms ease-fluid
```

#### Glow Effect
```css
hover: box-shadow with blur and spread
/* Creates organic, glowing interaction */
```

### Morphing & Distortion

#### Border Radius Animation
```css
/* Animate between organic blob shapes */
@keyframes fluid-blob {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}
```

#### Skew Transform (Subtle)
```css
hover: skew(-2deg, 0deg) /* Slight organic tilt */
```

#### Perspective & 3D
```css
transform: perspective(1000px) rotateY(5deg)
/* Adds depth and dimension */
```

---

## 🛠️ Implementation

### Tailwind CSS Configuration

#### Custom Colors
```javascript
colors: {
  background: {
    base: '#FAFAFA',
    surface: '#F5F5F5',
    elevated: '#FFFFFF',
  },
  foreground: {
    primary: '#0A0A0A',
    secondary: '#404040',
    tertiary: '#8A8A8A',
  },
  accent: {
    primary: '#7C3AED',
    secondary: '#EC4899',
    tertiary: '#06B6D4',
  },
}
```

#### Custom Spacing
```javascript
spacing: {
  // Extend default 4px base
  '18': '72px',
  '22': '88px',
  '26': '104px',
  // ... custom values
}
```

#### Custom Border Radius
```javascript
borderRadius: {
  // Extend defaults
  'fluid': '60% 40% 30% 70% / 60% 30% 70% 40%',
  'blob': '40% 60% 30% 70% / 50% 40% 60% 30%',
}
```

#### Custom Animations
```javascript
keyframes: {
  'fluid': {
    '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
  },
  'float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
  },
  'morph': {
    '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
    '50%': { transform: 'scale(1.05) rotate(2deg)' },
  },
}
```

### CSS Variables

#### Color Variables
```css
:root {
  /* Base Colors */
  --color-bg-base: #FAFAFA;
  --color-bg-surface: #F5F5F5;
  --color-bg-elevated: #FFFFFF;
  --color-fg-primary: #0A0A0A;
  --color-fg-secondary: #404040;
  --color-fg-tertiary: #8A8A8A;
  
  /* Accent Colors */
  --color-accent-primary: #7C3AED;
  --color-accent-secondary: #EC4899;
  --color-accent-tertiary: #06B6D4;
  
  /* Dark Mode */
  --color-bg-base-dark: #0A0A0A;
  --color-bg-surface-dark: #141414;
  --color-bg-elevated-dark: #1F1F1F;
  --color-fg-primary-dark: #FAFAFA;
  --color-fg-secondary-dark: #B8B8B8;
  --color-fg-tertiary-dark: #6A6A6A;
}
```

#### Easing Variables
```css
:root {
  --ease-fluid: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### Animation Variables
```css
:root {
  --duration-fast: 200ms;
  --duration-normal: 400ms;
  --duration-slow: 600ms;
  --duration-slower: 800ms;
  --duration-slowest: 1200ms;
}
```

### Framer Motion Configuration

#### Spring Physics (Elastic, Liquid)
```javascript
const springConfig = {
  type: "spring",
  stiffness: 300,      // Lower = softer
  damping: 30,         // Higher = less bouncy
  mass: 0.8,           // Lower = lighter feel
}
```

#### Custom Transitions
```javascript
const fluidTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1], // cubic-bezier
}

const elasticTransition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
}
```

#### Hover Variants
```javascript
const hoverVariants = {
  hover: {
    scale: 1.05,
    y: -4,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
  tap: {
    scale: 0.98,
  },
}
```

#### Morphing Variants
```javascript
const morphVariants = {
  animate: {
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
}
```

---

## 🎯 Usage Examples

### Button with Fluid Hover
```tsx
<motion.button
  className="px-8 py-4 bg-accent-primary rounded-full"
  whileHover={{ 
    scale: 1.05, 
    y: -4,
    boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)"
  }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  Click Me
</motion.button>
```

### Card with Organic Shape
```tsx
<motion.div
  className="p-8 rounded-xl bg-surface"
  whileHover={{ 
    y: -8,
    rotateY: 5,
    boxShadow: "0 24px 48px rgba(0, 0, 0, 0.1)"
  }}
  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
>
  Content
</motion.div>
```

### Morphing Blob Background
```tsx
<motion.div
  className="w-96 h-96 bg-gradient-to-br from-accent-primary to-accent-secondary"
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

---

## 📚 Design Tokens Summary

### Quick Reference
- **Base Unit**: 4px
- **Primary Font**: Inter (Variable)
- **Primary Accent**: #7C3AED (Purple)
- **Primary Easing**: cubic-bezier(0.16, 1, 0.3, 1)
- **Standard Duration**: 400ms
- **Border Radius**: 16px - 24px for organic feel
- **Hover Scale**: 1.05
- **Hover Lift**: -4px

This design system creates a cohesive, organic, fluid experience that feels alive and premium.

