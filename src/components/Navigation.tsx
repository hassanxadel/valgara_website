
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleNavigation = (section: string) => {
    if (section === 'shop') {
      navigate('/products');
      setIsOpen(false);
      return;
    }
    
    if (section === 'about') {
      navigate('/about');
      setIsOpen(false);
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
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'Shop', section: 'shop' },
    { name: 'About', section: 'about' },
    { name: 'Contact', section: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-valgara-black">
        <div className="container mx-auto px-6 sm:px-8 lg:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div onClick={handleHomeClick} className="cursor-pointer">
          <Logo size="sm" />
          </div>

          {/* Cart Icon and Menu Toggle */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Cart Icon with Badge */}
            <Button
              variant="ghost"
              size="sm"
              className="text-valgara-white hover:text-valgara-bronze relative p-2"
              onClick={() => {
                navigate('/cart');
                setIsOpen(false);
              }}
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-valgara-bronze text-valgara-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </span>
              )}
            </Button>
            
            {/* Menu button for all screen sizes */}
            <Button
              variant="ghost"
              size="sm"
              className="text-valgara-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </Button>
          </div>
        </div>

        {/* Navigation Overlay for All Screen Sizes */}
        <div className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          
          {/* Slide-in menu */}
          <div className="absolute top-0 left-0 h-full w-72 sm:w-80 md:w-96 bg-gradient-to-br from-valgara-black via-valgara-green to-valgara-charcoal shadow-2xl">
                         {/* Menu header */}
             <div className="flex items-center justify-between p-5 sm:p-6 md:p-8 border-b border-valgara-bronze/30">
               <div className="text-valgara-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide">Menu</div>
               <Button
                 variant="ghost"
                 size="sm"
                 className="text-valgara-white hover:text-valgara-bronze transition-all duration-200 p-1"
                  onClick={() => setIsOpen(false)}
                >
                 <X className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
               </Button>
             </div>
             
             {/* Menu items */}
             <div className="p-5 sm:p-6 md:p-8">
               <div className="flex flex-col space-y-1 sm:space-y-2 md:space-y-4">
                 {navLinks.map((link, index) => (
                   <button
                     key={link.name}
                     onClick={() => handleNavigation(link.section)}
                     className="text-valgara-white hover:text-valgara-bronze transition-all duration-300 font-medium py-2.5 sm:py-3 md:py-4 text-left text-base sm:text-lg md:text-xl relative group border-b border-valgara-bronze/20 hover:border-valgara-bronze/40"
                     style={{ animationDelay: `${index * 100}ms` }}
                   >
                     <span className="relative z-10">{link.name}</span>
                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                     <div className="absolute inset-0 bg-valgara-bronze/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                   </button>
              ))}
                 
                 {/* Enhanced decoration */}
                 <div className="mt-6 sm:mt-8 md:mt-12 pt-6 sm:pt-8 md:pt-12 border-t border-valgara-bronze/30">
                   <div className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6 mb-4 sm:mb-6 md:mb-8">
                     <span className="text-valgara-bronze text-lg sm:text-xl md:text-2xl animate-pulse">✦</span>
                     <span className="text-valgara-bronze text-lg sm:text-xl md:text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>✦</span>
                     <span className="text-valgara-bronze text-lg sm:text-xl md:text-2xl animate-pulse" style={{ animationDelay: '1s' }}>✦</span>
                   </div>
                   
                   {/* Additional content for larger screens */}
                   <div className="hidden sm:block text-center">
                     <p className="text-valgara-gray text-xs sm:text-sm tracking-widest mb-3 sm:mb-4">NOT MADE TO BLEND IN</p>
                     <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-valgara-bronze mx-auto"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navigation;
