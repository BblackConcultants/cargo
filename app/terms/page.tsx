'use client';

import Image from 'next/image';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[200px]">
        <Image
          src="/images/terms-hero.jpg"
          alt="Terms and Conditions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Terms and Conditions</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-[#283694] mb-6">Standard Trading Conditions</h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                All business is undertaken subject to the Standard Trading Conditions of the British International Freight Association (BIFA) 2021 edition.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#283694] mb-4">Important Notes:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>These conditions limit or exclude liability for loss or damage</li>
                  <li>Insurance is not arranged except upon express instructions</li>
                  <li>Terms are subject to change without prior notice</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-[#283694]">General Conditions</h3>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <p className="inline-block">
                    All services provided by us are subject to these terms and conditions.
                  </p>
                </li>
                <li>
                  <p className="inline-block">
                    By using our services, you agree to be bound by these terms and conditions.
                  </p>
                </li>
                <li>
                  <p className="inline-block">
                    We reserve the right to refuse service to anyone for any reason at any time.
                  </p>
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-[#283694]">Shipping and Delivery</h3>
              <ul className="list-disc list-inside space-y-4">
                <li>
                  Delivery times are estimates only and not guaranteed
                </li>
                <li>
                  We are not responsible for delays caused by customs or other regulatory bodies
                </li>
                <li>
                  Additional charges may apply for remote locations
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#283694]">Prohibited Items</h3>
              <p>
                Certain items are prohibited from shipping. These include but are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Dangerous goods and hazardous materials</li>
                <li>Illegal substances</li>
                <li>Perishable items</li>
                <li>Valuable items (unless specifically arranged)</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#283694]">Insurance and Liability</h3>
              <ul className="list-disc list-inside space-y-4">
                <li>
                  Insurance is not automatically included in our services
                </li>
                <li>
                  Additional insurance can be arranged upon request
                </li>
                <li>
                  Our liability is limited as per BIFA conditions
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#283694]">Payment Terms</h3>
              <ul className="list-disc list-inside space-y-4">
                <li>
                  Payment is required before shipment unless otherwise agreed
                </li>
                <li>
                  All prices are subject to change without notice
                </li>
                <li>
                  Additional charges may apply for customs duties and taxes
                </li>
              </ul>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">
                  Last updated: May 2025
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  For any questions regarding these terms and conditions, please contact us at{' '}
                  <a href="mailto:info@cargo-world-link.com" className="text-[#f47521] hover:underline">
                    info@cargo-world-link.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
