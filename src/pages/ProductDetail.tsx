import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, ShoppingBag, Star, Ruler, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Color options
  const colors = [
    { name: 'Green', value: 'green', hex: '#16a34a' },
    { name: 'Black', value: 'black', hex: '#000000' },
    { name: 'Grey', value: 'grey', hex: '#6b7280' }
  ];

  // Size chart data (in cm)
  const sizeChart = {
    'XS': { chest: 88, length: 66, shoulder: 42 },
    'S': { chest: 92, length: 68, shoulder: 44 },
    'M': { chest: 96, length: 70, shoulder: 46 },
    'L': { chest: 100, length: 72, shoulder: 48 },
    'XL': { chest: 104, length: 74, shoulder: 50 },
    'XXL': { chest: 108, length: 76, shoulder: 52 }
  };

  // Product data - in a real app, this would come from an API
  const products = [
    {
      id: '1',
      title: "Valgara Tee",
      price: 750,
      images: ["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png"],
      isNew: true,
      features: ["Premium cotton blend", "Signature crown design", "Comfortable fit"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
      id: '2',
      title: "Heritage Tank",
      price: 750,
      images: ["/images/2.png", "/images/3.png", "/images/4.png", "/images/1.png"],
      isBestseller: true,
      features: ["Lightweight fabric", "Breathable material", "Vintage-inspired design"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: '3',
      title: "Limited  Hoodie",
      price: 750,
      images: ["/images/3.png", "/images/4.png", "/images/1.png", "/images/2.png"],
      isNew: true,
      features: ["Limited edition design", "Premium fleece interior", "Adjustable hood"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: '4',
      title: "Signature Sweatshirt",
      price: 750,
      images: ["/images/4.png", "/images/1.png", "/images/2.png", "/images/3.png"],
      isBestseller: true,
      features: ["Signature design", "Soft cotton blend", "Ribbed cuffs and hem"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    }
  ];

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-valgara-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-valgara-white mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-valgara-bronze hover:bg-valgara-copper text-valgara-black">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const totalPrice = product.price * quantity;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: quantity
    });

    // Navigate to cart page
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-valgara-black via-valgara-green to-valgara-charcoal">
      <Navigation />
      
      <div className="pt-12 sm:pt-14">
        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3">
          <Button
            variant="ghost"
            onClick={() => navigate('/products')}
            className="text-valgara-white hover:text-valgara-bronze flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Button>
        </div>

        {/* Product Section */}
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Product Image */}
            <div className="space-y-4">
              {/* Main Product Image */}
              <div className="aspect-square bg-valgara-charcoal rounded-lg overflow-hidden max-w-sm mx-auto lg:max-w-md relative">
                <img
                  src={product.images[currentImageIndex]}
                  alt={`${product.title} - View ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Counter Badge */}
                <div className="absolute top-3 right-3 bg-valgara-black/70 backdrop-blur-sm text-valgara-white px-2 py-1 rounded-full text-xs font-medium">
                  {currentImageIndex + 1} / {product.images.length}
                </div>
              </div>
              
              {/* Enhanced Thumbnail Navigation */}
              <div className="flex justify-center gap-2 px-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      currentImageIndex === index 
                        ? 'border-valgara-bronze shadow-lg shadow-valgara-bronze/30' 
                        : 'border-valgara-gray/30 hover:border-valgara-bronze/60'
                    }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    {currentImageIndex === index && (
                      <div className="absolute inset-0 bg-valgara-bronze/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-valgara-bronze rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-3 sm:space-y-4 max-w-xl">
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                  <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-valgara-white tracking-wide">
                    {product.title}
                  </h1>
                  {product.isNew && (
                    <span className="bg-valgara-bronze text-valgara-black px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold rounded">
                      NEW
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-valgara-green text-valgara-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold rounded flex items-center gap-1">
                      <span className="text-lg">✦</span> BESTSELLER
                    </span>
                  )}
                </div>
                <p className="text-xl sm:text-xl font-bold text-valgara-bronze">{product.price} EGP</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-valgara-white font-bold mb-1 sm:mb-2">Features:</h3>
                <ul className="space-y-0 sm:space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-valgara-gray text-sm sm:text-sm flex items-center gap-2">
                      <span className="text-valgara-bronze">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-valgara-white font-bold mb-1 sm:mb-2">Color:</h3>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border-3 transition-all hover:scale-110 ${
                        selectedColor === color.value
                          ? 'border-valgara-bronze'
                          : 'border-valgara-gray hover:border-valgara-bronze'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.value && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-2 sm:h-2 bg-white rounded-full opacity-80"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                {selectedColor && (
                  <p className="text-valgara-bronze text-xs sm:text-xs mt-1 capitalize">
                    Selected: {colors.find(c => c.value === selectedColor)?.name}
                  </p>
                )}
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <h3 className="text-valgara-white font-bold">Size:</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-valgara-bronze hover:text-valgara-white flex items-center gap-1 text-xs sm:text-xs"
                      >
                        <Ruler className="w-3 h-3 sm:w-3 sm:h-3" />
                        Size Chart
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-valgara-charcoal border-valgara-gray max-w-[90vw] sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-valgara-white">Size Chart (cm)</DialogTitle>
                      </DialogHeader>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs sm:text-xs">
                          <thead>
                            <tr className="border-b border-valgara-gray">
                              <th className="text-left py-2 text-valgara-white font-bold">Size</th>
                              <th className="text-left py-2 text-valgara-white font-bold">Chest</th>
                              <th className="text-left py-2 text-valgara-white font-bold">Length</th>
                              <th className="text-left py-2 text-valgara-white font-bold">Shoulder</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(sizeChart).map(([size, measurements]) => (
                              <tr key={size} className="border-b border-valgara-gray/30">
                                <td className="py-2 text-valgara-bronze font-bold">{size}</td>
                                <td className="py-2 text-valgara-gray">{measurements.chest}</td>
                                <td className="py-2 text-valgara-gray">{measurements.length}</td>
                                <td className="py-2 text-valgara-gray">{measurements.shoulder}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-1 sm:py-1 px-1 sm:px-2 border-2 font-bold transition-all text-xs sm:text-sm ${
                        selectedSize === size
                          ? 'border-valgara-bronze bg-valgara-bronze text-valgara-black'
                          : 'border-valgara-gray text-valgara-gray hover:border-valgara-bronze hover:text-valgara-bronze'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-valgara-white font-bold mb-1 sm:mb-2">Quantity:</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 sm:w-7 sm:h-7 border-2 border-valgara-gray text-valgara-white hover:border-valgara-bronze hover:text-valgara-bronze font-bold"
                  >
                    -
                  </button>
                  <span className="text-valgara-white font-bold text-base sm:text-base w-6 sm:w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 sm:w-7 sm:h-7 border-2 border-valgara-gray text-valgara-white hover:border-valgara-bronze hover:text-valgara-bronze font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="border-t border-valgara-gray pt-3 sm:pt-4 mt-2 sm:mt-3">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-valgara-white text-base sm:text-base">Total:</span>
                  <span className="text-valgara-bronze text-lg sm:text-lg font-bold">{totalPrice} EGP</span>
                </div>
                
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-valgara-bronze hover:bg-valgara-copper text-valgara-black font-bold py-2 sm:py-2 text-base sm:text-base tracking-wide transition-all duration-300 hover:scale-105"
                >
                  <ShoppingBag className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                  ORDER NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;