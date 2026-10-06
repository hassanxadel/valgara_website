
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturedHoodies from '../components/FeaturedHoodies';
import FeaturedSets from '../components/FeaturedSets';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-valgara-black text-valgara-white">
      <Navigation />
      <main>
        <HeroSection />
        <section id="shop" className="py-8 sm:py-12 lg:py-16 pb-16 sm:pb-20 lg:pb-24 bg-valgara-charcoal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header - Centered alignment */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center justify-center mb-4 sm:mb-6 px-4">
                <span className="text-xl sm:text-2xl text-valgara-bronze mr-2 sm:mr-3">✦</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-valgara-white tracking-wider leading-tight text-center">
                  FEATURED COLLECTION
                </h2>
                <span className="text-xl sm:text-2xl text-valgara-bronze ml-2 sm:ml-3">✦</span>
              </div>
              <p className="text-valgara-gray text-base sm:text-lg max-w-sm sm:max-w-lg md:max-w-3xl mx-auto leading-relaxed px-4">
                Discover pieces that embody the Valgara spirit - bold, elegant, and unmistakably unique.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center justify-center">
              <FeaturedHoodies />
              <FeaturedSets />
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
