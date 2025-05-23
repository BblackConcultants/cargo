'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImportServices() {
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    importType: '',
    origin: '',
    destination: '',
    goodsDescription: '',
    volume: '',
    specialRequirements: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'services', 'quote'];
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
            src="/images/import-services-hero.jpg"
            alt="Import Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Import Services</h1>
          <p className="text-xl md:text-2xl">Comprehensive import solutions for your business</p>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#283694] mb-8">Import Services Overview</h2>
            <div className="prose prose-lg">
              <p>
                Our comprehensive import services are designed to make importing goods into the UK simple and efficient. We handle all aspects of the import process, from documentation to customs clearance, ensuring your goods arrive safely and on time.
              </p>
              <h3 className="text-xl font-semibold text-[#283694] mt-8 mb-4">Why Choose Our Import Services?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Complete import management from origin to destination</li>
                <li>Expert customs clearance handling</li>
                <li>Efficient documentation processing</li>
                <li>Real-time shipment tracking</li>
                <li>Competitive rates and flexible solutions</li>
                <li>Dedicated account management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#283694] mb-8 text-center">Our Import Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#283694] mb-4">Import Management</h3>
                <ul className="space-y-2">
                  <li>End-to-end Import Solutions</li>
                  <li>Documentation Handling</li>
                  <li>Customs Clearance</li>
                  <li>Duty & VAT Management</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#283694] mb-4">Logistics Services</h3>
                <ul className="space-y-2">
                  <li>Port to Door Delivery</li>
                  <li>Warehousing & Storage</li>
                  <li>Distribution Services</li>
                  <li>Shipment Tracking</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#283694] mb-4">Additional Services</h3>
                <ul className="space-y-2">
                  <li>Import Consultation</li>
                  <li>Trade Compliance</li>
                  <li>Insurance Coverage</li>
                  <li>Status Reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-[#283694] mb-8">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="importType">Import Type *</label>
                  <select
                    id="importType"
                    name="importType"
                    value={formData.importType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Import Type</option>
                    <option value="commercial">Commercial Goods</option>
                    <option value="personal">Personal Effects</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="machinery">Machinery & Equipment</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="origin">Country of Origin *</label>
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="destination">Destination (UK Location) *</label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="volume">Volume/Quantity *</label>
                  <input
                    type="text"
                    id="volume"
                    name="volume"
                    value={formData.volume}
                    onChange={handleInputChange}
                    placeholder="e.g., 2 pallets, 10 boxes"
                    required
                  />
                </div>
              </div>
              <div className="form-group col-span-full">
                <label htmlFor="goodsDescription">Description of Goods *</label>
                <textarea
                  id="goodsDescription"
                  name="goodsDescription"
                  value={formData.goodsDescription}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  placeholder="Please provide details of the goods you wish to import"
                ></textarea>
              </div>
              <div className="form-group col-span-full">
                <label htmlFor="specialRequirements">Special Requirements</label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any special handling requirements or additional services needed"
                ></textarea>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="bg-[#f47521] text-white px-8 py-3 rounded-md hover:bg-[#e06411] transition-colors font-semibold text-lg"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Ready Section */}
      <section className="bg-[#283694] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Import?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free quote or to discuss your import requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              className="inline-block bg-[#f47521] text-white px-8 py-3 rounded-md hover:bg-[#e06411] transition-colors" 
              href="#quote"
            >
              Get a Quote
            </a>
            <a 
              className="inline-block bg-white text-[#283694] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors" 
              href="/contact"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
