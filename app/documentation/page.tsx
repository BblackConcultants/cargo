'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    documentType: '',
    shipmentType: '',
    origin: '',
    destination: '',
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
            src="/images/documentation-hero.jpg"
            alt="Documentation Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation Services</h1>
          <p className="text-xl md:text-2xl">Expert handling of all your shipping documentation needs</p>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#283694] mb-8">Documentation Overview</h2>
            <div className="prose prose-lg">
              <p>
                Our comprehensive documentation services ensure all your shipping paperwork is handled correctly and efficiently. We manage everything from customs documentation to commercial invoices, making international trade simple and hassle-free.
              </p>
              <h3 className="text-xl font-semibold text-[#283694] mt-8 mb-4">Why Choose Our Documentation Services?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Expert handling of all shipping documents</li>
                <li>Compliance with international regulations</li>
                <li>Fast and accurate processing</li>
                <li>Digital document management</li>
                <li>Dedicated support team</li>
                <li>Regular status updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#283694] mb-8 text-center">Our Documentation Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#283694] mb-4">Customs Documentation</h3>
                <ul className="space-y-2">
                  <li>Import/Export Declarations</li>
                  <li>Customs Entries</li>
                  <li>Certificates of Origin</li>
                  <li>Duty Calculations</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#283694] mb-4">Transport Documentation</h3>
                <ul className="space-y-2">
                  <li>Bills of Lading</li>
                  <li>Air Waybills</li>
                  <li>CMR Documents</li>
                  <li>Packing Lists</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#283694] mb-4">Commercial Documentation</h3>
                <ul className="space-y-2">
                  <li>Commercial Invoices</li>
                  <li>Letters of Credit</li>
                  <li>Insurance Certificates</li>
                  <li>Export Licenses</li>
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
            <h2 className="text-3xl font-bold text-[#283694] mb-8">Request Documentation Services</h2>
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
                  <label htmlFor="documentType">Document Type Required *</label>
                  <select
                    id="documentType"
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Document Type</option>
                    <option value="customs">Customs Documentation</option>
                    <option value="transport">Transport Documentation</option>
                    <option value="commercial">Commercial Documentation</option>
                    <option value="multiple">Multiple Document Types</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="shipmentType">Shipment Type *</label>
                  <select
                    id="shipmentType"
                    name="shipmentType"
                    value={formData.shipmentType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Shipment Type</option>
                    <option value="import">Import</option>
                    <option value="export">Export</option>
                    <option value="transit">Transit</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="origin">Origin Country *</label>
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
                  <label htmlFor="destination">Destination Country *</label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group col-span-full">
                <label htmlFor="specialRequirements">Special Requirements</label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please specify any special requirements or additional information"
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
          <h2 className="text-3xl font-bold text-white mb-8">Need Documentation Support?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with us today to discuss your documentation requirements and how we can help.
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
