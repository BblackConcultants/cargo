'use client';

import Image from 'next/image';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[200px]">
        <Image
          src="/images/privacy-hero.jpg"
          alt="Privacy Policy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          <div className="prose max-w-none">
            <div className="space-y-8 text-gray-600">
              <section>
                <h2 className="text-2xl font-bold text-[#283694] mb-4">Introduction</h2>
                <p>
                  Cargo World Link has created this privacy statement to demonstrate our firm commitment to protecting your privacy and data. This privacy policy explains how we collect, use, and protect your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#283694] mb-4">Analytics & Cookies</h2>
                <p className="mb-4">
                  Google Analytics stores information about:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>What pages you visit</li>
                  <li>How long you are on the site</li>
                  <li>How you got here</li>
                  <li>What you click on</li>
                </ul>
                <p className="mb-4">
                  We do not collect or store any personal information (e.g., your name or address) through Analytics, so this information cannot be used to identify who you are. We also do not allow Google to use or share our analytics data.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-[#283694] mb-2">Cookies Used:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>_utma - stores a randomly generated number for 2 years</li>
                    <li>_utmb - stores a randomly generated number for 30 minutes</li>
                    <li>_utmc - stores a randomly generated number until browser closure</li>
                    <li>_utmz - stores information about site access for 6 months</li>
                    <li>asp.net_sessionid - stores session information until browser closure</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#283694] mb-4">Security Technology</h2>
                <p>
                  We have made substantial investments in server, database, backup, and firewall technologies to protect our information assets. These technologies are deployed as part of a sophisticated security architecture. All data resides in a secure environment behind firewalls and other security measures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#283694] mb-4">Your Data Rights</h2>
                <div className="space-y-4">
                  <p>Under data protection legislation, you have several rights:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Right to access your data (free of charge)</li>
                    <li>Right to correct any inaccurate data</li>
                    <li>Right to be forgotten (data deletion)</li>
                    <li>Right to restrict processing of your data</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please email{' '}
                    <a href="mailto:info@cargo-world-link.com" className="text-[#f47521] hover:underline">
                      info@cargo-world-link.com
                    </a>
                  </p>
                  <p>We will respond to your request within one month.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#283694] mb-4">Changes to This Policy</h2>
                <p>
                  We may change this Privacy Policy from time to time. When we make changes, we will highlight them on our homepage and email users who have given us permission to do so. Any changes will not be retroactive - we will not use your previously collected personal information in a way materially different than what was stated when it was collected.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#283694] mb-4">Contact Information</h2>
                <p>
                  If you have any questions or concerns about our Privacy Policy, please contact our data protection officer at:
                </p>
                <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                  <p className="font-semibold">Cargo World Link</p>
                  <p>123 Logistics Way</p>
                  <p>Freight City, FC 12345</p>
                  <p>Email: info@cargo-world-link.com</p>
                  <p>Phone: +1 234 567 8900</p>
                </div>
              </section>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Last updated: May 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
