
import React from 'react';
import UltraSmoothFade from './UltraSmoothFade';

const AboutSection = () => {
  const values = [
    {
      icon: (
        <div className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-700 ease-out">
          <img
            src="/images/Vision.png"
            alt="Visionary Direction"
            className="w-full h-full object-contain filter brightness-0 saturate-100 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              filter: 'brightness(0) saturate(100%) invert(65%) sepia(75%) saturate(800%) hue-rotate(5deg) brightness(115%) contrast(100%)'
            }}
          />
        </div>
      ),
      title: "Visionary Direction",
      description: "Leading the way with innovative designs that challenge conventional fashion."
    },
    {
      icon: (
        <div className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-700 ease-out">
          <img
            src="/images/crown.png"
            alt="Bold Elegance"
            className="w-full h-full object-contain filter brightness-0 saturate-100 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              filter: 'brightness(0) saturate(100%) invert(65%) sepia(75%) saturate(800%) hue-rotate(5deg) brightness(115%) contrast(100%)'
            }}
          />
        </div>
      ),
      title: "Bold Elegance",
      description: "Combining sophistication with fearless creativity in every piece."
    },
    {
      icon: (
        <div className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-700 ease-out">
          <img
            src="/images/creativity.png"
            alt="Fearless Creativity"
            className="w-full h-full object-contain filter brightness-0 saturate-100 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              filter: 'brightness(0) saturate(100%) invert(65%) sepia(75%) saturate(800%) hue-rotate(5deg) brightness(115%) contrast(100%)'
            }}
          />
        </div>
      ),
      title: "Fearless Creativity",
      description: "Pushing boundaries and redefining what fashion can be."
    }
  ];

  return (
    <>
      {/* Enhanced CSS Styling */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(184, 134, 11, 0.3), inset 0 0 20px rgba(184, 134, 11, 0.1); }
          50% { box-shadow: 0 0 40px rgba(184, 134, 11, 0.6), inset 0 0 30px rgba(184, 134, 11, 0.2); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #B8860B 0%, #FFD700 50%, #B8860B 100%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .value-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.6) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(184, 134, 11, 0.2);
          transition: all 0.5s ease;
        }
        
        .value-card:hover {
          transform: translateY(-8px);
          border-color: rgba(184, 134, 11, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(184, 134, 11, 0.2);
        }
        
        .decorative-lines {
          background: linear-gradient(90deg, transparent 0%, #B8860B 50%, transparent 100%);
          height: 1px;
        }
      `}</style>

      <section id="about" className="relative pt-12 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-valgara-green to-valgara-black overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-valgara-bronze/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-valgara-copper/20 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-valgara-bronze/20 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-valgara-copper/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-4 relative z-10">
          <UltraSmoothFade>
            {/* Enhanced Section Header */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="decorative-lines w-24 mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold shimmer-text mb-6 sm:mb-8 tracking-wider leading-tight">
                ABOUT VALGARA
              </h2>
              <div className="decorative-lines w-24 mx-auto"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
              {/* Enhanced Brand Story */}
              <div className="text-center px-4 sm:px-6 relative">
                <div className="absolute -top-4 -left-4 text-6xl text-valgara-bronze/20 font-serif">"</div>
                <div className="absolute -bottom-4 -right-4 text-6xl text-valgara-bronze/20 font-serif">"</div>
                <p className="text-lg sm:text-lg md:text-xl text-valgara-gray leading-relaxed font-light max-w-3xl mx-auto relative z-10 bg-valgara-charcoal/30 p-6 sm:p-8 rounded-lg backdrop-blur-sm border border-valgara-bronze/10">
                  In a world where identity is both armor and art, Valgara emerges as a symbol of bold elegance and fearless creativity. Born at the intersection of ancient soul and modern edge, Valgara is more than a brand—it's a movement that dares to redefine the extraordinary.
                </p>
              </div>

              {/* Enhanced Brand Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 px-4 sm:px-0">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="value-card text-center group space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-xl"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex justify-center float-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                      {value.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-valgara-bronze tracking-wide group-hover:text-valgara-copper transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-valgara-gray leading-relaxed text-sm sm:text-base px-2 sm:px-0 group-hover:text-valgara-white transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Enhanced Tagline Section */}
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-8 gap-4 h-full">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div key={i} className="border border-valgara-bronze rounded"></div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center pulse-glow bg-gradient-to-br from-valgara-charcoal/80 via-valgara-black/60 to-valgara-charcoal/80 py-12 sm:py-16 lg:py-20 px-8 sm:px-12 lg:px-16 rounded-2xl backdrop-blur-lg mx-4 sm:mx-0 border-2 border-valgara-bronze relative overflow-hidden">
                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-valgara-bronze"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-valgara-bronze"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-valgara-bronze"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-valgara-bronze"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 left-1/4 text-valgara-bronze/30 text-2xl float-animation">✦</div>
                  <div className="absolute top-12 right-1/4 text-valgara-copper/30 text-xl float-animation" style={{ animationDelay: '1s' }}>✧</div>
                  <div className="absolute bottom-8 left-1/3 text-valgara-bronze/30 text-lg float-animation" style={{ animationDelay: '2s' }}>✦</div>
                  <div className="absolute bottom-12 right-1/3 text-valgara-copper/30 text-xl float-animation" style={{ animationDelay: '1.5s' }}>✧</div>
                  
                  <div className="space-y-6 sm:space-y-8 relative z-10">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="decorative-lines w-16"></div>
                      <div className="text-4xl sm:text-5xl text-valgara-bronze">✦</div>
                      <div className="decorative-lines w-16"></div>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black shimmer-text tracking-wider leading-tight">
                      NOT MADE TO BLEND IN
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-valgara-gray text-lg sm:text-xl max-w-lg mx-auto leading-relaxed">
                        For visionaries who don't follow trends—they set them.
                      </p>
                      
                      {/* Additional styling elements */}
                      <div className="flex items-center justify-center space-x-2 text-valgara-bronze/60">
                        <span className="w-2 h-2 bg-valgara-bronze rounded-full"></span>
                        <span className="w-1 h-1 bg-valgara-copper rounded-full"></span>
                        <span className="w-2 h-2 bg-valgara-bronze rounded-full"></span>
                        <span className="w-1 h-1 bg-valgara-copper rounded-full"></span>
                        <span className="w-2 h-2 bg-valgara-bronze rounded-full"></span>
                      </div>
                      
                      <p className="text-valgara-bronze/80 text-sm sm:text-base font-medium tracking-widest uppercase">
                        BOLD • ELEGANT • FEARLESS
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <div className="decorative-lines w-12"></div>
                      <div className="text-2xl text-valgara-copper">✧</div>
                      <div className="decorative-lines w-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </UltraSmoothFade>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
