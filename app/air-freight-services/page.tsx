'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function AirFreightServices() {
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
    // Handle form submission
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
      const sections = ['overview', 'destinations', 'rates', 'additional', 'services'];
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
    <div>
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
                href="#destinations"
                className={`flex items-center space-x-2 group ${activeSection === 'destinations' ? 'text-[#f47521]' : 'text-gray-600 hover:text-[#f47521]'}`}
              >
                <span className={`w-2 h-2 rounded-full ${activeSection === 'destinations' ? 'bg-[#f47521]' : 'bg-gray-300 group-hover:bg-[#f47521]'}`}></span>
                <span className="text-sm font-medium">Destinations</span>
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
                href="#additional"
                className={`flex items-center space-x-2 group ${activeSection === 'additional' ? 'text-[#f47521]' : 'text-gray-600 hover:text-[#f47521]'}`}
              >
                <span className={`w-2 h-2 rounded-full ${activeSection === 'additional' ? 'bg-[#f47521]' : 'bg-gray-300 group-hover:bg-[#f47521]'}`}></span>
                <span className="text-sm font-medium">Additional Info</span>
              </a>
            </li>
            <li>
              <a
                href="#quote"
                className={`flex items-center space-x-2 group ${activeSection === 'services' ? 'text-[#f47521]' : 'text-gray-600 hover:text-[#f47521]'}`}
              >
                <span className={`w-2 h-2 rounded-full ${activeSection === 'services' ? 'bg-[#f47521]' : 'bg-gray-300 group-hover:bg-[#f47521]'}`}></span>
                <span className="text-sm font-medium">Get a Quote</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/air-freight-hero.jpg"
            alt="Air Freight Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Air Freight Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Fast, reliable, and secure air freight solutions for your cargo
          </p>
          <Link
            href="#quote"
            className="inline-block bg-[#f47521] text-white px-8 py-3 rounded-md hover:bg-[#e06411] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#283694] mb-8">Air Freight Services Overview</h2>
            <div className="prose prose-lg">
              <p>
                Our comprehensive air freight services provide efficient and reliable solutions for your cargo transportation needs. Whether you're shipping time-sensitive materials, perishable goods, or valuable items, we ensure your cargo reaches its destination safely and on time.
              </p>
              <h3 className="text-xl font-semibold text-[#283694] mt-8 mb-4">Key Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Express and standard air freight options</li>
                <li>Door-to-door delivery services</li>
                <li>Real-time shipment tracking</li>
                <li>Customs clearance assistance</li>
                <li>Specialized handling for sensitive cargo</li>
                <li>Competitive rates and flexible solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#283694] mb-12 text-center">Our Global Network</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#283694] mb-4">Africa</h3>
              <ul className="space-y-2">
                <li>Nigeria</li>
                <li>Ghana</li>
                <li>Kenya</li>
                <li>South Africa</li>
                <li>And more...</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#283694] mb-4">Europe</h3>
              <ul className="space-y-2">
                <li>United Kingdom</li>
                <li>Germany</li>
                <li>France</li>
                <li>Netherlands</li>
                <li>And more...</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#283694] mb-4">Asia</h3>
              <ul className="space-y-2">
                <li>China</li>
                <li>Japan</li>
                <li>South Korea</li>
                <li>Singapore</li>
                <li>And more...</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section id="rates" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#283694] mb-8">Competitive Rates</h2>
            <div className="prose prose-lg">
              <p>
                We offer competitive rates for all our air freight services. Our pricing is transparent and based on factors such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Cargo weight and dimensions</li>
                <li>Destination</li>
                <li>Service type (express/standard)</li>
                <li>Special handling requirements</li>
              </ul>
              <p>
                Contact us for a detailed quote tailored to your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section id="additional" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#283694] mb-8">Additional Information</h2>
            <div className="prose prose-lg">
              <h3 className="text-xl font-semibold text-[#283694] mt-8 mb-4">Documentation Required</h3>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Commercial Invoice</li>
                <li>Packing List</li>
                <li>Certificate of Origin (if required)</li>
                <li>Dangerous Goods Declaration (if applicable)</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#283694] mt-8 mb-4">Restricted Items</h3>
              <p>
                Certain items may be restricted or prohibited for air transport. Please contact us for detailed information about restricted items and special handling requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#283694] mb-8">Request a Quote</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    />
                  </div>
                </div>

                {/* Shipment Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="fromCountry">
                      From Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="fromCountry"
                      name="fromCountry"
                      value={formData.fromCountry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    >
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="China">China</option>
                      <option value="Germany">Germany</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="toCountry">
                      To Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="toCountry"
                      name="toCountry"
                      value={formData.toCountry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    >
                      <option value="">Select a country</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="South Africa">South Africa</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Cargo Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="cargoType">
                      Cargo Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="cargoType"
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    >
                      <option value="">Select cargo type</option>
                      <option value="general">General Cargo</option>
                      <option value="perishable">Perishable Goods</option>
                      <option value="dangerous">Dangerous Goods</option>
                      <option value="valuable">Valuable Items</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Weight */}
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="weight">
                      Approximate Weight (kg) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 100"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    />
                  </div>

                  {/* Dimensions */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2" htmlFor="dimensions">
                      Dimensions (L x W x H) cm
                    </label>
                    <input
                      type="text"
                      id="dimensions"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleChange}
                      placeholder="e.g., 100 x 50 x 75"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any special requirements or additional details about your shipment"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#f47521] text-white px-8 py-3 rounded-md hover:bg-[#e06411] transition-colors flex items-center space-x-2"
                  >
                    <span>Request Quote</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#283694] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Ship?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free quote or to discuss your air freight requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="inline-block bg-[#f47521] text-white px-8 py-3 rounded-md hover:bg-[#e06411] transition-colors"
            >
              Get a Quote
            </Link>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#283694] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
