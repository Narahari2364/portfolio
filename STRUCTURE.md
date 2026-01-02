# Art Portfolio Website - Complete Structure

## 📄 Page List & Purpose

### Core Pages

#### 1. **Home** (`/`)
- **Purpose**: First impression, hero showcase, featured artwork preview
- **Visual Emphasis**: 
  - Large, immersive hero section with featured artwork
  - Minimal navigation
  - Quick preview of latest/featured pieces
  - Smooth, fluid animations to draw attention
  - Generous whitespace to let art breathe

#### 2. **Portfolio/Gallery** (`/portfolio`)
- **Purpose**: Complete collection of all artwork, filterable by category
- **Visual Emphasis**:
  - Grid/masonry layout optimized for visual browsing
  - Filter/category navigation
  - Hover effects revealing artwork details
  - Infinite scroll or pagination
  - Focus on image quality and presentation

#### 3. **Artwork Detail** (`/portfolio/[slug]`)
- **Purpose**: Deep dive into individual pieces with full context
- **Visual Emphasis**:
  - Large, high-quality image display
  - Full-screen image viewer option
  - Artwork metadata (title, year, medium, dimensions)
  - Related artwork suggestions
  - Minimal UI to keep focus on the art

#### 4. **About** (`/about`)
- **Purpose**: Artist biography, philosophy, and background
- **Visual Emphasis**:
  - Clean typography-focused layout
  - Optional artist photo or studio images
  - Timeline or journey visualization
  - Personal touch with storytelling
  - Balanced text and visual elements

#### 5. **Contact** (`/contact`)
- **Purpose**: Get in touch, commission inquiries, social links
- **Visual Emphasis**:
  - Simple, accessible form
  - Clear call-to-action
  - Social media integration
  - Professional yet approachable design

### Advanced/Optional Pages

#### 6. **Process** (`/process`)
- **Purpose**: Behind-the-scenes, creative methodology, work-in-progress
- **Visual Emphasis**:
  - Step-by-step visual journey
  - Before/after comparisons
  - Video or animated process demonstrations
  - Documentary-style photography
  - Educational and inspiring content

#### 7. **Experiments** (`/experiments`)
- **Purpose**: Experimental work, sketches, explorations
- **Visual Emphasis**:
  - More casual, playful presentation
  - Grid of smaller thumbnails
  - Work-in-progress aesthetic
  - Less polished, more raw creative energy

#### 8. **Exhibitions** (`/exhibitions`)
- **Purpose**: Show past and upcoming exhibitions, shows, events
- **Visual Emphasis**:
  - Timeline or calendar view
  - Event cards with dates and locations
  - Gallery of exhibition photos
  - Professional presentation

---

## 🗂️ Component Hierarchy

```
App Layout
├── Navigation (Global)
├── Footer (Global)
└── Page Content
    ├── Home Page
    │   ├── Hero
    │   ├── FeaturedArtwork
    │   └── QuickLinks
    │
    ├── Portfolio Page
    │   ├── PortfolioHeader
    │   ├── CategoryFilter
    │   ├── ArtworkGrid
    │   └── LoadMore / Pagination
    │
    ├── Artwork Detail Page
    │   ├── ArtworkViewer
    │   ├── ArtworkInfo
    │   ├── ArtworkNavigation
    │   └── RelatedArtwork
    │
    ├── About Page
    │   ├── AboutHero
    │   ├── Biography
    │   ├── Timeline (optional)
    │   └── ArtistPhoto
    │
    ├── Contact Page
    │   ├── ContactForm
    │   ├── ContactInfo
    │   └── SocialLinks
    │
    ├── Process Page
    │   ├── ProcessHeader
    │   ├── ProcessSteps
    │   └── ProcessGallery
    │
    ├── Experiments Page
    │   ├── ExperimentsHeader
    │   └── ExperimentsGrid
    │
    └── Exhibitions Page
        ├── ExhibitionsHeader
        ├── ExhibitionsTimeline
        └── ExhibitionCards
```

---

## 🧩 Reusable UI Components

### Layout Components
- `Navigation` - Global navigation with smooth scroll
- `Footer` - Site footer with links and social
- `PageContainer` - Consistent page wrapper with max-width
- `Section` - Reusable section wrapper with spacing

### Artwork Components
- `ArtworkCard` - Grid item with hover effects
- `ArtworkGrid` - Responsive grid layout
- `ArtworkViewer` - Full-screen image viewer
- `ArtworkInfo` - Metadata display component
- `ImageZoom` - Zoomable image component

### Navigation Components
- `CategoryFilter` - Filter buttons for categories
- `Breadcrumbs` - Navigation breadcrumbs
- `Pagination` - Page navigation
- `LoadMore` - Infinite scroll trigger

### Interactive Components
- `Button` - Reusable button with animations
- `Link` - Animated link component
- `Modal` - Reusable modal/dialog
- `FormField` - Styled form input
- `ContactForm` - Contact form with validation

### Animation Components
- `FadeIn` - Fade-in animation wrapper
- `SlideIn` - Slide-in animation wrapper
- `Parallax` - Parallax scroll effect
- `RevealOnScroll` - Scroll-triggered reveal

### Utility Components
- `LoadingSpinner` - Loading state
- `ErrorBoundary` - Error handling
- `SEO` - Meta tags component
- `ThemeToggle` - Dark/light mode toggle (optional)

---

## 📁 Folder Structure (Next.js App Router)

```
portfolio/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── loading.tsx                # Loading UI
│   ├── error.tsx                  # Error UI
│   ├── not-found.tsx              # 404 page
│   ├── globals.css                # Global styles
│   │
│   ├── portfolio/
│   │   ├── page.tsx               # Portfolio gallery
│   │   ├── loading.tsx
│   │   └── [slug]/
│   │       ├── page.tsx           # Artwork detail
│   │       └── loading.tsx
│   │
│   ├── about/
│   │   ├── page.tsx               # About page
│   │   └── loading.tsx
│   │
│   ├── contact/
│   │   ├── page.tsx               # Contact page
│   │   └── loading.tsx
│   │
│   ├── process/
│   │   ├── page.tsx               # Process page (optional)
│   │   └── loading.tsx
│   │
│   ├── experiments/
│   │   ├── page.tsx               # Experiments page (optional)
│   │   └── loading.tsx
│   │
│   └── exhibitions/
│       ├── page.tsx                # Exhibitions page (optional)
│       └── loading.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── PageContainer.tsx
│   │   └── Section.tsx
│   │
│   ├── artwork/
│   │   ├── ArtworkCard.tsx
│   │   ├── ArtworkGrid.tsx
│   │   ├── ArtworkViewer.tsx
│   │   ├── ArtworkInfo.tsx
│   │   ├── ImageZoom.tsx
│   │   └── RelatedArtwork.tsx
│   │
│   ├── portfolio/
│   │   ├── PortfolioHeader.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── PortfolioGrid.tsx
│   │
│   ├── about/
│   │   ├── AboutHero.tsx
│   │   ├── Biography.tsx
│   │   └── Timeline.tsx
│   │
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   ├── ContactInfo.tsx
│   │   └── SocialLinks.tsx
│   │
│   ├── process/
│   │   ├── ProcessHeader.tsx
│   │   ├── ProcessSteps.tsx
│   │   └── ProcessGallery.tsx
│   │
│   ├── experiments/
│   │   └── ExperimentsGrid.tsx
│   │
│   ├── exhibitions/
│   │   ├── ExhibitionsTimeline.tsx
│   │   └── ExhibitionCard.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Link.tsx
│   │   ├── Modal.tsx
│   │   ├── FormField.tsx
│   │   └── LoadingSpinner.tsx
│   │
│   └── animations/
│       ├── FadeIn.tsx
│       ├── SlideIn.tsx
│       ├── Parallax.tsx
│       └── RevealOnScroll.tsx
│
├── lib/
│   ├── utils.ts                   # Utility functions
│   ├── data.ts                    # Artwork data
│   └── constants.ts               # Constants
│
├── types/
│   ├── artwork.ts                 # Artwork type definitions
│   └── index.ts                   # Shared types
│
├── public/
│   ├── images/
│   │   ├── artwork/               # Artwork images
│   │   ├── about/                 # About page images
│   │   └── process/               # Process images
│   └── favicon.ico
│
├── styles/
│   └── animations.css             # Custom animations
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

---

## 🎨 Visual Design Principles by Page

### Home
- **Hero**: Full viewport or large section with featured piece
- **Typography**: Large, bold, minimal
- **Whitespace**: Maximum breathing room
- **Animation**: Slow, fluid, attention-grabbing

### Portfolio
- **Layout**: Masonry or uniform grid
- **Images**: High-quality, optimized
- **Interaction**: Smooth hover reveals
- **Filtering**: Elegant category navigation

### Artwork Detail
- **Focus**: Artwork is the hero (80%+ of viewport)
- **Navigation**: Subtle prev/next controls
- **Info**: Collapsible or overlay metadata
- **Viewer**: Full-screen option with zoom

### About
- **Balance**: Text and visuals in harmony
- **Storytelling**: Visual narrative flow
- **Personal**: Warm, approachable tone
- **Typography**: Readable, elegant fonts

### Contact
- **Clarity**: Simple, obvious form
- **Trust**: Professional presentation
- **Accessibility**: Clear labels and feedback
- **Social**: Integrated social proof

### Process
- **Documentation**: Visual storytelling
- **Progression**: Clear step-by-step flow
- **Education**: Informative and inspiring
- **Media**: Mix of images, videos, GIFs

### Experiments
- **Playfulness**: Less formal presentation
- **Exploration**: Show the journey
- **Grid**: Dense, Instagram-like layout
- **Energy**: Raw, unpolished aesthetic

### Exhibitions
- **Timeline**: Chronological or reverse
- **Events**: Card-based layout
- **Details**: Date, location, description
- **Photos**: Exhibition documentation

---

## 🔄 Data Flow

### Artwork Data Structure
```typescript
interface Artwork {
  id: string;
  slug: string;
  title: string;
  year: number;
  category: string;
  medium: string;
  dimensions: string;
  description: string;
  image: string;
  images?: string[]; // For detail page gallery
  featured: boolean;
  related?: string[]; // Related artwork IDs
}
```

### Category Structure
```typescript
interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}
```

---

## 🚀 Implementation Priority

1. **Phase 1 - Core**: Home, Portfolio, Artwork Detail, About, Contact
2. **Phase 2 - Enhancement**: Process, Experiments
3. **Phase 3 - Advanced**: Exhibitions, Advanced filtering, Search

---

This structure provides a solid foundation for a professional art portfolio while maintaining flexibility for future expansion.

