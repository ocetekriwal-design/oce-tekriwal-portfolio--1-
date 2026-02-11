
import React from 'react';
import { PIXEL_SYMBOLS } from '../constants';

interface PixelIconProps {
  type: keyof typeof PIXEL_SYMBOLS;
  className?: string;
  size?: number;
}

export const PixelIcon: React.FC<PixelIconProps> = ({ type, className = '', size = 40 }) => {
  const IconFunc = PIXEL_SYMBOLS[type];
  
  // Guard against missing icons
  if (typeof IconFunc !== 'function') {
    console.warn(`PixelIcon: Symbol type "${type}" not found.`);
    return <div style={{ width: size, height: size }} className={className} />;
  }

  return (
    <div 
      className={`inline-block text-[#FF007F] ${className}`} 
      style={{ width: size, height: size }}
    >
      {IconFunc(className)}
    </div>
  );
};
