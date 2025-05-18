'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function AirFreightServicesToAfrica() {
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
                <span className="text-sm font-medium">Get Quote</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center text-white overflow-hidden">
        <Image
          src="/images/air-freight-hero.jpg"
          alt="Air Freight Services Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Air Freight Services
            </h1>
            <p className="text-xl mb-8">
              Fast and reliable air freight services to over 500 airports worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div id="overview" className="prose max-w-none">
              <h2 className="text-3xl font-bold text-[#283694] mb-8">Discover Our Air Freight/Cargo Services</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Our Air Freight Services is suitable for urgent cargo from UK to any international destination. 
                We can send cargo by air freight to over 500 airports around the world. Our air freight service 
                is suitable for both commercial cargo and personal and household effects.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                It don&apos;t matter whether you&apos;re looking to send urgent documents, or commercial samples as a 
                business or it may be boxes of personal effects or commercial pallets, high-end vehicles, 
                small light machinery, or you have regular cargo, we have you covered.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                We can arrange collection of your cargo from your business premises or you can arrange your 
                delivery to our warehouses. We have warehouses in Crawley and Northampton we are able operate 
                throughout Europe and to all major international destinations.
              </p>

              <h3 id="destinations" className="text-2xl font-bold text-[#283694] mb-4">Destinations</h3>
              <p className="text-lg text-gray-700 mb-4">
                We offer a regular First Flight Out Service (FFO) to the following destinations:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-[#283694] mb-3">Africa</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>South Africa</li>
                    <li>Nigeria</li>
                    <li>Ghana</li>
                    <li>Kenya</li>
                    <li>Botswana</li>
                    <li>Malawi</li>
                    <li>Zambia</li>
                    <li>Mozambique</li>
                    <li>Zimbabwe</li>
                    <li>Egypt</li>
                    <li>Tanzania</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#283694] mb-3">The Caribbean</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Jamaica</li>
                      <li>Granada</li>
                      <li>Barbados</li>
                      <li>Trinidad & Tobago</li>
                      <li>St Lucia</li>
                      <li>Guyana</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#283694] mb-3">Middle East</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>UAE</li>
                      <li>Israel</li>
                      <li>Qatar</li>
                      <li>Saudi Arabia</li>
                      <li>Jordan</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 id="rates" className="text-2xl font-bold text-[#283694] mb-4">Our Rates</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our rates for air freight services are calculated based on the following:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-8">
                <li>Destination country and airport</li>
                <li>Size (length, width and height) as well as weight of your consignment</li>
                <li>Airline freight charges</li>
                <li>Any additional surcharges</li>
                <li>Collection Charges depend on size and weight of consignment as well as the pick-up address in UK</li>
              </ul>

              <h3 id="additional" className="text-2xl font-bold text-[#283694] mb-4">Additional Information</h3>
              <p className="text-lg text-gray-700 mb-4">
                We send freight by air using high quality services provided by major commercial airlines and 
                international cargo carriers.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-8">
                <li>The quoted price given to you prior to your booking will usually include all applicable surcharges. 
                    We will notify you in case the price quoted changes.</li>
                <li>Please be aware that our rates exclude any destination charges applicable, including duty and 
                    customs clearance charges. These will normally be handled by the recipient, unless you have 
                    requested us to handle that on your behalf.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sea Freight Service */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#283694] mb-4">Our Sea Freight Service</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Part Container Load (LCL) or Full Container Service (FCL)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Can arrange collection and destination delivery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Budget way to move cargo</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We can handle household removals and packing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Weekly shipment from major UK ports</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We also offer marine insurance for an extra peace of mind</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vehicle Shipping Service */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#283694] mb-4">Our Vehicle Shipping Service</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>RoRo or Containerised vehicle shipping</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We can arrange pick up and delivery to the port</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Servicing major destination in the world</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Can also offer containerised vehicle shipping for high end vehicles</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Packaging & Storage Service */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#283694] mb-4">Our Packaging & Storage Service</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Boxes, drums, pallets, tapes, bubble wrap, stretch film</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Warehouse space of 14,500 sq ft for storage & warehousing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bonded facilities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Devanning & loading of containers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Environmentally controlled warehouse</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-[#f47521] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pick & pack</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section id="quote" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#283694] mb-6 text-center">Request Air Freight Quote</h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below and we'll get back to you with a competitive quote for your air freight needs.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
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
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    />
                  </div>

                  {/* From Country */}
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="fromCountry">
                      From Country
                    </label>
                    <input
                      type="text"
                      id="fromCountry"
                      name="fromCountry"
                      value={formData.fromCountry}
                      onChange={handleChange}
                      disabled
                      className="w-full px-4 py-2 border rounded-md bg-gray-50"
                    />
                  </div>

                  {/* To Country */}
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
                      <option value="">Select destination country</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Tanzania">Tanzania</option>
                    </select>
                  </div>

                  {/* Cargo Type */}
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="cargoType">
                      Type of Cargo <span className="text-red-500">*</span>
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
                      <option value="documents">Documents</option>
                      <option value="personal-effects">Personal Effects</option>
                      <option value="commercial-goods">Commercial Goods</option>
                      <option value="vehicle-parts">Vehicle Parts</option>
                      <option value="machinery">Machinery</option>
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
