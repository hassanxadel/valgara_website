import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-valgara-charcoal">
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 text-valgara-bronze">404</h1>
          <p className="text-xl text-valgara-gray mb-8">Oops! Page not found</p>
          <a 
            href="/" 
            className="bg-valgara-bronze hover:bg-valgara-copper text-valgara-black font-bold py-3 px-6 rounded transition-all duration-300 inline-block"
          >
            Return to Home
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
