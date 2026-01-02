import { Artwork, Category, Exhibition } from "@/types";

// Sample artwork data - replace with your actual data source
export const artworks: Artwork[] = [
  {
    id: "1",
    slug: "digital-landscape",
    title: "Digital Landscape",
    year: 2024,
    category: "Digital Art",
    medium: "Digital",
    dimensions: "1920 × 1080px",
    description: "A surreal exploration of digital nature, blending organic forms with geometric precision.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop",
    featured: true,
    tags: ["landscape", "digital", "surreal"],
  },
  {
    id: "2",
    slug: "abstract-composition",
    title: "Abstract Composition",
    year: 2024,
    category: "Abstract",
    medium: "Digital",
    dimensions: "2000 × 2000px",
    description: "Fluid forms and vibrant colors creating a dynamic visual rhythm.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop",
    featured: true,
    tags: ["abstract", "color", "fluid"],
  },
  {
    id: "3",
    slug: "minimalist-study",
    title: "Minimalist Study",
    year: 2023,
    category: "Minimalism",
    medium: "Digital",
    dimensions: "1500 × 1500px",
    description: "Less is more - exploring the power of negative space and simplicity.",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=800&fit=crop",
    featured: false,
    tags: ["minimal", "geometric", "simple"],
  },
  {
    id: "4",
    slug: "color-harmony",
    title: "Color Harmony",
    year: 2024,
    category: "Color Study",
    medium: "Digital",
    dimensions: "1800 × 1200px",
    description: "Exploring color relationships and their emotional impact.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=800&fit=crop",
    featured: false,
    tags: ["color", "harmony", "study"],
  },
  {
    id: "5",
    slug: "geometric-patterns",
    title: "Geometric Patterns",
    year: 2023,
    category: "Geometric",
    medium: "Digital",
    dimensions: "1600 × 1600px",
    description: "Precision and rhythm in geometric form.",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=800&fit=crop",
    featured: false,
    tags: ["geometric", "pattern", "precision"],
  },
  {
    id: "6",
    slug: "organic-forms",
    title: "Organic Forms",
    year: 2024,
    category: "Organic",
    medium: "Digital",
    dimensions: "1920 × 1080px",
    description: "Nature-inspired digital art exploring organic shapes and flows.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop",
    featured: true,
    tags: ["organic", "nature", "flow"],
  },
];

export const categories: Category[] = [
  { id: "all", name: "All", slug: "all", count: artworks.length },
  { id: "digital", name: "Digital Art", slug: "digital-art", count: 2 },
  { id: "abstract", name: "Abstract", slug: "abstract", count: 1 },
  { id: "minimalism", name: "Minimalism", slug: "minimalism", count: 1 },
  { id: "color", name: "Color Study", slug: "color-study", count: 1 },
  { id: "geometric", name: "Geometric", slug: "geometric", count: 1 },
  { id: "organic", name: "Organic", slug: "organic", count: 1 },
];

export const exhibitions: Exhibition[] = [
  {
    id: "1",
    title: "Digital Visions",
    venue: "Modern Art Gallery",
    location: "New York, NY",
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    description: "A showcase of contemporary digital art exploring the boundaries of technology and creativity.",
  },
  {
    id: "2",
    title: "Abstract Expressions",
    venue: "Contemporary Space",
    location: "Los Angeles, CA",
    startDate: "2024-06-01",
    endDate: "2024-06-30",
    description: "An exploration of abstract forms and color relationships in digital media.",
  },
];

// Helper functions
export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((artwork) => artwork.featured);
}

export function getArtworksByCategory(category: string): Artwork[] {
  if (category === "all") return artworks;
  return artworks.filter((artwork) => artwork.category.toLowerCase() === category.toLowerCase());
}

export function getRelatedArtworks(artwork: Artwork, limit: number = 3): Artwork[] {
  return artworks
    .filter((a) => a.id !== artwork.id && a.category === artwork.category)
    .slice(0, limit);
}

