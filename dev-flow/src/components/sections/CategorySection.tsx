import React from 'react';

const CategorySection: React.FC = () => {
  const categories = [
    {
      id: 'dining',
      name: 'Dining',
      image: '/dining-category.jpg'
    },
    {
      id: 'living',
      name: 'Living',
      image: '/living-category.jpg'
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      image: '/bedroom-category.jpg'
    }
  ];

  return (
    <section className="py-[56px]">
      <div className="max-w-[1183px] mx-auto px-4">
        <div className="text-center mb-[62px]">
          <h2 className="font-poppins font-bold text-[32px] leading-[1.5] text-[#333333] mb-3">
            Browse The Range
          </h2>
          <p className="font-poppins text-xl leading-[1.5] text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        
        <div className="flex gap-5">
          {categories.map((category, index) => (
            <div key={category.id} className="flex-1">
              <div className="w-[381px] h-[480px] overflow-hidden rounded-[10px] mb-[30px]">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-poppins font-semibold text-2xl leading-[1.5] text-[#333333] text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;