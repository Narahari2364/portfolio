# Artwork Detail Page Implementation

## Overview

The Artwork Detail page provides an immersive, gallery-like experience for viewing individual artworks with smooth animations, comprehensive metadata, and seamless navigation.

## Components

### 1. ArtworkViewer (`ArtworkViewer.tsx`)

**Features:**
- Large artwork display (70% width on desktop)
- Smooth image entrance animation
- Fullscreen modal viewer
- Loading state with spinner
- Click to zoom functionality

**Animations:**
- **Image Entrance**: Fade in with scale (0.95 → 1.0)
- **Loading**: Rotating spinner while image loads
- **Hover**: Subtle overlay with instruction text
- **Fullscreen**: Smooth modal transition

**Layout:**
- Aspect square on mobile
- Minimum 80vh height on desktop
- Rounded corners with border
- Object-contain for proper image display

### 2. ArtworkInfo (`ArtworkInfo.tsx`)

**Features:**
- Sticky sidebar on desktop
- Staggered text animations
- Comprehensive metadata display
- Optional description/concept
- Tags with hover effects

**Content Sections:**
1. **Title & Year**: Large headline with category
2. **Medium**: Artwork medium
3. **Dimensions**: Size information
4. **Description**: Optional concept/description
5. **Tags**: Interactive tag chips
6. **Back Button**: Return to portfolio

**Animations:**
- **Staggered Entrance**: 0.1s delay between elements
- **Fade & Slide**: Text slides up while fading in
- **Tag Hover**: Scale and border color change

### 3. ArtworkNavigation (`ArtworkNavigation.tsx`)

**Features:**
- Previous/Next artwork links
- Animated navigation buttons
- Artwork titles on hover
- Rotating arrow icons
- Smooth transitions

**Animations:**
- **Button Hover**: Slide left/right with rotation
- **Icon Rotation**: 180° on hover
- **Border Glow**: Accent color on hover

**Layout:**
- Previous on left, Next on right
- Responsive (titles hidden on mobile)
- Centered when only one direction available

### 4. KeyboardNavigation (`KeyboardNavigation.tsx`)

**Features:**
- Arrow key navigation (← →)
- Escape key to return to portfolio
- Prevents navigation when typing
- Seamless page transitions

**Keyboard Shortcuts:**
- `←` (Left Arrow): Previous artwork
- `→` (Right Arrow): Next artwork
- `Esc`: Back to portfolio

## Page Layout

### Gallery-Like Structure
```
┌─────────────────────────────────────┐
│         Navigation Bar              │
├──────────────────┬──────────────────┤
│                  │                  │
│   Artwork        │   Metadata       │
│   Viewer         │   Sidebar        │
│   (Large)        │   (Sticky)       │
│                  │                  │
│                  │                  │
├──────────────────┴──────────────────┤
│   Previous ← → Next Navigation      │
└─────────────────────────────────────┘
│         Related Artworks            │
└─────────────────────────────────────┘
```

### Responsive Behavior
- **Mobile**: Stacked layout, full-width image
- **Tablet**: Stacked or side-by-side
- **Desktop**: 1.2:1 ratio (image:info), sticky sidebar

## Animation Details

### Image Entrance
```tsx
initial={{ opacity: 0, scale: 0.95, y: 20 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
```

### Text Fade/Slide
```tsx
hidden: { opacity: 0, y: 20 }
visible: {
  opacity: 1,
  y: 0,
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
}
```

### Staggered Children
```tsx
staggerChildren: 0.1
delayChildren: 0.3
```

### Fluid Transitions Between Artworks
- PageTransition wrapper fades entire page
- AnimatePresence handles image transitions
- Smooth URL-based routing
- Preserved scroll position

## Design System Integration

### Colors
- `bg-background-surface` - Card backgrounds
- `border-foreground-tertiary/10` - Subtle borders
- `text-foreground-primary` - Primary text
- `text-foreground-secondary` - Secondary text
- `text-foreground-tertiary` - Labels
- `bg-accent-primary/10` - Hover states

### Typography
- `text-fluid-4xl` - Title (48px)
- `text-fluid-5xl` - Large title (64px)
- `text-fluid-lg` - Year/category (20px)
- `text-lg` - Body text (18px)
- `text-sm` - Labels and tags (14px)

### Spacing
- Section padding: `pt-24 sm:pt-32`
- Grid gap: `gap-8 lg:gap-16`
- Content spacing: `space-y-8`, `space-y-6`

## Performance Optimizations

### Image Loading
- Priority loading for main image
- Lazy loading for related artworks
- Blur placeholder
- Proper sizing (70vw on desktop)
- Object-contain for aspect ratio

### Animation Performance
- GPU-accelerated transforms
- Viewport-based triggers
- Reduced motion support
- Efficient re-renders

## Accessibility

- Semantic HTML structure
- ARIA labels on buttons
- Keyboard navigation
- Focus states
- Alt text for images
- Reduced motion support

## Customization

### Change Layout Ratio
Edit `app/portfolio/[slug]/page.tsx`:
```tsx
className="grid lg:grid-cols-[1.2fr_1fr]"
// Change to: lg:grid-cols-[2fr_1fr] for wider image
```

### Adjust Animation Speed
Edit transition durations:
```tsx
duration: 0.8  // Change for faster/slower
staggerChildren: 0.1  // Adjust stagger timing
```

### Modify Metadata Display
Edit `ArtworkInfo.tsx` to add/remove fields:
```tsx
// Add new metadata section
<div className="space-y-1">
  <span className="...">New Field</span>
  <p>{artwork.newField}</p>
</div>
```

## File Structure

```
app/portfolio/[slug]/
└── page.tsx

components/artwork/
├── ArtworkViewer.tsx        # Large image display
├── ArtworkInfo.tsx         # Metadata sidebar
├── ArtworkNavigation.tsx   # Prev/Next navigation
└── KeyboardNavigation.tsx  # Keyboard shortcuts
```

## Key Features

✅ Large, immersive artwork display
✅ Comprehensive metadata
✅ Smooth image entrance
✅ Staggered text animations
✅ Fluid transitions between artworks
✅ Keyboard navigation
✅ Fullscreen viewer
✅ Gallery-like layout
✅ Responsive design
✅ Performance optimized

The Artwork Detail page provides a premium, gallery-like experience for viewing artwork!

