
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  isNew = false,
  isBestseller = false
}) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/product/${id}`);
  };
  
  return (
    // Optimized mobile card: shorter height, increased width
    <div className="group cursor-pointer w-full h-full p-0.5 sm:p-2" onClick={handleViewProduct}>
      <div className="bg-valgara-charcoal border-2 border-valgara-bronze/60 hover:border-valgara-bronze transition-all duration-500 hover:shadow-lg hover:shadow-valgara-bronze/30 rounded-lg overflow-hidden w-full h-full flex flex-col hover:transform hover:scale-[1.01] transition-transform">
        {/* Image Section - Reduced height for mobile */}
        <div className="relative flex-[3]">
          {/* Badge - Repositioned and smaller */}
          {(isNew || isBestseller) && (
            <div className="absolute top-2 left-2 z-20">
              <span className="bg-valgara-bronze text-valgara-black px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-black tracking-wider rounded-full shadow-lg">
                {isNew ? 'NEW' : 'BEST'}
              </span>
            </div>
          )}
          
          {/* Product Image - Mobile preserved, desktop minimal */}
          <div className="relative w-full h-full min-h-[200px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[100px] xl:min-h-[110px] overflow-hidden rounded-t-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-valgara-black/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Product Info Section - Compact for mobile, minimal for desktop */}
        <div className="p-2 sm:p-3 lg:p-2 bg-valgara-charcoal border-t border-valgara-bronze/30 flex-1 flex flex-col justify-between min-h-[70px] sm:min-h-[80px] lg:min-h-[60px]">
          {/* Compact Info Layout */}
          <div className="flex items-center justify-between">
            <div className="flex-1 mr-2">
              {/* Product Title - Compact mobile size */}
              <h3 className="text-valgara-white font-medium text-sm sm:text-sm lg:text-base leading-tight line-clamp-1 group-hover:text-valgara-bronze transition-colors duration-300">
                {title}
              </h3>
              
              {/* Price - Compact mobile size */}
              <p className="text-valgara-bronze font-bold text-sm sm:text-base lg:text-lg tracking-wider mt-0.5">
                {price}
              </p>
            </div>
            
            {/* Compact View Arrow */}
            <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-valgara-bronze/20 rounded-full flex items-center justify-center border border-valgara-bronze/40 group-hover:bg-valgara-bronze/30 transition-colors duration-300">
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-valgara-bronze" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-valgara-bronze/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ProductCard;
