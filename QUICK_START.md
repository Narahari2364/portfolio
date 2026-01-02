# Quick Start Guide

## 📋 Complete Structure Overview

### Pages & Routes

```
/                    → Home (Hero + Featured Gallery)
/portfolio           → Full Portfolio Gallery (with filters)
/portfolio/[slug]    → Individual Artwork Detail Page
/about               → About the Artist
/contact             → Contact Form
/process             → Creative Process (Optional)
/experiments         → Experimental Work (Optional)
/exhibitions         → Exhibitions Timeline (Optional)
```

### Component Organization

#### Layout Components (`components/layout/`)
- `Navigation.tsx` - Global navigation bar
- `Footer.tsx` - Site footer
- `PageContainer.tsx` - Consistent page wrapper
- `Section.tsx` - Reusable section wrapper

#### Artwork Components (`components/artwork/`)
- `ArtworkCard.tsx` - Grid item with hover effects
- `ArtworkGrid.tsx` - Responsive grid layout
- `ArtworkViewer.tsx` - Full-screen image viewer
- `ArtworkInfo.tsx` - Metadata display
- `RelatedArtwork.tsx` - Related artwork suggestions

#### Portfolio Components (`components/portfolio/`)
- `PortfolioHeader.tsx` - Page header
- `CategoryFilter.tsx` - Category filter buttons
- `PortfolioGrid.tsx` - Filtered artwork grid

#### UI Components (`components/ui/`)
- `Button.tsx` - Reusable button with animations
- `Link.tsx` - Animated link component
- `FormField.tsx` - Styled form input
- `Modal.tsx` - Reusable modal/dialog
- `LoadingSpinner.tsx` - Loading state

#### Animation Components (`components/animations/`)
- `FadeIn.tsx` - Fade-in animation wrapper
- `RevealOnScroll.tsx` - Scroll-triggered reveal

## 🎯 Key Files to Customize

1. **Artwork Data**: `lib/data.ts`
   - Add your artwork to the `artworks` array
   - Update categories
   - Add exhibitions if using that page

2. **Site Constants**: `lib/constants.ts`
   - Site name
   - Navigation items
   - Social media links

3. **Content**:
   - Hero: `components/Hero.tsx`
   - About: `components/about/Biography.tsx`
   - Contact: `components/contact/ContactInfo.tsx`

4. **Styling**:
   - Colors: `tailwind.config.ts`
   - Global styles: `app/globals.css`

## 🚀 Development Workflow

1. **Start Development**:
   ```bash
   npm install
   npm run dev
   ```

2. **Add Your Artwork**:
   - Edit `lib/data.ts`
   - Add images to `public/images/artwork/`
   - Update image paths in artwork objects

3. **Customize Content**:
   - Update text in component files
   - Modify navigation in `lib/constants.ts`
   - Update social links

4. **Style Customization**:
   - Modify Tailwind config for colors
   - Adjust spacing in component files
   - Update typography in `globals.css`

## 📦 Data Structure

### Artwork Object
```typescript
{
  id: string;
  slug: string;              // URL-friendly identifier
  title: string;
  year: number;
  category: string;           // Used for filtering
  medium: string;
  dimensions: string;
  description: string;
  image: string;             // Main image URL
  images?: string[];         // Additional images for detail page
  featured: boolean;        // Show on home page
  tags?: string[];          // Optional tags
}
```

## 🎨 Visual Emphasis by Page

- **Home**: Large hero, featured artwork, minimal UI
- **Portfolio**: Grid layout, category filters, hover reveals
- **Artwork Detail**: Large image viewer, full metadata, related works
- **About**: Typography-focused, storytelling, personal touch
- **Contact**: Simple form, clear CTAs, social integration

## 🔧 Advanced Features

### Optional Pages
The structure includes placeholder pages for:
- Process (creative methodology)
- Experiments (exploratory work)
- Exhibitions (shows and events)

These can be fully developed or removed based on your needs.

### Performance
- Next.js Image optimization
- Lazy loading
- Code splitting
- Optimized animations

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

## 📖 Full Documentation

See `STRUCTURE.md` for complete documentation including:
- Detailed page purposes
- Component hierarchy
- Visual design principles
- Implementation priorities

