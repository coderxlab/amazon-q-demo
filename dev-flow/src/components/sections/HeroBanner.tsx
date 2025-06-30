import React from 'react';
import Button from '../ui/Button';


const HeroBanner: React.FC = () => {
  return (
    <section className="relative h-[716px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/src/assets/images/hero-background.jpg"
          alt="Interior Design Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 h-full flex items-center justify-end pr-[58px]">
        <div className="bg-[#FFF3E3] p-[62px_39px_37px_39px] max-w-[643px] rounded-[10px]">
          <p className="font-poppins font-semibold text-base text-[#333333] tracking-[3px] mb-1">
            New Arrival
          </p>
          <h1 className="font-poppins font-bold text-[52px] leading-[65px] text-[#B88E2F] mb-[17px]">
            Discover Our<br />New Collection
          </h1>
          <p className="font-poppins font-medium text-lg text-[#333333] leading-6 mb-[46px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Button variant="primary" size="lg" className="px-[72px] py-[25px] font-bold text-base uppercase">
            BUY Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;