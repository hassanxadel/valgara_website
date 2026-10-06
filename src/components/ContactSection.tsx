
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';
import UltraSmoothFade from './UltraSmoothFade';

const ContactSection = () => {
  
  return (
    <section id="contact" className="py-4 sm:py-8 lg:py-12 bg-valgara-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <UltraSmoothFade>
            {/* Section Header */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <div className="text-3xl sm:text-4xl text-valgara-bronze mx-auto mb-3 sm:mb-4">✦</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-valgara-white mb-3 sm:mb-4 tracking-wider leading-tight">
                GET IN TOUCH
              </h2>
              <p className="text-valgara-gray text-sm sm:text-base leading-relaxed px-2">
                Join the movement. Share your vision. Be extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {/* Contact Form */}
              <div className="bg-valgara-charcoal px-4 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-6 rounded-lg border border-valgara-bronze/20">
                <form className="space-y-3 sm:space-y-4">
                  <div>
                    <Input
                      placeholder="Name"
                      className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Message"
                      rows={4}
                      className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-valgara-bronze hover:bg-valgara-copper text-valgara-black font-bold py-2 tracking-wide transition-all duration-300"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6">
                {/* Business Hours and Follow Us in same row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="text-center lg:text-left px-4 sm:px-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-valgara-bronze mb-3 sm:mb-4 tracking-wide">
                      BUSINESS HOURS
                    </h3>
                    <div className="text-valgara-white space-y-2 text-sm sm:text-base">
                      <p>Sunday - Thursday: 6:00 PM - 1:00 AM</p>
                      <p>Friday - Saturday: 9:00 AM - 1:00 AM</p>
                    </div>
                  </div>

                  <div className="text-center lg:text-left px-4 sm:px-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-valgara-bronze mb-3 sm:mb-4 tracking-wide">
                      FOLLOW US
                    </h3>
                    <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-4">
                      <a href="#" className="text-valgara-gray hover:text-valgara-bronze transition-colors duration-200 text-sm sm:text-base">
                        Instagram
                      </a>
                      <a href="#" className="text-valgara-gray hover:text-valgara-bronze transition-colors duration-200 text-sm sm:text-base">
                        TikTok
                      </a>
                    
                    </div>
                    {/* Decorative Element */}
                    <div className="text-center lg:text-left">
                      <div className="text-3xl sm:text-4xl text-valgara-bronze/20">✦</div>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left px-4 sm:px-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-valgara-bronze mb-3 sm:mb-4 tracking-wide flex items-center justify-center lg:justify-start">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    EMAIL
                  </h3>
                  <p className="text-valgara-white text-sm sm:text-base">valgara-eg@gmail.com</p>
                </div>
              </div>
            </div>
          </UltraSmoothFade>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
