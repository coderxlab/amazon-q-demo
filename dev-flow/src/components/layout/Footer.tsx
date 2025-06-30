import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[rgba(0,0,0,0.17)] pt-12">
      <div className="max-w-[1440px] mx-auto px-[100px]">
        <div className="flex justify-between mb-[90px]">
          <div className="w-[285px]">
            <h3 className="font-poppins font-bold text-2xl text-black mb-[50px]">Funiro.</h3>
            <p className="font-poppins text-base text-[#9F9F9F] leading-6">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </p>
          </div>
          
          <div className="w-[68px]">
            <h4 className="font-poppins font-medium text-base text-[#9F9F9F] mb-[55px]">Links</h4>
            <ul className="space-y-[46px]">
              <li><a href="#" className="font-poppins font-medium text-base text-black hover:text-[#B88E2F] transition-colors">Home</a></li>
              <li><a href="#" className="font-poppins font-medium text-base text-black hover:text-[#B88E2F] transition-colors">Shop</a></li>
              <li><a href="#" className="font-poppins font-medium text-base text-black hover:text-[#B88E2F] transition-colors">About</a></li>
              <li><a href="#" className="font-poppins font-medium text-base text-black hover:text-[#B88E2F] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="w-[140px]">
            <h4 className="font-poppins font-medium text-base text-[#9F9F9F] mb-[55px]">Help</h4>
            <ul className="space-y-[46px]">
              <li><a href="#" className="font-poppins font-medium text-base text-black hover:text-[#B88E2F] transition-colors">Payment Options</a></li>
              <li><a href="#" className="font-poppins font-medium text-base text-black hover:text-[#B88E2F] transition-colors">Returns</a></li>
              <li><a href="#" className="font-poppins font-medium text-base text-black hover:text-[#B88E2F] transition-colors">Privacy Policies</a></li>
            </ul>
          </div>
          
          <div className="w-[286px]">
            <h4 className="font-poppins font-medium text-base text-[#9F9F9F] mb-[53px]">Newsletter</h4>
            <div className="flex gap-[11px]">
              <div className="flex-1">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address" 
                  className="w-full border-b border-black pb-1 font-poppins text-sm text-[#9F9F9F] bg-transparent focus:outline-none focus:border-[#B88E2F]"
                />
              </div>
              <div>
                <button className="font-poppins font-medium text-sm text-black border-b border-black pb-1 hover:border-[#B88E2F] hover:text-[#B88E2F] transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#D9D9D9] pt-[35px] pb-[38px]">
          <p className="font-poppins text-base text-black">2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;