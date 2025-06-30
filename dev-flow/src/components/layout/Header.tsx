import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white w-full h-[100px] flex items-center px-[54px] relative z-10">
      {/* Logo - positioned on the left */}
      <div className="flex items-center gap-[5px]">
        <div className="w-[50px] h-[32px]">
          <img src="/src/assets/images/icons/logo-only.png" alt="Furniro Logo" className="w-full h-full object-contain" />
        </div>
        <span className="font-montserrat font-bold text-[34px] text-black leading-[41.45px]">Furniro</span>
      </div>
      
      {/* Navigation - centered */}
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-center">
          <a href="#" className="font-poppins font-medium text-base text-black hover:text-[#B88E2F] transition-colors">Home</a>
          <a href="#" className="font-poppins font-medium text-base text-black hover:text-[#B88E2F] transition-colors ml-[75px]">Shop</a>
          <a href="#" className="font-poppins font-medium text-base text-black hover:text-[#B88E2F] transition-colors ml-[75px]">About</a>
          <a href="#" className="font-poppins font-medium text-base text-black hover:text-[#B88E2F] transition-colors ml-[75px]">Contact</a>
        </div>
      </nav>
      
      {/* Icons - positioned on the right */}
      <div className="flex items-center ml-auto">
        {/* Account Icon */}
        <button className="w-7 h-7 flex items-center justify-center">
          <img src="/src/assets/images/icons/account-icon.svg" alt="Account" className="w-full h-full" />
        </button>
        
        {/* Search Icon */}
        <button className="w-7 h-7 flex items-center justify-center ml-[45px]">
          <img src="/src/assets/images/icons/search-icon.svg" alt="Search" className="w-full h-full" />
        </button>
        
        {/* Heart Icon */}
        <button className="w-7 h-7 flex items-center justify-center ml-[45px]">
          <img src="/src/assets/images/icons/heart-icon.svg" alt="Wishlist" className="w-full h-full" />
        </button>
        
        {/* Shopping Cart Icon */}
        <button className="w-7 h-7 flex items-center justify-center ml-[45px]">
          <img src="/src/assets/images/icons/cart-icon.svg" alt="Cart" className="w-full h-full" />
        </button>
      </div>
    </header>
  );
};

export default Header;