'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PackingItem {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}

const packingMaterials: PackingItem[] = [
  {
    id: 1,
    name: 'Small Box',
    description: 'Perfect for books, electronics, and small items',
    price: 3.99,
    icon: (
      <svg className="w-24 h-24 text-[#283694]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Medium Box',
    description: 'Ideal for clothing, kitchenware, and medium-sized items',
    price: 5.99,
    icon: (
      <svg className="w-24 h-24 text-[#283694]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v10" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'Large Box',
    description: 'Great for bedding, large appliances, and bulky items',
    price: 7.99,
    icon: (
      <svg className="w-24 h-24 text-[#283694]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v10M8 9v6M16 9v6" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Bubble Wrap (10m)',
    description: 'Protect fragile items with our high-quality bubble wrap',
    price: 4.99,
    icon: (
      <svg className="w-24 h-24 text-[#283694]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="16" r="2" />
        <circle cx="8" cy="16" r="2" />
        <circle cx="16" cy="8" r="2" />
        <circle cx="12" cy="12" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h18v18H3z" />
      </svg>
    )
  },
  {
    id: 5,
    name: 'Packing Tape (50m)',
    description: 'Strong adhesive tape for secure packaging',
    price: 2.99,
    icon: (
      <svg className="w-24 h-24 text-[#283694]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v8m-4-4h8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 6,
    name: 'Wardrobe Box',
    description: 'Specially designed for hanging clothes',
    price: 12.99,
    icon: (
      <svg className="w-24 h-24 text-[#283694]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v2m-4 0h8" />
      </svg>
    )
  }
];

export default function PackingMaterialsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    deliveryDate: '',
    specialInstructions: ''
  });

  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    packingMaterials.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const handleQuantityChange = (id: number, value: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, value)
    }));
  };

  const calculateTotal = () => {
    return packingMaterials.reduce((total, item) => {
      return total + (quantities[item.id] * item.price);
    }, 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderDetails = {
      ...formData,
      items: packingMaterials
        .filter(item => quantities[item.id] > 0)
        .map(item => ({
          name: item.name,
          quantity: quantities[item.id],
          price: item.price,
          total: quantities[item.id] * item.price
        })),
      totalAmount: calculateTotal()
    };
    console.log('Order submitted:', orderDetails);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <Image
          src="/images/packaging-hero.jpg"
          alt="Packing Materials"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Packing Materials</h1>
            <p className="text-xl max-w-2xl mx-auto">High-quality packing supplies for safe shipping</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {/* Products Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#283694] mb-8">Available Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {packingMaterials.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-center items-center h-48 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#283694] mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#f47521]">£{item.price.toFixed(2)}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(item.id, quantities[item.id] - 1)}
                        className="text-gray-500 hover:text-[#f47521]"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <input
                        type="number"
                        value={quantities[item.id]}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                        className="w-16 text-center border rounded-md"
                        min="0"
                      />
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(item.id, quantities[item.id] + 1)}
                        className="text-gray-500 hover:text-[#f47521]"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold text-[#283694] mb-6">Order Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">Postcode</label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-2">Preferred Delivery Date</label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
                  <textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                  ></textarea>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold mb-4">
                    <span>Total:</span>
                    <span className="text-[#f47521]">£{calculateTotal().toFixed(2)}</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#f47521] text-white py-3 rounded-md hover:bg-[#f47521]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f47521]"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
