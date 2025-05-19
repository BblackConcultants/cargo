'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function SeaFreight() {
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
      const sections = ['overview', 'rates', 'restrictions', 'quote'];
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
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: `url('${basePath}/images/sea-freight-hero.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sea Freight Services</h1>
            <p className="text-xl">Efficient and cost-effective global shipping solutions</p>
          </div>
        </div>
      </div>

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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#283694] mb-6">Why Choose Sea Freight?</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our sea freight service is an efficient and financially viable option for transporting heavy packages or large items overseas. We pride ourselves in shipping personal items to a wide range of countries throughout the world at minimal expense to our customers.
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cost-effective shipping solutions
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Global coverage with extensive network
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Professional handling and packaging
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full tracking and documentation support
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

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#283694] mb-6">Transit Times</h2>
              <p className="text-gray-600 mb-6">
                Transit times vary depending on the destination, typically ranging between 8 to 12 weeks. Once your shipment is booked onto a vessel, you'll receive:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vessel name and details
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Approximate arrival date
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Shipping line agent contact information
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Bill of lading documentation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rates Section */}
        <section id="rates" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#283694] mb-6">Freight Charges Calculation</h2>
              <p className="text-gray-600 mb-6">
                Sea freight shipments are charged "per cubic metre". The volume of your shipment is the primary factor in determining the cost. To optimize your shipping:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Calculate volume in cubic metres
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consider consolidation options
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Plan for optimal space usage
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-bold text-[#283694] mb-6">Palletization Benefits</h3>
              <p className="text-gray-600 mb-6">
                Proper palletization can significantly improve shipping efficiency and protect your cargo:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Safer transportation
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Better protection for your goods
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Efficient space utilization
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cost-effective packaging
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Restrictions Section */}
        <section id="restrictions" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#283694] mb-6">Dangerous Goods</h2>
              <p className="text-gray-600 mb-6">
                Certain items require special handling and declaration. Undeclared dangerous goods are prohibited by law.
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flammable materials
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Corrosive substances
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Explosive materials
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#283694] mb-6">Valuable Items</h2>
              <p className="text-gray-600 mb-6">
                For security and liability reasons, we do not accept the following items:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cash or financial instruments
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Jewelry and watches
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Valuable collections
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#f47521] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Important documents
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#283694] mb-8 text-center">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Full Name <span className="text-red-500">*</span>
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

                  {/* Email */}
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

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    />
                  </div>

                  {/* From Country */}
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
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* To Country */}
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="toCountry">
                      To Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="toCountry"
                      name="toCountry"
                      value={formData.toCountry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    />
                  </div>

                  {/* Cargo Type */}
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
                      <option value="personal">Personal Effects</option>
                      <option value="vehicle">Vehicle</option>
                      <option value="commercial">Commercial Goods</option>
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
        </section>

        {/* CTA Section */}
        <section className="bg-[#283694] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Ship?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with us today for a free quote or to discuss your sea freight requirements.
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
    </div>
  );
}
