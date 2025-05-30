'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ExcessBaggagePage() {
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fromCountry: 'United Kingdom',
    toCountry: '',
    baggageType: '',
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
      const sections = ['overview', 'services', 'advantages', 'pricing', 'quote'];
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
          src="/images/baggage-hero.jpg"
          alt="Excess Baggage Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Excess Baggage Shipping</h1>
            <p className="text-xl max-w-2xl mx-auto">Cost-effective solutions for shipping your excess baggage worldwide</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#283694] mb-6">About Our Excess Baggage Service</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We provide a cost-effective service for individuals sending excess baggage overseas. Sending excess baggage via leading airlines can be expensive, with charges as high as $60 per kilo to Australia and New Zealand from the UK.
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Competitive pricing
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fast transit times
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
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-[#283694] mb-6">Service Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-[#21a6a6] mb-2">What is Excess Baggage?</h4>
                  <p className="text-gray-600">
                    Excess baggage is usually defined as luggage that is heavier than the advertised allowance with the airline you are travelling with. Most airlines have set charges in place for baggage that exceeds this allowance, however these prices can often be expensive.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#21a6a6] mb-2">Shipping Options</h4>
                  <p className="text-gray-600">
                    We offer multiple shipping options for your excess baggage:
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Air Freight - Fast delivery within days</li>
                    <li>• Sea Freight - Cost-effective for larger shipments</li>
                    <li>• Road Freight - Efficient European delivery</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#21a6a6] mb-2">Tracking Service</h4>
                  <p className="text-gray-600">
                    With our excess baggage air freight service, you can track your luggage as it makes its way to its destination, giving you complete peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#283694] mb-6">Get an Excess Baggage Quote</h2>
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
                  <label htmlFor="baggageType" className="block text-sm font-medium text-gray-700 mb-2">Baggage Type</label>
                  <input
                    type="text"
                    id="baggageType"
                    name="baggageType"
                    value={formData.baggageType}
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
                  href="#services"
                  className={`flex items-center space-x-2 group ${activeSection === 'services' ? 'text-[#f47521]' : 'text-gray-600 hover:text-[#f47521]'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeSection === 'services' ? 'bg-[#f47521]' : 'bg-gray-300 group-hover:bg-[#f47521]'}`}></span>
                  <span className="text-sm font-medium">Services</span>
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
                  href="#pricing"
                  className={`flex items-center space-x-2 group ${activeSection === 'pricing' ? 'text-[#f47521]' : 'text-gray-600 hover:text-[#f47521]'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeSection === 'pricing' ? 'bg-[#f47521]' : 'bg-gray-300 group-hover:bg-[#f47521]'}`}></span>
                  <span className="text-sm font-medium">Pricing</span>
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
