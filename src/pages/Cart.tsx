import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ShoppingBag, Trash2, Plus, Minus, Truck, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  const shippingCost = 60; // Fixed standard shipping cost
  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    // Navigate to order details with cart items
    navigate('/order', { 
      state: { 
        orderItems: cartItems,
        subtotal,
        shippingCost,
        total
      } 
    });
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-valgara-black via-valgara-green to-valgara-charcoal">
        <Navigation />
        <div className="pt-16 sm:pt-20 pb-8 sm:pb-10">
          <div className="container mx-auto px-4 sm:px-6">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="text-valgara-white hover:text-valgara-bronze flex items-center gap-2 mb-6 sm:mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <div className="max-w-2xl mx-auto text-center py-12 sm:py-16">
              <div className="mb-6 sm:mb-8">
                <ShoppingBag className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-valgara-bronze/50 mb-4" />
                <div className="text-4xl sm:text-5xl text-valgara-bronze mb-2">✦</div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-valgara-white tracking-wide mb-3">
                  YOUR CART IS EMPTY
                </h1>
                <p className="text-valgara-gray text-sm sm:text-base">
                  Looks like you haven't added anything to your cart yet.
                </p>
              </div>
              <Button
                onClick={handleContinueShopping}
                className="bg-valgara-bronze hover:bg-valgara-copper text-valgara-black font-bold py-3 sm:py-3 px-6 sm:px-8 text-base sm:text-base tracking-wide transition-all duration-300 hover:scale-105"
              >
                <ShoppingBag className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-valgara-black via-valgara-green to-valgara-charcoal">
      <Navigation />
      
      <div className="pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-valgara-white hover:text-valgara-bronze flex items-center gap-2 mb-4 sm:mb-5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-3xl sm:text-3xl text-valgara-bronze mx-auto mb-3 sm:mb-3">✦</div>
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-valgara-white tracking-wide">
              YOUR CART
            </h1>
            <p className="text-sm sm:text-sm text-valgara-gray mt-2">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              {cartItems.map((item, index) => {
                const itemTotal = item.price * item.quantity;
                return (
                  <Card 
                    key={`${item.id}-${item.size}-${item.color}-${index}`}
                    className="bg-valgara-charcoal border-valgara-bronze/20 hover:border-valgara-bronze/40 transition-all duration-300"
                  >
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                        {/* Product Image */}
                        <div className="w-full sm:w-32 h-32 sm:h-32 bg-valgara-black rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-valgara-white font-bold text-base sm:text-lg mb-2">
                              {item.title}
                            </h3>
                            <div className="space-y-1 mb-3">
                              <p className="text-valgara-gray text-sm">
                                Size: <span className="text-valgara-white">{item.size}</span>
                              </p>
                              <p className="text-valgara-gray text-sm">
                                Color: <span className="text-valgara-white capitalize">{item.color}</span>
                              </p>
                            </div>
                            <p className="text-valgara-bronze font-bold text-lg sm:text-xl">
                              {item.price} EGP
                            </p>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                                className="h-8 w-8 sm:h-9 sm:w-9 border-valgara-bronze/30 hover:border-valgara-bronze hover:bg-valgara-bronze/10 text-valgara-white"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="text-valgara-white font-semibold text-base sm:text-lg min-w-[2rem] text-center">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                                className="h-8 w-8 sm:h-9 sm:w-9 border-valgara-bronze/30 hover:border-valgara-bronze hover:bg-valgara-bronze/10 text-valgara-white"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>

                            {/* Item Total */}
                            <div className="text-right">
                              <p className="text-valgara-gray text-sm mb-1">Item Total</p>
                              <p className="text-valgara-bronze font-bold text-lg sm:text-xl">
                                {itemTotal} EGP
                              </p>
                            </div>

                            {/* Remove Button */}
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(item.id, item.size, item.color)}
                              className="h-8 w-8 sm:h-9 sm:w-9 text-valgara-gray hover:text-red-500 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Continue Shopping Button */}
              <div className="pt-2">
                <Button
                  variant="outline"
                  onClick={handleContinueShopping}
                  className="w-full border-valgara-bronze/30 hover:border-valgara-bronze hover:bg-valgara-bronze/10 text-valgara-white"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-valgara-charcoal border-valgara-bronze/20 sticky top-24">
                <CardHeader className="px-4 sm:px-5 py-4 sm:py-4">
                  <CardTitle className="text-valgara-bronze tracking-wide text-base sm:text-base">
                    ORDER SUMMARY
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-5 py-3 sm:py-3 space-y-4 sm:space-y-5">
                  {/* Price Breakdown */}
                  <div className="border-t border-valgara-gray/30 pt-3 sm:pt-3 space-y-2 sm:space-y-2">
                    {/* Subtotal */}
                    <div className="flex justify-between">
                      <span className="text-valgara-gray text-sm sm:text-sm">Subtotal:</span>
                      <span className="text-valgara-white text-sm sm:text-sm">{subtotal} EGP</span>
                    </div>

                    {/* Shipping */}
                    <div className="flex justify-between">
                      <span className="text-valgara-gray text-sm sm:text-sm">Shipping:</span>
                      <span className="text-valgara-white text-sm sm:text-sm">{shippingCost} EGP</span>
                    </div>
                    <div className="text-xs text-valgara-gray pl-2 sm:pl-2">
                      Standard Shipping - 5-7 business days
                    </div>

                    {/* Total */}
                    <div className="border-t border-valgara-gray/30 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-valgara-white font-bold text-base sm:text-base">Total:</span>
                        <span className="text-valgara-bronze font-bold text-lg sm:text-lg">{total} EGP</span>
                      </div>
                    </div>
                  </div>

                  {/* Estimated Delivery */}
                  <div className="bg-valgara-black p-3 sm:p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1 sm:mb-1">
                      <Truck className="w-3 h-3 sm:w-3 sm:h-3 text-valgara-bronze" />
                      <span className="text-valgara-white font-semibold text-xs sm:text-xs">Estimated Delivery</span>
                    </div>
                    <p className="text-valgara-gray text-xs sm:text-xs">5-7 business days</p>
                  </div>

                  {/* Checkout Button */}
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-valgara-bronze hover:bg-valgara-copper text-valgara-black font-bold py-3 sm:py-3 text-base sm:text-base tracking-wide transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingBag className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                    PROCEED TO CHECKOUT
                  </Button>

                  {/* Security Notice */}
                  <div className="text-center">
                    <p className="text-valgara-gray text-xs flex items-center justify-center gap-1">
                      <Shield className="w-3 h-3 text-valgara-bronze" />
                      <span>Secure checkout protected by SSL encryption</span>
                    </p>
                  </div>

                  {/* Clear Cart Button */}
                  <Button
                    variant="ghost"
                    onClick={clearCart}
                    className="w-full text-valgara-gray hover:text-red-500 hover:bg-red-500/10 text-sm"
                  >
                    Clear Cart
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;

