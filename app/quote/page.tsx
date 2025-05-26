'use client';

import { useState } from 'react';
import Link from 'next/link';

const QuotePage = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    fromCountry: '',
    toCountry: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    cargoType: '',
    weight: '',
    dimensions: '',
    specialRequirements: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, just show an alert
    alert('Thank you for your quote request. We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#283694] mb-4">
            Request a Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get a competitive quote for your shipping needs. Our team will review your request and respond within 24 hours.
          </p>
        </div>

        {/* Quote Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
            {/* Service Type */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#283694] mb-4">Service Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Service Type*</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="air">Air Freight</option>
                    <option value="sea">Sea Freight</option>
                    <option value="road">Road Freight</option>
                    <option value="customs">Customs Clearance</option>
                    <option value="door">Door to Door</option>
                    <option value="warehousing">Warehousing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Cargo Type*</label>
                  <input
                    type="text"
                    name="cargoType"
                    value={formData.cargoType}
                    onChange={handleChange}
                    placeholder="e.g., General Cargo, Hazardous Materials"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Route Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#283694] mb-4">Route Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">From Country*</label>
                  <input
                    type="text"
                    name="fromCountry"
                    value={formData.fromCountry}
                    onChange={handleChange}
                    placeholder="Origin Country"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">To Country*</label>
                  <input
                    type="text"
                    name="toCountry"
                    value={formData.toCountry}
                    onChange={handleChange}
                    placeholder="Destination Country"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Cargo Details */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#283694] mb-4">Cargo Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Weight (kg)*</label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="Total weight in kg"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Dimensions</label>
                  <input
                    type="text"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    placeholder="L x W x H in cm"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#283694] mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Additional Requirements */}
            <div className="mb-8">
              <label className="block text-gray-700 mb-2">Special Requirements</label>
              <textarea
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                placeholder="Any special requirements or additional information"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#283694] text-white px-8 py-3 rounded-md hover:bg-[#283694]/90 transition-colors"
              >
                Submit Quote Request
              </button>
            </div>
          </form>

          {/* Additional Information */}
          <div className="mt-8 text-center text-gray-600">
            <p className="mb-4">
              Need immediate assistance? Contact us directly:
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact" className="text-[#283694] hover:text-[#283694]/80">
                <i className="fas fa-envelope mr-2"></i>Contact Us
              </Link>
              <span className="text-gray-400">|</span>
              <a href="tel:+442012345678" className="text-[#283694] hover:text-[#283694]/80">
                <i className="fas fa-phone mr-2"></i>+44 20 1234 5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
