import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const HeroSection = () => {
  const navigate = useNavigate();
  
  // Generate random stars for twinkling effect
  const generateStars = () => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 4, // Bigger stars (4-6px)
      animationDelay: Math.random() * 3,
    }));
  };

  // Generate shooting stars positions with better performance
  const generateShootingStars = () => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 80 + 10, // 10-90% to keep them on screen
      top: -20 - Math.random() * 30, // Start from outside viewport (negative values)
      animationDelay: i * 0.2, // Staggered delays with shorter intervals
      animationDuration: 5 + Math.random() * 4, // Variable duration between 5-9s for slower motion
    }));
  };

  const [stars] = useState(generateStars);
  const [shootingStars] = useState(generateShootingStars);

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%{ 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.5);
          }
          100% { 
            opacity: 0.3;
            transform: scale(1);
          }
        }

        @keyframes shootingStar {
          0% {
            transform: translate3d(-20vh, -20vh, 0) rotate(-30deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          40% {
            opacity: 0.5;
          }
          60% {
            opacity: 0;
          }
        
          100% {
            transform: translate3d(120vh, 200vh, 0) rotate(-30deg);
            opacity: 0;
          }
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
          will-change: opacity, transform;
        }

        .shooting-star {
          position: absolute;
          width: 2px;
          height: 40px;
          background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
          transform-origin: bottom center;
          will-change: transform, opacity;
          animation-fill-mode: forwards;
          pointer-events: none;
        }

        .shooting-star.animate {
          animation: shootingStar 5s ease-out infinite;
        }

        .shooting-star::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.7);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-twinkle,
          .shooting-star {
            animation: none !important;
          }
        }

        /* Performance optimizations */
        .stars-container {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Hero section background styling with map image */
        .hero-section {
          /* Fallback solid background color */
          background-color: #0f0f0f;
          
          /* Primary gradient background (fallback if image fails) */
          background: linear-gradient(135deg, #0f0f0f 0%, #1a2a1a 50%, #171717 100%);
          
          /* Map image with low opacity gradient overlay */
          background-image: 
            linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(26, 42, 26, 0.97) 50%, rgba(23, 23, 23, 0.97) 100%),
            url('/images/map.jpg');
          
          /* Image positioning and sizing */
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        
        /* Responsive background attachment for mobile devices */
        @media (max-width: 768px) {
          .hero-section {
            background-attachment: scroll;
          }
        }
      `}</style>
      
      <section 
        id="home" 
        className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Shining Stars Background */}
        <div className="absolute inset-0 pointer-events-none stars-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute text-white animate-twinkle"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                fontSize: `${star.size}px`,
                animationDelay: `${star.animationDelay}s`,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        {/* Shooting Stars */}
        <div className="absolute inset-0 pointer-events-none stars-container">
          {shootingStars.map((shootingStar) => (
            <div
              key={shootingStar.id}
              className="shooting-star animate"
              style={{
                left: `${shootingStar.left}%`,
                top: `${shootingStar.top}%`,
                animationDelay: `${shootingStar.animationDelay}s`,
                animationDuration: `${shootingStar.animationDuration}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-4 text-center relative z-10 pt-12 sm:pt-16">
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            {/* Main Logo */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28">
                  <Logo showText={false} className="justify-center w-full h-full" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-wider text-valgara-bronze leading-tight">
                VALGARA
              </h1>
              
              {/* Stars Image between VALGARA and tagline */}
              <div className="flex justify-center">
                <img
                  src="/images/starts.png"
                  alt="Stars decoration"
                  className="w-28 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto opacity-80"
                />
              </div>
            </div>

            {/* Hero Tagline */}
            <div className="space-y-3 sm:space-y-4 px-4 sm:px-6">
              <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-valgara-white tracking-wide leading-tight">
                NOT MADE TO BLEND IN
              </h2>
              <p className="text-lg sm:text-base md:text-lg lg:text-xl text-valgara-gray max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
                Crafted for those who lead with instinct and speak through style, Valgara exists to inspire a new era of visionaries.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-3 sm:pt-4 pb-4 sm:pb-6">
              <Button
                size="lg"
                onClick={() => {
                  navigate('/products');
                }}
                className="btn-enhance bg-valgara-bronze hover:bg-valgara-copper text-valgara-black font-bold py-5 px-10 sm:py-4 sm:px-8 text-xl sm:text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-valgara-bronze/25"
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default HeroSection;
