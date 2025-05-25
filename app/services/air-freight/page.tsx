'use client';

import Image from 'next/image';
import Link from 'next/link';

const AirFreightPage = () => {
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-12">
        <Image
          src="/images/air-hero.jpg"
          alt="Air Freight Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Air Freight Services</h1>
            <p className="text-xl max-w-2xl mx-auto">Fast, reliable, and secure air freight solutions for your cargo needs</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#283694] mb-8">Why Choose Our Air Freight Services</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Cargo World Link is a premier independent shipping company and air freight forwarder. With extensive experience in the excess baggage market, we have developed strong relationships with the world&apos;s leading airlines.
            </p>

            <h2 className="text-2xl font-semibold text-[#283694]">Why Choose Our Air Freight Services?</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#21a6a6] mb-2">Fast Delivery Speeds</h3>
                <p className="text-gray-700">
                  Our air freight services are the fastest and most convenient method to send your cargo overseas. While sea freight shipments can take over a month, air freight shipments typically take around one week.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#21a6a6] mb-2">Global Reach</h3>
                <p className="text-gray-700">
                  We can send your belongings to over 6,500 airports worldwide. For many landlocked countries, particularly in central Africa and the Balkans, air freight is the only viable option.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#21a6a6] mb-2">Enhanced Security</h3>
                <p className="text-gray-700">
                  Air freight shipments undergo strict security screening. These tightly managed airport controls reduce exposure to cargo theft and damage, ensuring your goods arrive safely.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#21a6a6] mb-2">Reliable Service</h3>
                <p className="text-gray-700">
                  While weather can occasionally cause flight delays, we can typically find alternative flights within a day or two. This is much more flexible than sea freight carriers, which often operate on weekly or fortnightly schedules.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#21a6a6] mb-2">Track Your Shipment</h3>
                <p className="text-gray-700">
                  Once you make an air freight booking with us, you&apos;ll receive full flight details for your shipment, allowing you to track your cargo online from origin to destination.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#21a6a6] mb-2">Cost-Effective Solution</h3>
                <p className="text-gray-700">
                  Air freight is more affordable than you might think. In some cases, air freight rates can be more economical than sea freight rates, with lower destination charges at airports compared to ports.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-[#283694] mb-4">Get an Air Freight Quote</h3>
              <p className="text-gray-700 mb-4">
                Ready to ship? Contact us for a competitive air freight quote tailored to your needs.
              </p>
              <Link 
                href="/quote" 
                className="inline-block bg-[#f47521] text-white px-6 py-3 rounded-md hover:bg-[#f47521]/90 transition-colors"
              >
                Request Quote
              </Link>
            </div>

            <div className="bg-[#f8f9fa] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#283694] mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#21a6a6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Fast delivery times</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#21a6a6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Worldwide coverage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#21a6a6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Enhanced security measures</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#21a6a6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#21a6a6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Competitive pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirFreightPage;
