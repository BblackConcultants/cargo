'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CookieNoticePage() {
  const [activeTab, setActiveTab] = useState('about');

  const cookieTypes = [
    {
      name: 'Strictly Necessary Cookies',
      description: 'These cookies are essential for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.',
      required: true,
      examples: [
        { name: 'asp.net_sessionid', purpose: 'Maintains your session across page requests', duration: 'Session' }
      ]
    },
    {
      name: 'Performance Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.',
      required: false,
      examples: [
        { name: '_ga', purpose: 'Google Analytics - Distinguishes unique users', duration: '2 years' },
        { name: '_gid', purpose: 'Google Analytics - Stores and updates unique value for each page visited', duration: '24 hours' }
      ]
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.',
      required: false,
      examples: [
        { name: 'lang', purpose: 'Remembers the user\'s selected language version', duration: 'Session' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[200px]">
        <Image
          src="/images/cookie-hero.jpg"
          alt="Cookie Notice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Cookie Notice</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex mb-8 border-b">
            <button
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === 'about'
                  ? 'text-[#f47521] border-b-2 border-[#f47521]'
                  : 'text-gray-500 hover:text-[#f47521]'
              }`}
              onClick={() => setActiveTab('about')}
            >
              About Cookies
            </button>
            <button
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === 'policy'
                  ? 'text-[#f47521] border-b-2 border-[#f47521]'
                  : 'text-gray-500 hover:text-[#f47521]'
              }`}
              onClick={() => setActiveTab('policy')}
            >
              Cookie Policy
            </button>
          </div>

          {/* About Cookies Content */}
          {activeTab === 'about' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-[#283694] mb-6">What Are Cookies?</h2>
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-[#283694] mb-4">Why We Use Cookies</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>To make our website work as you'd expect</li>
                    <li>To remember your settings during and between visits</li>
                    <li>To improve the speed/security of the site</li>
                    <li>To allow you to share pages with social networks</li>
                    <li>To continuously improve our website for you</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-[#283694] mb-4">Your Cookie Choices</h3>
                <p className="text-gray-600 mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-[#283694] mb-4">Managing Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit{' '}
                    <a 
                      href="https://www.aboutcookies.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#f47521] hover:underline"
                    >
                      www.aboutcookies.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Cookie Policy Content */}
          {activeTab === 'policy' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-[#283694] mb-6">Our Cookie Policy</h2>
                <p className="text-gray-600 mb-8">
                  This policy explains how Cargo World Link uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>

                {cookieTypes.map((type, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                    <h3 className="text-xl font-semibold text-[#283694] mb-4">{type.name}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Examples:</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 px-4">Cookie Name</th>
                              <th className="text-left py-2 px-4">Purpose</th>
                              <th className="text-left py-2 px-4">Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            {type.examples.map((cookie, i) => (
                              <tr key={i} className="border-b last:border-0">
                                <td className="py-2 px-4 text-sm">{cookie.name}</td>
                                <td className="py-2 px-4 text-sm">{cookie.purpose}</td>
                                <td className="py-2 px-4 text-sm">{cookie.duration}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#283694] mb-4">Changes to This Cookie Policy</h3>
                  <p className="text-gray-600">
                    We may update this Cookie Notice from time to time. When we do, we will revise the updated date at the bottom of this page. We encourage you to periodically review this page for the latest information on our cookie practices.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-[#283694] mb-4">Questions & Contact Information</h3>
                  <p className="text-gray-600">
                    If you have any questions about our use of cookies or other technologies, please email us at{' '}
                    <a href="mailto:info@cargo-world-link.com" className="text-[#f47521] hover:underline">
                      info@cargo-world-link.com
                    </a>
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Last updated: May 2025
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
