import React from 'react';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({ product, className = '', viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div className={`group cursor-pointer bg-[#F4F5F7] flex gap-6 p-4 ${className}`}>
        <div className="w-[200px] h-[150px] overflow-hidden bg-gray-100 flex-shrink-0">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-poppins font-semibold text-[#3A3A3A] text-2xl mb-2">{product.name}</h3>
          <p className="font-poppins text-[#898989] text-base mb-2">Stylish cafe chair</p>
          <p className="font-poppins font-semibold text-[#3A3A3A] text-xl">Rp {product.price.toLocaleString()}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`group cursor-pointer bg-[#F4F5F7] ${className}`}>
      <div className="aspect-[285/301] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="px-4 pb-6">
        <h3 className="font-poppins font-semibold text-[#3A3A3A] text-2xl mb-2">{product.name}</h3>
        <p className="font-poppins text-[#898989] text-base mb-2">Stylish cafe chair</p>
        <p className="font-poppins font-semibold text-[#3A3A3A] text-xl">Rp {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Card;