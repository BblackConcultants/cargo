'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SeaFreightPage() {
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fromCountry: 'United Kingdom',
    toCountry: '',
    cargoType: '',
    weight: '',
    dimensions: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote requested:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'rates', 'advantages', 'restrictions', 'quote'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/sea-freight-hero.jpg"
          alt="Sea Freight Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Sea Freight Services</h1>
            <p className="text-xl max-w-2xl mx-auto">Efficient and cost-effective shipping solutions for your cargo needs</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#283694] mb-6">About Our Sea Freight Service</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our sea freight service is an efficient and financially viable option for transporting heavy packages or large items overseas. We specialize in shipping personal items worldwide at minimal expense to our customers.
                </p>

                <ul className="list-none space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Professional customs clearance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Complete documentation support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Worldwide shipping coverage
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <h3 className="text-2xl font-semibold text-[#283694] mb-6">Service Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-[#21a6a6] mb-2">Transit Times</h4>
                  <p className="text-gray-600">
                    Transit times typically range between eight to 12 weeks, depending on the final destination. Once your shipment is booked, you'll receive complete shipping details including vessel name, estimated arrival date, and agent contact information.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#21a6a6] mb-2">Cost Calculation</h4>
                  <p className="text-gray-600">
                    Sea freight shipments are charged per cubic metre, based on the volume of your shipment. For optimal cost-effectiveness, we recommend palletizing multiple packages into a single unit.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#21a6a6] mb-2">Palletization Service</h4>
                  <p className="text-gray-600">
                    We offer professional palletization at our warehouse, where we build your packages onto a strong wooden pallet base, wrap and strap them together for secure transport. This service costs just £25 per pallet.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#21a6a6] mb-2">Documentation</h4>
                  <p className="text-gray-600">
                    Each shipment requires a detailed Shipper's Inventory. Some destinations may also require additional documentation, such as a copy of the shipper's passport. We'll provide you with all necessary shipping documents, including the bill of lading.
                  </p>
                </div>
              </div>
            </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#283694] mb-6">Get a Sea Freight Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="fromCountry" className="block text-sm font-medium text-gray-700 mb-2">From Country</label>
                  <select
                    id="fromCountry"
                    name="fromCountry"
                    value={formData.fromCountry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                  >
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="toCountry" className="block text-sm font-medium text-gray-700 mb-2">To Country</label>
                  <input
                    type="text"
                    id="toCountry"
                    name="toCountry"
                    value={formData.toCountry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cargoType" className="block text-sm font-medium text-gray-700 mb-2">Cargo Type</label>
                  <input
                    type="text"
                    id="cargoType"
                    name="cargoType"
                    value={formData.cargoType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                ></textarea>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f47521] hover:bg-[#f47521]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f47521]"
                >
                  Request Quote
                </button>
              </div>
            </form>
          </div>

            {/* Additional Information */}
            <div className="bg-[#f8f9fa] rounded-lg p-8 mt-8">
              <h3 className="text-2xl font-semibold text-[#283694] mb-6">Important Information</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md border border-gray-100">
                  <h4 className="font-semibold text-[#21a6a6] mb-2">Packing Guidelines</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Eight carton 50s (45x45x50cms each) = 1 cubic metre</li>
                    <li>• Use appropriate box sizes to minimize empty spaces</li>
                    <li>• Aim for a flat-topped, cube-like pallet structure</li>
                    <li>• Custom cartons available for optimal stacking</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-md border border-gray-100">
                  <h4 className="font-semibold text-[#21a6a6] mb-2">Prohibited Items</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Dangerous goods and hazardous materials</li>
                    <li>• Valuable items (cash, jewelry, watches)</li>
                    <li>• Important documents and deeds</li>
                    <li>• Junk or waste materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <div className="hidden lg:block fixed right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-l-lg z-50">
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <a
                  href="#overview"
                  className={`flex items-center space-x-2 group ${activeSection === 'overview' ? 'text-[#f47521]' : 'text-gray-600 hover:text-[#f47521]'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeSection === 'overview' ? 'bg-[#f47521]' : 'bg-gray-300 group-hover:bg-[#f47521]'}`}></span>
                  <span className="text-sm font-medium">Overview</span>
                </a>
              </li>
              <li>
                <a
                  href="#rates"
                  className={`flex items-center space-x-2 group ${activeSection === 'rates' ? 'text-[#f47521]' : 'text-gray-600 hover:text-[#f47521]'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeSection === 'rates' ? 'bg-[#f47521]' : 'bg-gray-300 group-hover:bg-[#f47521]'}`}></span>
                  <span className="text-sm font-medium">Rates</span>
                </a>
              </li>
              <li>
                <a
                  href="#advantages"
                  className={`flex items-center space-x-2 group ${activeSection === 'advantages' ? 'text-[#f47521]' : 'text-gray-600 hover:text-[#f47521]'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeSection === 'advantages' ? 'bg-[#f47521]' : 'bg-gray-300 group-hover:bg-[#f47521]'}`}></span>
                  <span className="text-sm font-medium">Advantages</span>
                </a>
              </li>
              <li>
                <a
                  href="#restrictions"
                  className={`flex items-center space-x-2 group ${activeSection === 'restrictions' ? 'text-[#f47521]' : 'text-gray-600 hover:text-[#f47521]'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeSection === 'restrictions' ? 'bg-[#f47521]' : 'bg-gray-300 group-hover:bg-[#f47521]'}`}></span>
                  <span className="text-sm font-medium">Restrictions</span>
                </a>
              </li>
              <li>
                <a
                  href="#quote"
                  className={`flex items-center space-x-2 group ${activeSection === 'quote' ? 'text-[#f47521]' : 'text-gray-600 hover:text-[#f47521]'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeSection === 'quote' ? 'bg-[#f47521]' : 'bg-gray-300 group-hover:bg-[#f47521]'}`}></span>
                  <span className="text-sm font-medium">Get Quote</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
