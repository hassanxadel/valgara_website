
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';


const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    if (section === 'shop') {
      navigate('/products');
      return;
    }
    
    if (section === 'about') {
      navigate('/about');
      return;
    }
    
    navigate('/');
    setTimeout(() => {
      if (section !== 'home') {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <footer className="bg-valgara-charcoal py-8 sm:py-10 lg:py-12 relative border-t border-valgara-bronze">
      <div className="container mx-auto px-6 sm:px-8 lg:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 space-y-4 sm:space-y-6">
            <div onClick={handleLogoClick} className="cursor-pointer inline-block">
              <Logo size="md" />
            </div>
            <p className="text-valgara-gray text-sm sm:text-base leading-relaxed max-w-md">
              Crafted for those who lead with instinct and speak through style. 
              Valgara exists to inspire a new era of visionaries.
            </p>
            <div className="flex items-center text-valgara-bronze font-bold tracking-wider text-sm sm:text-base">
              <span className="text-base sm:text-lg mr-2">✦</span>
              NOT MADE TO BLEND IN
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-valgara-bronze font-bold tracking-wide text-sm sm:text-base">NAVIGATION</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><button onClick={() => handleNavigation('home')} className="text-valgara-gray hover:text-valgara-bronze transition-colors text-left text-sm sm:text-base">Home</button></li>
              <li><button onClick={() => handleNavigation('shop')} className="text-valgara-gray hover:text-valgara-bronze transition-colors text-left text-sm sm:text-base">Shop</button></li>
              <li><button onClick={() => handleNavigation('about')} className="text-valgara-gray hover:text-valgara-bronze transition-colors text-left text-sm sm:text-base">About</button></li>
              <li><button onClick={() => handleNavigation('contact')} className="text-valgara-gray hover:text-valgara-bronze transition-colors text-left text-sm sm:text-base">Contact</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-valgara-bronze/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-valgara-gray text-xs sm:text-sm">
            © 2025 Valgara. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="text-valgara-gray hover:text-valgara-bronze transition-colors text-xs sm:text-sm">
              Instagram
            </a>
            <a href="#" className="text-valgara-gray hover:text-valgara-bronze transition-colors text-xs sm:text-sm">
              TikTok
            </a>
           
          </div>
        </div>

        {/* Decorative Star Watermark */}
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-4xl sm:text-5xl lg:text-6xl text-valgara-bronze/10 pointer-events-none">
          ✦
        </div>
      </div>
    </footer>
  );
};

export default Footer;
