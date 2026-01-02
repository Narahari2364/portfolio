# Home Page Implementation

## Overview

The Home page features a full-screen hero section with fluid animations, featured artwork preview, and slime-style hover effects throughout. The design is minimal and art-forward, putting the artwork front and center.

## Components

### 1. Hero Component (`Hero.tsx`)

**Features:**
- Full-screen hero section (min-h-screen)
- Animated background blobs that follow mouse movement
- Text reveal animations with clip-path
- Staggered entrance animations
- Fluid scroll indicator
- CTA buttons with slime-style hover effects

**Animations:**
- **Page Load**: Container fades in with staggered children
- **Text Reveal**: Uses clip-path for smooth reveal effect
- **Mouse Tracking**: Background blobs follow cursor with spring physics
- **Scroll Indicator**: Animated with color transitions

**Key Animation Techniques:**
```tsx
// Text reveal with clip-path
clipPath: "inset(100% 0 0 0)" → "inset(0% 0 0 0)"

// Staggered children
staggerChildren: 0.15
delayChildren: 0.3

// Spring physics for mouse tracking
type: "spring"
stiffness: 50
damping: 20
```

### 2. FeaturedArtwork Component (`FeaturedArtwork.tsx`)

**Features:**
- Displays 3 featured artworks
- Scroll-triggered animations
- Fluid image scaling on hover
- 3D tilt effect on cards
- Gradient overlay on hover
- Glow effects

**Animations:**
- **Scroll Trigger**: Items animate in on scroll
- **Hover Scale**: Images scale to 1.1x with fluid easing
- **3D Tilt**: Cards tilt with rotateY and rotateX
- **Glow Effect**: Box shadow animates on hover
- **Content Reveal**: Overlay content fades in on hover

**Key Animation Techniques:**
```tsx
// 3D tilt on hover
whileHover={{
  y: -12,
  rotateY: 3,
  rotateX: -2,
}}

// Fluid image scaling
whileHover={{
  scale: 1.1,
  transition: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  },
}}
```

### 3. PageTransition Component (`PageTransition.tsx`)

**Features:**
- Smooth page load animation
- Fade in/out transitions
- Fluid easing

## Navigation Hover Effects

The navigation features slime-style hover effects:

1. **Scale & Lift**: Links scale to 1.1x and lift up 2px
2. **Underline Animation**: Morphing underline expands from left
3. **Glow Effect**: Blurred shadow creates organic glow
4. **Spring Physics**: All animations use spring physics for elastic feel

```tsx
// Slime-style underline
<motion.span
  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-primary"
  initial={{ scaleX: 0 }}
  whileHover={{ scaleX: 1 }}
  style={{ transformOrigin: "left" }}
/>
```

## Animation Timing

### Entrance Animations
- **Hero Container**: 0.3s delay, then stagger
- **Text Elements**: 0.15s stagger between items
- **Scroll Indicator**: 2s delay after page load

### Hover Animations
- **Buttons**: 400ms spring (medium stiffness)
- **Cards**: 600ms fluid easing
- **Images**: 600ms fluid easing
- **Navigation**: 400ms spring

### Scroll Animations
- **Featured Section**: Triggers at -100px viewport margin
- **Stagger**: 0.2s between items

## Design Tokens Used

### Colors
- `bg-background-base` - Base background
- `bg-background-surface` - Card backgrounds
- `text-foreground-primary` - Primary text
- `text-foreground-secondary` - Secondary text
- `bg-accent-primary` - Accent color (purple)
- `border-foreground-tertiary/10` - Subtle borders

### Typography
- `text-fluid-6xl` - Hero headline (96px)
- `text-fluid-lg` - Subtitle (20px)
- `font-light` - Light weight (300)

### Spacing
- `py-24 sm:py-32 lg:py-40` - Section padding
- `gap-8 lg:gap-12` - Grid gaps
- `mb-20` - Section margins

### Border Radius
- `rounded-2xl` - Card corners (32px)
- `rounded-full` - Buttons and scroll indicator

## Performance Considerations

1. **Lazy Loading**: Images use Next.js lazy loading
2. **Viewport Triggers**: Animations only trigger when in view
3. **Transform Properties**: Uses transform for GPU acceleration
4. **Will-change**: Applied to animated elements
5. **Reduced Motion**: Respects `prefers-reduced-motion`

## Responsive Behavior

### Mobile (< 640px)
- Single column layout
- Stacked buttons
- Smaller typography
- Reduced padding

### Tablet (640px - 1024px)
- 2-3 column grid
- Medium typography
- Adjusted spacing

### Desktop (1024px+)
- 3 column grid
- Full typography scale
- Maximum spacing
- Enhanced hover effects

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all links
- Reduced motion support

## Customization

### Change Featured Count
```tsx
const featuredArtworks = getFeaturedArtworks().slice(0, 3);
// Change 3 to desired number
```

### Adjust Animation Speed
```tsx
// In Hero.tsx
staggerChildren: 0.15  // Increase for slower, decrease for faster
```

### Modify Hover Effects
```tsx
// In FeaturedArtwork.tsx
whileHover={{
  y: -12,  // Adjust lift amount
  rotateY: 3,  // Adjust tilt
  scale: 1.1,  // Adjust image scale
}}
```

## File Structure

```
components/home/
├── Hero.tsx              # Full-screen hero section
├── FeaturedArtwork.tsx   # Featured artwork preview
└── PageTransition.tsx     # Page transition wrapper
```

## Usage

```tsx
// In app/page.tsx
import Hero from "@/components/home/Hero";
import FeaturedArtwork from "@/components/home/FeaturedArtwork";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedArtwork />
    </>
  );
}
```

