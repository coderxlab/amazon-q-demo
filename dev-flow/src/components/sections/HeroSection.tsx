import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[316px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url(/shop-hero-background.jpg)] bg-cover bg-center bg-no-repeat w-screen" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="font-poppins font-medium text-5xl text-black mb-2">Shop</h1>
        <div className="flex items-center text-base">
          <span className="font-poppins font-medium text-black">Home</span>
          <span className="mx-2 text-black">{'>'}</span>
          <span className="font-poppins font-light text-black">Shop</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;