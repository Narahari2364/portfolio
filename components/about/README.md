# About Page Implementation

## Overview

The About page provides a personal, elegant introduction to the artist with a minimal, typography-focused layout. The design emphasizes readability and personal connection over corporate presentation.

## Components

### 1. AboutHero (`AboutHero.tsx`)

**Features:**
- Centered page title
- Subtle underline animation
- Smooth entrance animation

**Animations:**
- Fade in with upward motion
- Underline scales from center
- Sequential reveal

### 2. ArtistPhoto (`ArtistPhoto.tsx`)

**Features:**
- Optional artist photo
- Rounded corners with border
- Subtle gradient overlay
- Responsive sizing

**Layout:**
- Sticky on desktop (stays visible while scrolling)
- Centered on mobile
- Aspect square ratio
- Maximum width constraint

**Animations:**
- Fade in with scale
- Viewport-triggered
- Smooth entrance

### 3. ArtistBio (`ArtistBio.tsx`)

**Features:**
- Multi-paragraph biography
- Staggered text reveals
- Generous line height
- Light font weight

**Animations:**
- Staggered children (0.15s delay)
- Fade and slide up
- Viewport-triggered
- Calm, organic transitions

### 4. ArtistStatement (`ArtistStatement.tsx`)

**Features:**
- Separated section with border
- Italic styling for emphasis
- Personal, reflective tone
- Maximum width for readability

**Animations:**
- Delayed entrance (0.3s)
- Sequential title and text
- Smooth fade and slide

### 5. AboutContent (`AboutContent.tsx`)

**Features:**
- Orchestrates all content sections
- Responsive grid layout
- Optional photo display
- Customizable content

**Layout:**
- Desktop: Photo left, bio right (1:1.2 ratio)
- Mobile: Stacked layout
- Maximum width: 5xl (1024px)

## Animation Details

### Text Reveals
```tsx
variants={{
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}}
```

### Staggered Children
```tsx
staggerChildren: 0.15
delayChildren: 0.2
```

### Soft Scrolling Motion
- Viewport-based triggers
- Margin: "-100px" for early trigger
- Once: true (animates once)
- Smooth easing curves

### Calm, Organic Transitions
- Fluid easing: `[0.16, 1, 0.3, 1]`
- Longer durations (0.6-0.8s)
- Gentle movements
- No harsh bounces

## Design Philosophy

### Typography-Focused
- Large, readable text (20px base)
- Generous line height (1.7-1.8)
- Light font weight (300)
- Ample whitespace

### Minimal Layout
- Clean, uncluttered design
- Focus on content
- Subtle borders and dividers
- Neutral color palette

### Personal, Not Corporate
- Warm, approachable tone
- Italic statement for emphasis
- Personal pronouns
- Reflective, artistic language

## Responsive Design

### Mobile (< 1024px)
- Stacked layout
- Full-width photo
- Centered content
- Reduced spacing

### Desktop (1024px+)
- Side-by-side layout
- Sticky photo
- Optimal reading width
- Generous spacing

## Customization

### Content
Edit `AboutContent.tsx`:
```tsx
const artistBio = [
  "Your first paragraph...",
  "Your second paragraph...",
];

const artistStatement = "Your artist statement...";
```

### Photo
```tsx
<AboutContent
  showPhoto={true}
  photoSrc="/path/to/photo.jpg"
  photoAlt="Your name"
/>
```

### Hide Photo
```tsx
<AboutContent showPhoto={false} />
```

## Design System Integration

### Colors
- `text-foreground-primary` - Headlines
- `text-foreground-secondary` - Body text
- `border-foreground-tertiary/10` - Dividers
- `bg-background-surface` - Photo background

### Typography
- `text-fluid-6xl` - Page title (96px)
- `text-fluid-2xl` - Section headings (32px)
- `text-fluid-lg` - Body text (20px)
- `font-light` - Light weight (300)
- `italic` - Statement emphasis

### Spacing
- Section padding: `pt-24 sm:pt-32`
- Content spacing: `space-y-6`, `space-y-8`
- Grid gap: `gap-12 lg:gap-16`
- Border spacing: `pt-12`

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- High contrast text
- Readable font sizes
- Reduced motion support

## File Structure

```
components/about/
├── AboutHero.tsx          # Page header
├── ArtistPhoto.tsx        # Optional photo
├── ArtistBio.tsx          # Biography text
├── ArtistStatement.tsx    # Artist statement
└── AboutContent.tsx       # Main content wrapper
```

## Key Features

✅ Typography-focused layout
✅ Optional artist photo
✅ Staggered text reveals
✅ Soft scrolling motion
✅ Calm, organic transitions
✅ Personal, elegant design
✅ Responsive layout
✅ Minimal, uncluttered

The About page provides a warm, personal introduction to the artist!

