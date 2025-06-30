import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroBanner from '../components/sections/HeroBanner';
import CategorySection from '../components/sections/CategorySection';
import ProductGrid from '../components/sections/ProductGrid';
import Inspirations from '../components/sections/Inspirations';
import ImageGallery from '../components/sections/ImageGallery';
import type { Product } from '../types';

const LandingPage: React.FC = () => {
  const products: Product[] = [
    { id: '1', name: 'Syltherine', price: 2500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '2', name: 'Leviosa', price: 2500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '3', name: 'Lolito', price: 7000000, image: '/gallery-1.jpg', category: 'living' },
    { id: '4', name: 'Respira', price: 500000, image: '/gallery-1.jpg', category: 'living' },
    { id: '5', name: 'Grifo', price: 1500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '6', name: 'Muggo', price: 150000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '7', name: 'Pingky', price: 7000000, image: '/gallery-1.jpg', category: 'living' },
    { id: '8', name: 'Potty', price: 500000, image: '/gallery-1.jpg', category: 'living' }
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner Section */}
        <HeroBanner />
         
        {/* Category Section */}
        <CategorySection/>
        
        {/* Products Section */}
        <ProductGrid
          viewMode="grid"
          products={products}
          sortBy="default"
          itemsPerPage={8}
          currentPage={1}
          showHeader={true}
          showShowMore={true}
        />
        
        {/* Inspirations Section */}
        <Inspirations/>
        {/* Gallery Section */}
        <ImageGallery/>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;