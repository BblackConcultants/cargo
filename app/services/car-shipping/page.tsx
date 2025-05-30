'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CarShippingPage() {
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fromCountry: 'United Kingdom',
    toCountry: '',
    carMake: '',
    carModel: '',
    year: '',
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
      const sections = ['overview', 'services', 'advantages', 'destinations', 'quote'];
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
          src="/images/vehicle-hero.jpg"
          alt="Car Shipping Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">International Car Shipping</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">Safe and secure vehicle transport worldwide</p>
            <Link
              href="https://shippingcarsworldwide.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#f47521] text-white font-semibold rounded-lg hover:bg-[#f47521]/90 transition-colors duration-300"
            >
              Ship Your Vehicle Now
            </Link>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#283694] mb-6">About Our Car Shipping Service</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We specialize in international car shipping, offering comprehensive vehicle transport solutions worldwide. Our service ensures your vehicle reaches its destination safely, securely, and on time.
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Door-to-door vehicle transport
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full insurance coverage
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Customs clearance assistance
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/vehicle-hero.jpg"
                alt="Car Shipping Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#283694] mb-12">Our Car Shipping Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-[#283694] mb-4">Container Shipping</h3>
              <p className="text-gray-600">Secure container shipping for your vehicle with maximum protection from the elements.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-[#283694] mb-4">RoRo Shipping</h3>
              <p className="text-gray-600">Roll-on/Roll-off shipping service for cost-effective vehicle transport.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-[#283694] mb-4">Air Freight</h3>
              <p className="text-gray-600">Premium air freight service for urgent vehicle deliveries worldwide.</p>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote" className="bg-gray-50 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-[#283694] mb-8">Request a Quote</h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fromCountry" className="block text-sm font-medium text-gray-700 mb-2">From Country</label>
                  <input
                    type="text"
                    id="fromCountry"
                    name="fromCountry"
                    value={formData.fromCountry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  />
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="carMake" className="block text-sm font-medium text-gray-700 mb-2">Car Make</label>
                  <input
                    type="text"
                    id="carMake"
                    name="carMake"
                    value={formData.carMake}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-2">Car Model</label>
                  <input
                    type="text"
                    id="carModel"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
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
