import React from 'react';
import Card from '../ui/Card';
import type { Product } from '../../types';

interface ProductGridProps {
  viewMode: 'grid' | 'list';
  products: Product[];
  sortBy: string;
  itemsPerPage: number;
  currentPage: number;
  showHeader?: boolean;
  showShowMore?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  viewMode,
  products,
  sortBy,
  itemsPerPage,
  currentPage,
}) => {
  // Sort products based on sortBy value
  const sortedProducts = React.useMemo(() => {
    if (!products || !Array.isArray(products)) return [];
    const sorted = [...products];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name-az':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-za':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case 'newest':
        return sorted.reverse();
      default:
        return sorted;
    }
  }, [products, sortBy]);

  // Paginate products
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className={showHeader ? "py-[67px]" : "py-[17px] bg-white"}>
      <div className={showHeader ? "max-w-[1236px] mx-auto px-4" : "max-w-[1242px] mx-auto px-[99px]"}>
        {showHeader && (
          <h2 className="font-poppins font-bold text-[40px] leading-[1.2] text-[#3A3A3A] text-center mb-[80px]">
            Our Products
          </h2>
        )}
        
        <div className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-4 gap-[32px]' 
            : 'flex flex-col gap-[24px]'
          }
          ${showHeader ? 'mb-[80px]' : ''}
        `}>
          {paginatedProducts.map((product) => (
            <Card 
              key={product.id} 
              product={product} 
              viewMode={viewMode}
            />
          ))}
        </div>
        
        {showShowMore && (
          <div className="text-center">
            <button className="font-poppins font-semibold text-base text-[#B88E2F] border border-[#B88E2F] px-[74px] py-3 hover:bg-[#B88E2F] hover:text-white transition-colors">
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;