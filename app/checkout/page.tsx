"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { MapPin, CreditCard, CheckCircle2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function CheckoutPage() {
  const router = useRouter();
  const { lines, totalPrice, totalItems, clearCart } = useCart();
  const { user } = useAuth();

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {
    if (user?.displayName) {
      setFullName(user.displayName);
    }
  }, [user]);

  const resolvedLines = lines
    .map((line) => ({
      product: products.find((p) => p.id === line.productId),
      quantity: line.quantity
    }))
    .filter((line) => Boolean(line.product));

  const shippingCost = totalPrice > 1500 || totalPrice === 0 ? 0 : (shippingMethod === "express" ? 120 : 60);
  const grandTotal = totalPrice + shippingCost;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to place an order");
      return;
    }

    setIsPlacingOrder(true);
    
    try {
      const orderData = {
        userId: user.uid,
        userEmail: user.email,
        shippingAddress: {
          fullName,
          phone,
          address,
          city,
          postalCode,
        },
        paymentMethod,
        items: resolvedLines.map(line => ({
          productId: line.product!.id,
          title: line.product!.title,
          price: line.product!.price,
          quantity: line.quantity,
          image: line.product!.image,
        })),
        subtotal: totalPrice,
        shippingCost,
        grandTotal,
        status: "pending",
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "orders"), orderData);
      
      setOrderPlaced(true);
      clearCart();
    } catch (error) {
      console.error("Error placing order:", error);
      alert("There was an error placing your order. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="max-w-content mx-auto px-4 py-16 text-center">
        <CheckCircle2 size={64} className="mx-auto text-green-500 mb-6" strokeWidth={1.5} />
        <h1 className="text-2xl font-bold text-[#424242] mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-500 mb-8">Thank you for your purchase. We will email you the order confirmation.</p>
        <button
          onClick={() => router.push("/")}
          className="bg-[#f57224] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#d0611e] transition-colors uppercase tracking-wider text-sm"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if (resolvedLines.length === 0) {
    return (
      <div className="max-w-content mx-auto px-4 py-16 text-center">
        <h1 className="text-xl font-bold text-ink mb-4">Your cart is empty</h1>
        <button
          onClick={() => router.push("/products")}
          className="bg-brand text-white px-6 py-3 rounded-md hover:bg-brand-600 transition-colors"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#eff0f5] min-h-[calc(100vh-140px)] py-6">
      <div className="max-w-content mx-auto px-4">
        <h1 className="text-2xl font-medium text-[#424242] mb-6">Checkout</h1>
        
        <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Forms */}
          <div className="flex-1 space-y-4">
            
            {/* Shipping Address */}
            <div className="bg-white p-5 shadow-sm rounded-sm">
              <div className="flex items-center gap-2 mb-4 text-[#424242] font-medium border-b pb-3">
                <MapPin size={20} className="text-[#f57224]" />
                Shipping Address
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] text-gray-600 mb-1">Full Name</label>
                  <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none rounded-sm" />
                </div>
                <div>
                  <label className="block text-[13px] text-gray-600 mb-1">Phone Number</label>
                  <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none rounded-sm" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[13px] text-gray-600 mb-1">Detailed Address</label>
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="House/Apartment, Street, Area" className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none rounded-sm" />
                </div>
                <div>
                  <label className="block text-[13px] text-gray-600 mb-1">City</label>
                  <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none rounded-sm" />
                </div>
                <div>
                  <label className="block text-[13px] text-gray-600 mb-1">Postal Code</label>
                  <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none rounded-sm" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-5 shadow-sm rounded-sm">
              <div className="flex items-center gap-2 mb-4 text-[#424242] font-medium border-b pb-3">
                <CreditCard size={20} className="text-[#f57224]" />
                Select Payment Method
              </div>
              <div className="space-y-3">
                <label className={`flex items-center gap-3 p-3 border rounded-sm cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-[#f57224] bg-orange-50/30' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="cod" 
                    checked={paymentMethod === 'cod'} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-[#f57224] focus:ring-[#f57224]"
                  />
                  <div className="text-sm">
                    <p className="font-medium text-[#424242]">Cash on Delivery</p>
                    <p className="text-gray-500 text-[12px]">Pay when you receive the order</p>
                  </div>
                </label>
                <label className={`flex items-center gap-3 p-3 border rounded-sm cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-[#f57224] bg-orange-50/30' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="card" 
                    checked={paymentMethod === 'card'} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-[#f57224] focus:ring-[#f57224]"
                  />
                  <div className="text-sm">
                    <p className="font-medium text-[#424242]">Credit / Debit Card</p>
                    <p className="text-gray-500 text-[12px]">Visa, Mastercard, AMEX</p>
                  </div>
                </label>
              </div>

              {paymentMethod === 'card' && (
                <div className="mt-4 grid grid-cols-2 gap-4 border-t pt-4">
                  <div className="col-span-2">
                    <label className="block text-[13px] text-gray-600 mb-1">Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-[13px] text-gray-600 mb-1">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-[13px] text-gray-600 mb-1">CVC</label>
                    <input type="text" placeholder="123" className="w-full border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none rounded-sm" />
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white p-5 shadow-sm rounded-sm sticky top-6">
              <h2 className="text-[#424242] font-medium mb-4 border-b pb-3">Order Summary</h2>
              
              <div className="space-y-4 mb-4 border-b pb-4 max-h-[300px] overflow-y-auto">
                {resolvedLines.map(line => (
                  <div key={line.product!.id} className="flex gap-3">
                    <div className="relative w-12 h-12 shrink-0 border rounded-sm overflow-hidden">
                      <Image src={line.product!.image} alt={line.product!.title} fill className="object-cover" unoptimized />
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] text-[#424242] line-clamp-2 leading-tight">{line.product!.title}</p>
                      <div className="flex justify-between items-center mt-1 text-[13px]">
                        <span className="text-gray-500">Qty: {line.quantity}</span>
                        <span className="font-medium text-[#f57224]">{formatPrice(line.product!.price)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-sm mb-4 border-b pb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} Items)</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Fee</span>
                  <span>{shippingCost === 0 ? "Free" : formatPrice(shippingCost)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-6">
                <span className="text-gray-800">Total</span>
                <div className="text-right">
                  <span className="text-xs text-gray-500 block mb-0.5">VAT included, where applicable</span>
                  <span className="text-lg font-bold text-[#f57224]">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isPlacingOrder}
                className="w-full bg-[#f57224] text-white font-medium rounded-sm py-3 hover:bg-[#d0611e] transition-colors uppercase tracking-wider text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPlacingOrder ? "Processing..." : "Place Order"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
