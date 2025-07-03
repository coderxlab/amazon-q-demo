import React from 'react';

const ImageGallery: React.FC = () => {
  return (
    <section className="py-[67px]">
      <div className="text-center mb-[59px]">
        <p className="font-poppins font-semibold text-xl leading-[1.5] text-[#616161] mb-2">
          Share your setup with
        </p>
        <h2 className="font-poppins font-bold text-[40px] leading-[1.2] text-[#3A3A3A]">
          #FuniroFurniture
        </h2>
      </div>
      
      <div className="relative w-full max-w-[1799px] mx-auto h-[721px] overflow-hidden">
        {/* Rectangle 36 - Left tall */}
        <div className="absolute top-0 left-0 w-[274px] h-[382px]">
          <img 
            src="/gallery-1.jpg"
            alt="Furniture setup"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Rectangle 37 - Left bottom */}
        <div className="absolute top-[398px] left-0 w-[381px] h-[323px]">
          <img 
            src="/gallery-2.jpg"
            alt="Furniture setup"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Rectangle 38 - Center */}
        <div className="absolute top-[70px] left-[290px] w-[451px] h-[312px]">
          <img 
            src="/gallery-1.jpg"
            alt="Furniture setup"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Rectangle 39 - Center bottom */}
        <div className="absolute top-[398px] left-[397px] w-[344px] h-[242px]">
          <img 
            src="/gallery-2.jpg"
            alt="Furniture setup"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Rectangle 40 - Right tall */}
        <div className="absolute top-[156px] left-[757px] w-[295px] h-[392px]">
          <img 
            src="/gallery-1.jpg"
            alt="Furniture setup"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Rectangle 43 - Far right top */}
        <div className="absolute top-[99px] left-[1068px] w-[290px] h-[348px]">
          <img 
            src="/gallery-2.jpg"
            alt="Furniture setup"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Rectangle 41 - Far right bottom left */}
        <div className="absolute top-[463px] left-[1068px] w-[178px] h-[242px]">
          <img 
            src="/gallery-1.jpg"
            alt="Furniture setup"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Rectangle 44 - Far right bottom right */}
        <div className="absolute top-[463px] left-[1262px] w-[258px] h-[196px]">
          <img 
            src="/gallery-2.jpg"
            alt="Furniture setup"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Rectangle 45 - Rightmost tall */}
        <div className="absolute top-[14px] left-[1374px] w-[425px] h-[433px]">
          <img 
            src="/gallery-1.jpg"
            alt="Furniture setup"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;