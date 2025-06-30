import React from 'react';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick,
  className = ''
}) => {
  const baseClasses = 'font-poppins font-semibold transition-all duration-200 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-[#B88E2F] text-white hover:bg-[#A67C2A]',
    secondary: 'bg-white text-[#B88E2F] border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-9 py-3 text-base'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button 
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;