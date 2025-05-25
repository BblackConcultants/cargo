'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BugReport {
  title: string;
  description: string;
  steps: string;
  expectedBehavior: string;
  actualBehavior: string;
  browser: string;
  device: string;
  email: string;
  attachments?: FileList | null;
}

export default function ReportBugPage() {
  const [formData, setFormData] = useState<BugReport>({
    title: '',
    description: '',
    steps: '',
    expectedBehavior: '',
    actualBehavior: '',
    browser: '',
    device: '',
    email: '',
    attachments: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        attachments: e.target.files
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Here you would typically send the data to your API
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate successful submission
      setSubmitStatus({
        type: 'success',
        message: 'Bug report submitted successfully! Our team will investigate the issue.'
      });
      
      // Clear form
      setFormData({
        title: '',
        description: '',
        steps: '',
        expectedBehavior: '',
        actualBehavior: '',
        browser: '',
        device: '',
        email: '',
        attachments: null
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit bug report. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[200px]">
        <Image
          src="/images/bug-hero.jpeg"
          alt="Report a Bug"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Report a Bug</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Information Box */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-8">
            <h2 className="text-2xl font-bold text-[#283694] mb-4">Help Us Improve</h2>
            <p className="text-gray-600 mb-4">
              Found a bug? We appreciate your help in making our website better. Please provide as much detail as possible
              about the issue you\\'ve encountered.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-[#283694] mb-2">Before Submitting:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Check if you\\'re using a supported browser</li>
                <li>Clear your browser\\'s cache and cookies</li>
                <li>Try to reproduce the issue</li>
                <li>Include screenshots if possible</li>
              </ul>
            </div>
          </div>

          {/* Bug Report Form */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Bug Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                  required
                  placeholder="Brief description of the issue"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                  required
                  placeholder="Provide a detailed description of the bug"
                />
              </div>

              <div>
                <label htmlFor="steps" className="block text-sm font-medium text-gray-700 mb-2">
                  Steps to Reproduce *
                </label>
                <textarea
                  id="steps"
                  name="steps"
                  value={formData.steps}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                  required
                  placeholder="1. Go to...&#10;2. Click on...&#10;3. Observe..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="expectedBehavior" className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Behavior *
                  </label>
                  <textarea
                    id="expectedBehavior"
                    name="expectedBehavior"
                    value={formData.expectedBehavior}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                    placeholder="What should have happened?"
                  />
                </div>

                <div>
                  <label htmlFor="actualBehavior" className="block text-sm font-medium text-gray-700 mb-2">
                    Actual Behavior *
                  </label>
                  <textarea
                    id="actualBehavior"
                    name="actualBehavior"
                    value={formData.actualBehavior}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                    placeholder="What actually happened?"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="browser" className="block text-sm font-medium text-gray-700 mb-2">
                    Browser *
                  </label>
                  <select
                    id="browser"
                    name="browser"
                    value={formData.browser}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  >
                    <option value="">Select Browser</option>
                    <option value="chrome">Google Chrome</option>
                    <option value="firefox">Mozilla Firefox</option>
                    <option value="safari">Safari</option>
                    <option value="edge">Microsoft Edge</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="device" className="block text-sm font-medium text-gray-700 mb-2">
                    Device *
                  </label>
                  <select
                    id="device"
                    name="device"
                    value={formData.device}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                    required
                  >
                    <option value="">Select Device</option>
                    <option value="desktop">Desktop</option>
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                    <option value="mobile">Mobile</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                  required
                  placeholder="We'll contact you if we need more information"
                />
              </div>

              <div>
                <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-2">
                  Attachments (Optional)
                </label>
                <input
                  type="file"
                  id="attachments"
                  name="attachments"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f47521] focus:border-transparent"
                  multiple
                  accept="image/*,.pdf"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Accepted formats: Images (PNG, JPG, GIF) and PDF files
                </p>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#f47521] text-white py-3 rounded-md hover:bg-[#f47521]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f47521] ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Bug Report'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
