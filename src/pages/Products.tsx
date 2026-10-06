import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import UltraSmoothFade from '@/components/UltraSmoothFade';
import Footer from '@/components/Footer';

const Products = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: "1",
      title: "Valgara Tee",
      price: "750 EGP",
      image: "/images/1.png",
      isNew: true
    },
    {
      id: "2",
      title: "Heritage Tank",
      price: "750 EGP",
      image: "/images/2.png",
      isBestseller: true
    },
    {
      id: "3",
      title: "Limited  Hoodie",
      price: "750 EGP",
      image: "/images/3.png",
      isNew: true
    },
    {
      id: "4",
      title: "Signature Sweatshirt",
      price: "750 EGP",
      image: "/images/4.png",
      isBestseller: true
    }
  ];

  return (
    <div className="min-h-screen bg-valgara-charcoal">
      <Navigation />
      
      <div className="pt-12 sm:pt-16 lg:pt-12">
        <section className="pt-8 sm:pt-12 lg:pt-12 pb-32 sm:pb-40 lg:pb-48 bg-valgara-charcoal">
          <div className="container mx-auto px-6 sm:px-8 lg:px-4">
            <UltraSmoothFade>
              {/* Section Header - Minimal spacing for desktop */}
              <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                <div className="flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 px-4">
                  <span className="text-xl sm:text-2xl text-valgara-bronze mr-2 sm:mr-3">✦</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-valgara-white tracking-wider leading-tight text-center">
                    TEES COLLECTION
                  </h2>
                  <span className="text-xl sm:text-2xl text-valgara-bronze ml-2 sm:ml-3">✦</span>
                </div>
                <p className="text-valgara-gray text-base sm:text-lg max-w-sm sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-4">
                  Discover our collection of premium tees that embody the Valgara spirit.
                </p>
              </div>

              {/* Products Grid */}
              <div className="flex justify-center w-full">
                <div className="w-full max-w-[1400px] px-1 sm:px-4 lg:px-6">
                  {/* Mobile: 2 cards per row with minimal gaps, Desktop: Single row with all cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:flex-wrap gap-1 sm:gap-3 lg:gap-4">
                    {products.map((product, index) => (
                      <div key={index} className="lg:flex-1 lg:min-w-[260px] lg:max-w-[300px] xl:max-w-[320px]">
                        <ProductCard {...product} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </UltraSmoothFade>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products; 