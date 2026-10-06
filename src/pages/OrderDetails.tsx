import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ShoppingBag, Truck } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface OrderItem {
  id: string;
  title: string;
  price: number;
  image: string;
  size: string;
  color?: string;
  quantity: number;
}

const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderItem: OrderItem | undefined = location.state?.orderItem;
  const orderItems: OrderItem[] | undefined = location.state?.orderItems;
  const passedSubtotal: number | undefined = location.state?.subtotal;
  const passedShippingCost: number | undefined = location.state?.shippingCost;
  const passedTotal: number | undefined = location.state?.total;



  // Handle both single item and multiple items from cart
  const items = orderItems || (orderItem ? [orderItem] : []);
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-valgara-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-valgara-white mb-4">Order Not Found</h1>
          <Button onClick={() => navigate('/cart')} className="bg-valgara-bronze hover:bg-valgara-copper text-valgara-black">
            Back to Cart
          </Button>
        </div>
      </div>
    );
  }

  const subtotal = passedSubtotal || items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = passedShippingCost || 60; // Fixed standard shipping cost
  const total = passedTotal || subtotal + shippingCost;

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! You will receive a confirmation email shortly.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-valgara-black via-valgara-green to-valgara-charcoal">
      <Navigation />
      
      <div className="pt-16 sm:pt-20">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-valgara-white hover:text-valgara-bronze flex items-center gap-2 mb-4 sm:mb-5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Product
          </Button>
          
          <div className="text-center mb-6 sm:mb-7">
            <div className="text-3xl sm:text-3xl text-valgara-bronze mx-auto mb-3 sm:mb-3">✦</div>
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-valgara-white tracking-wide">
              ORDER DETAILS
            </h1>
            <p className="text-sm sm:text-sm text-valgara-gray mt-2">Complete your order information</p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
            {/* Order Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleOrderSubmit} className="space-y-6 sm:space-y-7">
                {/* Customer Information */}
                <Card className="bg-valgara-charcoal border-valgara-bronze/20">
                  <CardHeader className="px-4 sm:px-5 py-4 sm:py-4">
                    <CardTitle className="text-valgara-bronze tracking-wide text-base sm:text-base">
                      CUSTOMER INFORMATION
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-5 py-3 sm:py-3 space-y-3 sm:space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3">
                      <div>
                        <Label className="text-valgara-white font-bold text-sm sm:text-sm">First Name *</Label>
                        <Input
                          required
                          className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze mt-1 text-sm sm:text-sm"
                          placeholder="Hassan"
                        />
                      </div>
                      <div>
                        <Label className="text-valgara-white font-bold text-sm sm:text-sm">Last Name *</Label>
                        <Input
                          required
                          className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze mt-1 text-sm sm:text-sm"
                          placeholder="Adel"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-valgara-white font-bold text-sm sm:text-sm">Email Address *</Label>
                      <Input
                        type="email"
                        required
                        className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze mt-1 text-sm sm:text-sm"
                        placeholder="Hassan@gmail.com"
                      />
                    </div>
                    <div>
                      <Label className="text-valgara-white font-bold text-sm sm:text-sm">Phone Number *</Label>
                      <Input
                        type="tel"
                        required
                        className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze mt-1 text-sm sm:text-sm"
                        placeholder="+20 1125717681"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card className="bg-valgara-charcoal border-valgara-bronze/20">
                  <CardHeader className="px-4 sm:px-5 py-4 sm:py-4">
                    <CardTitle className="text-valgara-bronze tracking-wide text-base sm:text-base">
                      SHIPPING ADDRESS
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-5 py-3 sm:py-3 space-y-3 sm:space-y-3">
                    <div>
                      <Label className="text-valgara-white font-bold text-sm sm:text-sm">Street Address *</Label>
                      <Input
                        required
                        className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze mt-1 text-sm sm:text-sm"
                        placeholder="B-8 Golfcity"
                      />
                    </div>
                    <div>
                      <Label className="text-valgara-white font-bold text-sm sm:text-sm">Apartment, Suite, etc. (Optional)</Label>
                      <Input
                        className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze mt-1 text-sm sm:text-sm"
                        placeholder="Apt 406"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3">
                      <div>
                        <Label className="text-valgara-white font-bold text-sm sm:text-sm">City *</Label>
                        <Input
                          required
                          className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze mt-1 text-sm sm:text-sm"
                          placeholder="Obour City"
                        />
                      </div>
                      <div>
                        <Label className="text-valgara-white font-bold text-sm sm:text-sm">Government *</Label>
                        <Input
                          required
                          className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze mt-1 text-sm sm:text-sm"
                          placeholder="Cairo"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3">
                      <div>
                        <Label className="text-valgara-white font-bold text-sm sm:text-sm">Postal Code *</Label>
                        <Input
                          required
                          className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze mt-1 text-sm sm:text-sm"
                          placeholder="11828"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Options */}
                <Card className="bg-valgara-charcoal border-valgara-bronze/20">
                  <CardHeader className="px-4 sm:px-5 py-4 sm:py-4">
                    <CardTitle className="text-valgara-bronze tracking-wide text-base sm:text-base">
                      SHIPPING METHOD
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-5 py-3 sm:py-3">
                    <div className="p-3 sm:p-3 border border-valgara-bronze/50 rounded-lg bg-valgara-bronze/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-2">
                          <div className="text-valgara-bronze">
                            <Truck className="w-4 h-4 sm:w-4 sm:h-4" />
                          </div>
                          <div>
                            <div className="text-valgara-white font-semibold text-sm sm:text-sm">Standard Shipping</div>
                            <div className="text-valgara-gray text-xs sm:text-xs">5-7 business days</div>
                          </div>
                        </div>
                        <div className="text-valgara-bronze font-bold text-sm sm:text-sm">
                          60 EGP
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card className="bg-valgara-charcoal border-valgara-bronze/20">
                  <CardHeader className="px-4 sm:px-5 py-4 sm:py-4">
                    <CardTitle className="text-valgara-bronze tracking-wide text-base sm:text-base">
                      PAYMENT METHOD
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-5 py-3 sm:py-3">
                    <div className="p-3 sm:p-3 border border-valgara-bronze/50 rounded-lg bg-valgara-bronze/10">
                      <div className="flex items-center gap-2 sm:gap-2">
                        <div className="text-valgara-bronze">
                          <ShoppingBag className="w-4 h-4 sm:w-4 sm:h-4" />
                        </div>
                        <div>
                          <div className="text-valgara-white font-semibold text-sm sm:text-sm">Cash on Delivery</div>
                          <div className="text-valgara-gray text-xs sm:text-xs">Pay when you receive your order</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Special Instructions */}
                <Card className="bg-valgara-charcoal border-valgara-bronze/20">
                  <CardHeader className="px-4 sm:px-5 py-4 sm:py-4">
                    <CardTitle className="text-valgara-bronze tracking-wide text-base sm:text-base">
                      SPECIAL INSTRUCTIONS
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-5 py-3 sm:py-3">
                    <Label className="text-valgara-white font-bold text-sm sm:text-sm">Delivery Notes (Optional)</Label>
                    <Textarea
                      className="bg-valgara-black border-valgara-gray/30 text-valgara-white placeholder:text-valgara-gray focus:border-valgara-bronze resize-none mt-1 text-sm sm:text-sm"
                      rows={3}
                      placeholder="Any special delivery instructions, preferred delivery time, etc..."
                    />
                  </CardContent>
                </Card>
              </form>
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
                  {/* Products */}
                  <div className="space-y-3 sm:space-y-3 max-h-64 overflow-y-auto">
                    {items.map((item, index) => (
                      <div key={`${item.id}-${item.size}-${index}`} className="flex gap-3 sm:gap-3 pb-3 border-b border-valgara-gray/20 last:border-0">
                        <div className="w-16 h-16 sm:w-16 sm:h-16 bg-valgara-black rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-valgara-white font-semibold text-sm sm:text-sm truncate">{item.title}</h3>
                          <p className="text-valgara-gray text-xs sm:text-xs">Size: {item.size}</p>
                          {item.color && (
                            <p className="text-valgara-gray text-xs sm:text-xs">Color: {item.color}</p>
                          )}
                          <p className="text-valgara-gray text-xs sm:text-xs">Qty: {item.quantity}</p>
                          <p className="text-valgara-bronze font-bold text-sm sm:text-sm">{item.price * item.quantity} EGP</p>
                        </div>
                      </div>
                    ))}
                  </div>

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

                  {/* Place Order Button */}
                  <Button
                    type="submit"
                    form="order-form"
                    onClick={handleOrderSubmit}
                    className="w-full bg-valgara-bronze hover:bg-valgara-copper text-valgara-black font-bold py-3 sm:py-3 text-base sm:text-base tracking-wide transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingBag className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                    PLACE ORDER - {total} EGP
                  </Button>

                  {/* Security Notice */}
                  <div className="text-center">
                    <p className="text-valgara-gray text-xs">
                      <span className="text-valgara-bronze">✦</span> Secure checkout protected by SSL encryption
                    </p>
                  </div>
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

export default OrderDetails;