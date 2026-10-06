





































































































































































































































































































































































































































































































































































































































import React from 'react';
import { useNavigate } from 'react-router-dom';
import UltraSmoothFade from './UltraSmoothFade';

const FeaturedHoodies = () => {
  const navigate = useNavigate();
  
  const handleHoodiesClick = () => {
    navigate('/hoodies');
  };

  return (
    <UltraSmoothFade>
      <div 
        onClick={handleHoodiesClick}
        className="cursor-pointer group relative w-full"
      >
        {/* Main Card Container - Responsive sizing for side-by-side layout */}
        <div className="relative w-full h-96 sm:h-[400px] md:h-[420px] lg:h-[450px] xl:h-[480px] bg-gradient-to-br from-valgara-charcoal via-valgara-green/20 to-valgara-black rounded-2xl overflow-hidden border-2 border-valgara-bronze/40 shadow-2xl group-hover:shadow-valgara-bronze/30 group-hover:border-valgara-bronze/60 transform group-hover:scale-[1.03] transition-all duration-700 ease-out">
          
          {/* Enhanced Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-6 left-6 w-3 h-3 bg-valgara-bronze rounded-full animate-pulse"></div>
            <div className="absolute top-16 right-12 w-2 h-2 bg-valgara-bronze rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-16 left-12 w-2.5 h-2.5 bg-valgara-bronze rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-6 right-6 w-3 h-3 bg-valgara-bronze rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-valgara-bronze rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Enhanced Badge with Better Positioning */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30">
            <div className="relative">
              <span className="bg-gradient-to-r from-valgara-bronze to-valgara-copper text-valgara-black px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-black tracking-widest rounded-full shadow-xl group-hover:shadow-valgara-bronze/50 transition-shadow duration-500">
                ✦ JUST DROPPED ✦
              </span>
              <div className="absolute inset-0 bg-valgara-bronze rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Enhanced Product Images Grid with Better Spacing */}
          <div className="w-full relative p-4 sm:p-6 lg:p-8 pt-16 sm:pt-20" style={{height: 'calc(100% - 120px)', minHeight: '250px'}}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 h-full">
              <div className="relative overflow-hidden rounded-xl bg-valgara-black/20 backdrop-blur-sm border border-valgara-bronze/20 group-hover:border-valgara-bronze/40 transition-colors duration-500">
                <img
                  src="/images/1.png"
                  alt="Valgara Hoodie"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-valgara-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-valgara-black/20 backdrop-blur-sm border border-valgara-bronze/20 group-hover:border-valgara-bronze/40 transition-colors duration-500">
                <img
                  src="/images/2.png"
                  alt="Heritage Hoodie"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  style={{transitionDelay: '0.1s'}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-valgara-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-valgara-black/20 backdrop-blur-sm border border-valgara-bronze/20 group-hover:border-valgara-bronze/40 transition-colors duration-500">
                <img
                  src="/images/3.png"
                  alt="Limited Hoodie"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  style={{transitionDelay: '0.2s'}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-valgara-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-valgara-black/20 backdrop-blur-sm border border-valgara-bronze/20 group-hover:border-valgara-bronze/40 transition-colors duration-500">
                <img
                  src="/images/4.png"
                  alt="Signature Hoodie"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  style={{transitionDelay: '0.3s'}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-valgara-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* 6. Enhanced Overlay with Smooth Transitions */}
          <div className="absolute inset-0 bg-gradient-to-t from-valgara-black/85 via-valgara-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out flex items-center justify-center">
            <div className="text-center transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
              <div className="mb-3">
                <div className="flex justify-center space-x-3 mb-4">
                  <span className="text-valgara-bronze text-2xl sm:text-3xl animate-pulse">✦</span>
                  <span className="text-valgara-bronze text-2xl sm:text-3xl animate-pulse" style={{animationDelay: '0.2s'}}>✦</span>
                  <span className="text-valgara-bronze text-2xl sm:text-3xl animate-pulse" style={{animationDelay: '0.4s'}}>✦</span>
                </div>
                <p className="text-valgara-white font-bold text-xl sm:text-2xl lg:text-3xl tracking-widest mb-6">
                  PREMIUM COLLECTION
                </p>
              </div>
              {/* 5. User-friendly button with better accessibility */}
              <button className="bg-gradient-to-r from-valgara-bronze to-valgara-copper text-valgara-black px-8 py-3 sm:px-10 sm:py-4 font-black tracking-widest rounded-full hover:shadow-xl hover:shadow-valgara-bronze/40 transform hover:scale-105 transition-all duration-500 ease-out focus:outline-none focus:ring-4 focus:ring-valgara-bronze/50 active:scale-95">
                EXPLORE COLLECTION
              </button>
            </div>
          </div>
          
          {/* Enhanced Product Info with Better Typography */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
            <div className="bg-gradient-to-r from-valgara-black/95 via-valgara-green/10 to-valgara-black/95 backdrop-blur-xl rounded-2xl border border-valgara-bronze/30 p-3 sm:p-4 lg:p-6 group-hover:border-valgara-bronze/50 transition-colors duration-500">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-valgara-bronze text-sm sm:text-lg lg:text-xl mr-2">✦</span>
                  <h3 className="text-valgara-bronze font-black text-xl sm:text-2xl lg:text-4xl tracking-widest">
                    HOODIES
                  </h3>
                  <span className="text-valgara-bronze text-sm sm:text-lg lg:text-xl ml-2">✦</span>
                </div>
                <p className="text-valgara-gray text-xs sm:text-sm lg:text-base tracking-wider font-medium">
                  SIGNATURE COLLECTION
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Floating Elements */}
          <div className="absolute top-1/2 left-3 w-1.5 h-12 bg-gradient-to-b from-transparent via-valgara-bronze to-transparent opacity-0 group-hover:opacity-60 transition-all duration-700 ease-out"></div>
          <div className="absolute top-1/2 right-3 w-1.5 h-12 bg-gradient-to-b from-transparent via-valgara-bronze to-transparent opacity-0 group-hover:opacity-60 transition-all duration-700 ease-out"></div>
        </div>

        {/* Enhanced Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-valgara-bronze/0 via-valgara-bronze/10 to-valgara-bronze/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out blur-2xl"></div>
        
        {/* Additional Outer Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-valgara-bronze/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out blur-3xl"></div>
      </div>
    </UltraSmoothFade>
  );
};

export default FeaturedHoodies;

