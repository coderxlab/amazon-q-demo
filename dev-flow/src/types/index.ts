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
}