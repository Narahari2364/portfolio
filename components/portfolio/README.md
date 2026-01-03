# Portfolio (Gallery) Page Implementation

## Overview

The Portfolio page features a responsive grid layout optimized for showcasing artwork with smooth hover animations, slime-style fluid distortion effects, and category filtering.

## Components

### 1. PortfolioHeader (`PortfolioHeader.tsx`)

**Features:**
- Centered header with title and description
- Smooth entrance animations
- Fluid typography using design system scale

**Animations:**
- Fade in with upward motion
- Staggered text elements

### 2. CategoryFilter (`CategoryFilter.tsx`)

**Features:**
- Filter buttons for each category
- Active state with accent color
- Slime-style ripple effect on selection
- Glow effect on active button
- Smooth transitions between states

**Animations:**
- Scale and lift on hover (1.05x, -2px)
- Ripple effect on click
- Pulsing glow on active state
- Spring physics for elastic feel

**Key Features:**
- URL-based filtering (preserves state on refresh)
- Client-side routing without page reload
- Responsive button layout

### 3. PortfolioGrid (`PortfolioGrid.tsx`)

**Features:**
- Responsive grid layout (1/2/3 columns)
- AnimatePresence for smooth category transitions
- Staggered card animations
- Click-through to artwork detail pages

**Layout:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Gap: 6-12px responsive

**Animations:**
- Staggered entrance (0.08s between items)
- Exit animations when filtering
- Smooth transitions

### 4. ArtworkCard (`components/artwork/ArtworkCard.tsx`)

**Features:**
- Image with fluid scaling on hover
- Slime-style distortion overlay
- 3D tilt effect (rotateY, rotateX)
- Gradient overlay on hover
- Content reveal animation
- Glow effects

**Hover Effects:**
1. **Lift**: Card lifts up 12px
2. **3D Tilt**: rotateY: 2°, rotateX: -1°
3. **Image Scale**: Image scales to 1.15x
4. **Image Rotate**: Subtle 1° rotation
5. **Distortion Overlay**: Color gradient with mix-blend-mode
6. **Glow Shadow**: Purple glow shadow
7. **Border Glow**: Accent border appears

**Content:**
- Category label (animated from left)
- Title (animated from left)
- Medium & Year (minimal, animated from left)

**Performance:**
- Next.js Image optimization
- Lazy loading
- Blur placeholder
- Proper sizing for responsive images

## Animation Details

### Card Entrance
```tsx
initial={{ opacity: 0, y: 40, scale: 0.95 }}
whileInView={{ opacity: 1, y: 0, scale: 1 }}
transition={{ delay: index * 0.1, duration: 0.6 }}
```

### Hover Effects
```tsx
whileHover={{
  y: -12,        // Lift
  rotateY: 2,    // 3D tilt
  rotateX: -1,   // Perspective
}}
```

### Image Scaling
```tsx
animate={{
  scale: isHovered ? 1.15 : 1,
  rotate: isHovered ? 1 : 0,
}}
```

### Slime Distortion
```tsx
// Gradient overlay with mix-blend-mode
mixBlendMode: "overlay"
scale: isHovered ? 1.1 : 1
```

## Responsive Design

### Breakpoints
- **Mobile** (< 640px): 1 column, smaller gaps
- **Tablet** (640px - 1024px): 2 columns, medium gaps
- **Desktop** (1024px+): 3 columns, larger gaps

### Spacing
- Mobile: `gap-6` (24px)
- Tablet: `gap-8` (32px)
- Desktop: `gap-12` (48px)

## Performance Optimizations

### Image Optimization
- Next.js Image component
- Lazy loading
- Blur placeholder
- Responsive sizes:
  - Mobile: 100vw
  - Tablet: 50vw
  - Desktop: 33vw

### Animation Performance
- GPU-accelerated transforms
- `will-change` on hover
- Viewport-based triggers
- Reduced motion support

### Code Splitting
- Suspense boundaries
- Client components only where needed
- Lazy loading images

## Category Filtering

### Implementation
- URL-based state (`?category=digital-art`)
- Client-side routing
- AnimatePresence for smooth transitions
- Preserves filter on page refresh

### Categories
- All (default)
- Digital Art
- Abstract
- Minimalism
- Color Study
- Geometric
- Organic

## Design System Integration

### Colors
- `bg-background-surface` - Card background
- `border-foreground-tertiary/10` - Subtle borders
- `bg-accent-primary` - Active filter
- `text-foreground-primary` - Text
- `text-foreground-secondary` - Secondary text

### Typography
- `text-fluid-4xl` - Header
- `text-fluid-lg` - Description
- `text-2xl` - Card titles
- `text-sm` - Metadata

### Spacing
- Section padding: `py-24 sm:py-32 lg:py-40`
- Grid gaps: `gap-6 sm:gap-8 lg:gap-12`
- Card padding: `p-6 sm:p-8`

## Accessibility

- Semantic HTML
- Keyboard navigation
- Focus states
- ARIA labels
- Reduced motion support
- Alt text for images

## Customization

### Change Grid Columns
Edit `PortfolioGrid.tsx`:
```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
// Change numbers for different layouts
```

### Adjust Hover Effects
Edit `ArtworkCard.tsx`:
```tsx
whileHover={{
  y: -12,      // Adjust lift
  rotateY: 2,  // Adjust tilt
}}
```

### Modify Animation Speed
Edit stagger timing:
```tsx
staggerChildren: 0.08  // Faster: lower number
```

## File Structure

```
app/portfolio/
└── page.tsx

components/
├── portfolio/
│   ├── PortfolioHeader.tsx
│   ├── CategoryFilter.tsx
│   └── PortfolioGrid.tsx
└── artwork/
    └── ArtworkCard.tsx
```

## Usage

The portfolio page is accessible at `/portfolio`:

```tsx
// Automatic routing
/portfolio              // All artwork
/portfolio?category=digital-art  // Filtered
```

## Key Features

✅ Responsive grid layout
✅ Smooth hover animations
✅ Slime-style distortion effects
✅ Category filtering
✅ Click-through to detail pages
✅ Performance optimized
✅ Elegant motion design
✅ Minimal metadata display

