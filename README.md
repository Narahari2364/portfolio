# Art Portfolio Website

A modern, animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Designed specifically for showcasing digital artwork with a minimal, art-first approach.

## ✨ Features

- **Art-first Design**: Minimal, clean interface that puts artwork front and center
- **Fluid Animations**: Smooth, premium animations inspired by slime-style/fluid UI motion
- **Fully Responsive**: Optimized for all screen sizes
- **Performance Optimized**: Built with Next.js App Router for optimal performance
- **Accessible**: Follows best practices for accessibility
- **Complete Structure**: Full page hierarchy with reusable components

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **clsx & tailwind-merge** (utility functions)

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page
│   ├── portfolio/                # Portfolio gallery
│   │   ├── page.tsx
│   │   └── [slug]/               # Artwork detail pages
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── process/                  # Process page (optional)
│   ├── experiments/              # Experiments page (optional)
│   └── exhibitions/              # Exhibitions page (optional)
│
├── components/
│   ├── layout/                   # Layout components
│   ├── artwork/                  # Artwork-specific components
│   ├── portfolio/                # Portfolio page components
│   ├── about/                    # About page components
│   ├── contact/                  # Contact page components
│   ├── ui/                       # Reusable UI components
│   └── animations/               # Animation wrappers
│
├── lib/                          # Utilities and data
│   ├── data.ts                   # Artwork data
│   ├── utils.ts                  # Helper functions
│   └── constants.ts              # Site constants
│
└── types/                        # TypeScript definitions
```

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

### Core Pages
- **Home** (`/`) - Hero section with featured artwork preview
- **Portfolio** (`/portfolio`) - Complete gallery with category filtering
- **Artwork Detail** (`/portfolio/[slug]`) - Individual artwork pages with full details
- **About** (`/about`) - Artist biography and background
- **Contact** (`/contact`) - Contact form and social links

### Optional Pages
- **Process** (`/process`) - Behind-the-scenes creative process
- **Experiments** (`/experiments`) - Experimental work and sketches
- **Exhibitions** (`/exhibitions`) - Past and upcoming exhibitions

## 🎨 Customization

### Update Artwork Data
Edit `lib/data.ts` to add your own artwork:
```typescript
export const artworks: Artwork[] = [
  {
    id: "1",
    slug: "your-artwork-slug",
    title: "Your Artwork Title",
    // ... other fields
  },
];
```

### Update Site Information
Edit `lib/constants.ts` to customize:
- Site name
- Navigation items
- Social media links

### Styling
- Colors and theme: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component styles: Individual component files

### Content
- Hero text: `components/Hero.tsx`
- About content: `components/about/Biography.tsx`
- Contact info: `components/contact/ContactInfo.tsx`

## 📚 Documentation

See `STRUCTURE.md` for detailed documentation on:
- Complete page list with purposes
- Component hierarchy
- Reusable UI components
- Visual design principles
- Data structures

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📝 Notes

- All artwork images are currently using placeholder URLs from Unsplash
- Replace with your own images in the `artworks` array
- Form submission in Contact page needs backend integration
- Social media links need to be updated with your actual profiles

## 🎯 Next Steps

1. Replace placeholder artwork with your own
2. Update all text content with your information
3. Add your social media links
4. Customize colors and styling to match your brand
5. Set up form submission backend (if needed)
6. Add your own images to the `public/images/` directory

