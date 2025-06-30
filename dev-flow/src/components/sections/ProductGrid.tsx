import React from 'react';
import Card from '../ui/Card';
import type { Product } from '../../types';

const ProductGrid: React.FC = () => {
  const products: Product[] = [
    { id: '1', name: 'Syltherine', price: 2500000, image: '/src/assets/images/gallery-1.jpg', category: 'dining' },
    { id: '2', name: 'Leviosa', price: 2500000, image: '/src/assets/images/gallery-1.jpg', category: 'dining' },
    { id: '3', name: 'Lolito', price: 7000000, image: '/src/assets/images/gallery-1.jpg', category: 'living' },
    { id: '4', name: 'Respira', price: 500000, image: '/src/assets/images/gallery-1.jpg', category: 'living' },
    { id: '5', name: 'Grifo', price: 1500000, image: '/src/assets/images/gallery-1.jpg', category: 'dining' },
    { id: '6', name: 'Muggo', price: 150000, image: '/src/assets/images/gallery-1.jpg', category: 'dining' },
    { id: '7', name: 'Pingky', price: 7000000, image: '/src/assets/images/gallery-1.jpg', category: 'living' },
    { id: '8', name: 'Potty', price: 500000, image: '/src/assets/images/gallery-1.jpg', category: 'living' }
  ];

  return (
    <section className="py-[67px]">
      <div className="max-w-[1236px] mx-auto px-4">
        <h2 className="font-poppins font-bold text-[40px] leading-[1.2] text-[#3A3A3A] text-center mb-[80px]">
          Our Products
        </h2>
        
        <div className="grid grid-cols-4 gap-[32px] mb-[80px]">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="font-poppins font-semibold text-base text-[#B88E2F] border border-[#B88E2F] px-[74px] py-3 hover:bg-[#B88E2F] hover:text-white transition-colors">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;