'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-[#283694] py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-2 md:space-y-0">
            <div className="flex space-x-6">
              <Link href="/newsroom" className="text-sm text-white hover:text-white/80">
                NEWSROOM
              </Link>
              <Link href="/contact" className="text-sm text-white hover:text-white/80">
                CONTACT US
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative w-80">
                <input
                  type="text"
                  placeholder="FAST TRACK MY SHIPMENT"
                  className="w-full pl-4 pr-10 py-1 text-sm bg-[#21a6a6] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-white"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <button className="hidden md:flex items-center space-x-2 text-sm bg-[#f47521] text-white px-4 py-1.5 rounded-md hover:bg-[#f47521]/90">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <span>My Cargo</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Cargo World Link Logo"
              width={360}
              height={100}
              className="h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 ml-auto">
            <Link href="/about" className="text-[#283694] hover:text-[#283694]/80">
              About Us
            </Link>
            <Link href="/business-solutions" className="text-[#283694] hover:text-[#283694]/80">
              Business Solutions
            </Link>
            <Link href="/consumer-solutions" className="text-[#283694] hover:text-[#283694]/80">
              Consumer Solutions
            </Link>
            <Link href="/locations" className="text-[#283694] hover:text-[#283694]/80">
              Locations
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="border-b border-gray-200 pb-2 mb-2">
                <div className="relative mb-2">
                  <input
                    type="text"
                    placeholder="FAST TRACK MY SHIPMENT"
                    className="w-full pl-4 pr-10 py-2 text-sm bg-[#21a6a6] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-white"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 w-full px-3 py-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span>My Cargo</span>
                </button>
              </div>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                About Us
              </Link>
              <Link
                href="/business-solutions"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Business Solutions
              </Link>
              <Link
                href="/consumer-solutions"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Consumer Solutions
              </Link>
              <Link
                href="/locations"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Locations
              </Link>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link
                  href="/newsroom"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Newsroom
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </div>
              <Link
                href="/quote"
                className="block px-3 py-2 bg-blue-600 text-white rounded-md mt-4"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
