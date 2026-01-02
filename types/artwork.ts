export interface Artwork {
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
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface Exhibition {
  id: string;
  title: string;
  venue: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  images?: string[];
  link?: string;
}

