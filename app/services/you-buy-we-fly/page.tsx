'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function YouBuyWeFlyPage() {
  const [activeTab, setActiveTab] = useState('how-it-works');

  const faqs = [
    {
      question: "What if I want to buy from several different retailers?",
      answer: "We can consolidate your purchases in the UK and forward them to your destination overseas as one single shipment."
    },
    {
      question: "Can you pack for me?",
      answer: "Yes. If required we can repack your orders for extra safety/security at a reasonable cost."
    },
    {
      question: "Can I insure my goods?",
      answer: "Yes, of course. We do not offer insurance ourselves but you can contact an insurance broker for coverage. You are welcome to use your own broker if you prefer."
    },
    {
      question: "Can I track my packages?",
      answer: "Yes, we provide full tracking details before the consignment leaves the UK."
    },
    {
      question: "Do you offer a storage facility?",
      answer: "Yes. We can store orders free of charge for a maximum of 30 days. After 30 days a storage fee will apply. Ask for details."
    },
    {
      question: "What about duties/taxes or other related costs in my country?",
      answer: "Each country has its own rules with regards to importing goods. It is possible that your local customs officers could decide to charge duties/taxes or similar before they allow you to receive the goods at the destination. Check with them in advance if you require further information about these costs."
    },
    {
      question: "How long does it take to arrive?",
      answer: "That depends on the service you choose. Shipments by air freight usually take approx. 7-10 days."
    },
    {
      question: "What kind of goods can't I ship on this service?",
      answer: "You cannot send any items regarded as hazardous or valuable by the airlines."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <Image
          src="/images/you-buy-we-fly-hero.jpg"
          alt="You Buy, We Fly"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">You Buy, We Fly</h1>
            <p className="text-xl max-w-2xl mx-auto">Let us handle your UK purchases and international shipping</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex mb-8 border-b">
            <button
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === 'how-it-works'
                  ? 'text-[#f47521] border-b-2 border-[#f47521]'
                  : 'text-gray-500 hover:text-[#f47521]'
              }`}
              onClick={() => setActiveTab('how-it-works')}
            >
              How It Works
            </button>
            <button
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === 'faqs'
                  ? 'text-[#f47521] border-b-2 border-[#f47521]'
                  : 'text-gray-500 hover:text-[#f47521]'
              }`}
              onClick={() => setActiveTab('faqs')}
            >
              FAQs
            </button>
          </div>

          {/* How It Works Content */}
          {activeTab === 'how-it-works' && (
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#283694] mb-6">How Our Service Works</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#f47521] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Shop Online</h3>
                      <p className="text-gray-600">
                        Browse and purchase from your favorite UK retailers. Use our UK warehouse address as your delivery address.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#f47521] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">We Receive & Process</h3>
                      <p className="text-gray-600">
                        We receive your purchases at our warehouse, check them, and consolidate multiple items if needed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#f47521] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">We Ship</h3>
                      <p className="text-gray-600">
                        We carefully pack your items and ship them to your international destination with full tracking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#283694] mb-2">Important Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Every purchase must be booked with us by email in advance</li>
                    <li>Each delivery must have the delivery reference marked on it for identification purposes</li>
                    <li>All shipments are subject to our current Terms and Conditions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#283694] mb-6">Why Choose Our Service?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-[#f47521] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="font-semibold mb-1">Consolidation Service</h3>
                      <p className="text-gray-600">Combine multiple purchases into one shipment</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-[#f47521] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="font-semibold mb-1">30-Day Free Storage</h3>
                      <p className="text-gray-600">Store your items while waiting for more purchases</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-[#f47521] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="font-semibold mb-1">Full Tracking</h3>
                      <p className="text-gray-600">Monitor your shipment's journey</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-[#f47521] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="font-semibold mb-1">Professional Packing</h3>
                      <p className="text-gray-600">Optional repacking service available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQs Content */}
          {activeTab === 'faqs' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#283694] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Link
              href="/services/call-back-request"
              className="inline-block bg-[#f47521] text-white px-8 py-3 rounded-md hover:bg-[#f47521]/90 transition-colors"
            >
              Request a Call Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
