// Core data models for eCommerce Interior Design Landing Page

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'dining' | 'living';
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

// Shop page specific types
export type ViewMode = 'grid' | 'list';
export type SortOption = 'default' | 'price-low' | 'price-high' | 'name-az' | 'name-za' | 'newest';

// Component prop interfaces
export interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface CardProps {
  product: Product;
  className?: string;
  viewMode?: ViewMode;
}

export interface FilterControlsProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (count: number) => void;
  totalResults: number;
  currentPage: number;
  resultsPerPage: number;
}

export interface ProductGridProps {
  viewMode: ViewMode;
  products: Product[];
  sortBy: SortOption;
  itemsPerPage: number;
  currentPage: number;
}

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}