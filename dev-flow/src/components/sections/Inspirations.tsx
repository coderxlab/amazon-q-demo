import React from 'react';
import Button from '../ui/Button';

const Inspirations: React.FC = () => {
  return (
    <section className="bg-[#FCF8F3] h-[670px] relative">
      <div className="max-w-[1440px] mx-auto h-full flex items-center">
        <div className="pl-[100px] w-[564px]">
          <h2 className="font-poppins font-bold text-[40px] leading-[1.2] text-[#3A3A3A] mb-[7px]">
            50+ Beautiful rooms<br />inspiration
          </h2>
          <p className="font-poppins font-medium text-base text-[#616161] leading-[1.5] mb-[25px] w-[368px]">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <Button variant="primary" size="md" className="w-[176px] h-[48px]">
            Explore More
          </Button>
        </div>
        
        <div className="flex gap-6 ml-auto pr-0">
          <div className="relative w-[404px] h-[582px]">
            <img 
              src="/gallery-1.jpg"
              alt="Beautiful room inspiration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-[24px] left-[24px] flex items-end gap-6">
              <div className="bg-[#FFFFFF]/70 backdrop-blur-sm p-[32px] pb-[16px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-poppins font-medium text-base text-[#616161]">01</span>
                  <div className="w-[27px] h-0 border-t border-[#616161]"></div>
                  <span className="font-poppins font-medium text-base text-[#616161]">Bed Room</span>
                </div>
                <h3 className="font-poppins font-semibold text-[28px] leading-[1.2] text-[#3A3A3A]">Inner Peace</h3>
              </div>
              <button className="w-[48px] h-[48px] bg-[#B88E2F] rounded-full flex items-center justify-center">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path d="M12 1L17 6L12 11M17 6H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="w-[372px] h-[486px]">
              <img 
                src="/gallery-2.jpg"
                alt="Beautiful room inspiration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-5">
              <div className="relative w-[27px] h-[27px]">
                <div className="w-[27px] h-[27px] border border-[#B88E2F] rounded-full opacity-70"></div>
                <div className="absolute top-2 left-2 w-[11px] h-[11px] bg-[#B88E2F] rounded-full"></div>
              </div>
              <div className="w-[11px] h-[11px] bg-[#D8D8D8] rounded-full"></div>
              <div className="w-[11px] h-[11px] bg-[#D8D8D8] rounded-full"></div>
              <div className="w-[11px] h-[11px] bg-[#D8D8D8] rounded-full"></div>
            </div>
          </div>
          
          <button className="absolute top-1/2 right-6 -translate-y-1/2 w-[48px] h-[48px] bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none">
              <path d="M1 1L6 7L1 13" stroke="#B88E2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inspirations;