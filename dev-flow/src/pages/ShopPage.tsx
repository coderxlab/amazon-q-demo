import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import FilterControls from '../components/sections/FilterControls';
import ProductGrid from '../components/sections/ProductGrid';
import type { Product } from '../types';

const ShopPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('default');
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage] = useState(1);
  
  // Mock products data
  const mockProducts: Product[] = [
    { id: '1', name: 'Syltherine', price: 2500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '2', name: 'Leviosa', price: 2500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '3', name: 'Lolito', price: 7000000, image: '/gallery-1.jpg', category: 'living' },
    { id: '4', name: 'Respira', price: 500000, image: '/gallery-1.jpg', category: 'living' },
    { id: '5', name: 'Grifo', price: 1500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '6', name: 'Muggo', price: 150000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '7', name: 'Pingky', price: 7000000, image: '/gallery-1.jpg', category: 'living' },
    { id: '8', name: 'Potty', price: 500000, image: '/gallery-1.jpg', category: 'living' },
    { id: '9', name: 'Syltherine', price: 2500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '10', name: 'Leviosa', price: 2500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '11', name: 'Lolito', price: 7000000, image: '/gallery-1.jpg', category: 'living' },
    { id: '12', name: 'Respira', price: 500000, image: '/gallery-1.jpg', category: 'living' },
    { id: '13', name: 'Grifo', price: 1500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '14', name: 'Muggo', price: 150000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '15', name: 'Pingky', price: 7000000, image: '/gallery-1.jpg', category: 'living' },
    { id: '16', name: 'Potty', price: 500000, image: '/gallery-1.jpg', category: 'living' },
    { id: '17', name: 'Syltherine', price: 2500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '18', name: 'Leviosa', price: 2500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '19', name: 'Lolito', price: 7000000, image: '/gallery-1.jpg', category: 'living' },
    { id: '20', name: 'Respira', price: 500000, image: '/gallery-1.jpg', category: 'living' },
    { id: '21', name: 'Grifo', price: 1500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '22', name: 'Muggo', price: 150000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '23', name: 'Pingky', price: 7000000, image: '/gallery-1.jpg', category: 'living' },
    { id: '24', name: 'Potty', price: 500000, image: '/gallery-1.jpg', category: 'living' },
    { id: '25', name: 'Syltherine', price: 2500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '26', name: 'Leviosa', price: 2500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '27', name: 'Lolito', price: 7000000, image: '/gallery-1.jpg', category: 'living' },
    { id: '28', name: 'Respira', price: 500000, image: '/gallery-1.jpg', category: 'living' },
    { id: '29', name: 'Grifo', price: 1500000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '30', name: 'Muggo', price: 150000, image: '/gallery-1.jpg', category: 'dining' },
    { id: '31', name: 'Pingky', price: 7000000, image: '/gallery-1.jpg', category: 'living' },
    { id: '32', name: 'Potty', price: 500000, image: '/gallery-1.jpg', category: 'living' }
  ];
  
  const totalResults = mockProducts.length;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        
        <FilterControls
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          sortBy={sortBy}
          onSortChange={setSortBy}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
          totalResults={totalResults}
          currentPage={currentPage}
          resultsPerPage={itemsPerPage}
        />
        
        <ProductGrid
          viewMode={viewMode}
          products={mockProducts}
          sortBy={sortBy}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
        />
        
        {/* Feature Section - To be implemented */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-gray-500">Feature highlights will be implemented here</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;