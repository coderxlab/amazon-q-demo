import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroBanner from '../components/sections/HeroBanner';
import CategorySection from '../components/sections/CategorySection';
import ProductGrid from '../components/sections/ProductGrid';
import Inspirations from '../components/sections/Inspirations';
import ImageGallery from '../components/sections/ImageGallery';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner Section */}
        <HeroBanner />
         
        {/* Category Section */}
        <CategorySection/>
        
        {/* Products Section */}
        <ProductGrid/>
        
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