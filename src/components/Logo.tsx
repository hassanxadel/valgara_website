
import React from 'react';


interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  // Check if className contains width/height classes
  const hasCustomSize = className.includes('w-') || className.includes('h-');
  const containerClasses = hasCustomSize ? '' : sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${containerClasses} flex items-center justify-center`}>
        {/* Valgara logo using PNG image */}
        <img
          src="/images/logo.png"
          alt="Valgara Logo"
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <span className={`font-heading font-bold tracking-wider text-valgara-bronze ${textSizeClasses[size]}`}>
          VALGARA
        </span>
      )}
    </div>
  );
};

export default Logo;
