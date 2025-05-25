'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        <div className="flex justify-between items-center h-24 md:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={`${basePath}/logo.png`}
              alt="Cargo World Link Logo"
              width={360}
              height={100}
              className="h-16 md:h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 ml-auto" ref={dropdownRef}>
            <Link href="/about" className="text-[#283694] hover:text-[#283694]/80">
              About Us
            </Link>
            <div className="relative group">
              <button
                className="text-[#283694] hover:text-[#283694]/80 flex items-center space-x-1"
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                onMouseEnter={() => setActiveDropdown('services')}
              >
                <span>Consumer Solutions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href="/services/air-freight" className="block px-4 py-2 hover:bg-gray-50">
                    Air Freight
                  </Link>
                  <Link href="/services/door-to-door" className="block px-4 py-2 hover:bg-gray-50">
                    Door To Door
                  </Link>
                  <Link href="/services/sea-freight-shipping" className="block px-4 py-2 hover:bg-gray-50">
                    Sea Freight
                  </Link>
                  <Link href="/services/excess-baggage" className="block px-4 py-2 hover:bg-gray-50">
                    Excess Baggage
                  </Link>
                  <Link href="/services/road-freight" className="block px-4 py-2 hover:bg-gray-50">
                    Road Freight
                  </Link>
                  <Link href="/services/packing-materials" className="block px-4 py-2 hover:bg-gray-50">
                    Packing Materials
                  </Link>
                  <Link href="/services/call-back-request" className="block px-4 py-2 hover:bg-gray-50">
                    Call Back Request
                  </Link>
                  <Link href="/services/you-buy-we-fly" className="block px-4 py-2 hover:bg-gray-50">
                    You Buy, We Fly
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="text-[#283694] hover:text-[#283694]/80 flex items-center space-x-1"
                onClick={() => setActiveDropdown(activeDropdown === 'business' ? null : 'business')}
                onMouseEnter={() => setActiveDropdown('business')}
              >
                <span>Business Solutions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'business' && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href="/air-freight-services" className="block px-4 py-2 text-gray-600 hover:text-blue-600">
                    Air Freight Services
                  </Link>
                  <Link href="/courier-express" className="block px-4 py-2 text-gray-600 hover:text-blue-600">
                    Courier & Express
                  </Link>
                  <Link href="/customs-clearance" className="block px-4 py-2 text-gray-600 hover:text-blue-600">
                    Customs Clearance
                  </Link>
                  <Link href="/documentation" className="block px-4 py-2 text-gray-600 hover:text-blue-600">
                    Documentation
                  </Link>
                  <Link href="/export-services" className="block px-4 py-2 text-gray-600 hover:text-blue-600">
                    Export Services
                  </Link>
                  <Link href="/freight-packaging" className="block px-4 py-2 text-gray-600 hover:text-blue-600">
                    Freight Packaging
                  </Link>
                  <Link href="/import-services" className="block px-4 py-2 text-gray-600 hover:text-blue-600">
                    Import Services
                  </Link>
                  <Link href="/road-freight" className="block px-4 py-2 text-gray-600 hover:text-blue-600">
                    Road Freight
                  </Link>
                  <Link href="/warehousing" className="block px-4 py-2 text-gray-600 hover:text-blue-600">
                    Warehousing
                  </Link>
                </div>
              )}
            </div>
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
              <div className="px-3 py-2">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600"
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transform transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="mt-2 ml-4 space-y-2">

                    <div className="space-y-2">
                      <Link href="/sea-freight" className="block py-1 text-gray-600 hover:text-blue-600">
                        Sea Freight
                      </Link>
                      <Link href="/services/door-to-door" className="block py-1 text-gray-600 hover:text-blue-600">
                        Door To Door
                      </Link>
                      <div>
                        <button 
                          onClick={() => setActiveSubDropdown(activeSubDropdown === 'mobile-vehicle-shipping' ? null : 'mobile-vehicle-shipping')}
                          className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 py-1"
                        >
                          <span>Vehicle Shipping</span>
                          <svg className={`w-4 h-4 transform transition-transform ${activeSubDropdown === 'mobile-vehicle-shipping' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {activeSubDropdown === 'mobile-vehicle-shipping' && (
                          <div className="pl-4 space-y-1">
                            <Link href="/shipping-cars-to-africa" className="block py-1 text-gray-600 hover:text-blue-600">
                              Shipping Cars To Africa
                            </Link>
                            <Link href="/vehicle-shipping-sailing-schedule" className="block py-1 text-gray-600 hover:text-blue-600">
                              Vehicle Shipping Sailing Schedule
                            </Link>
                          </div>
                        )}
                      </div>
                      <Link href="/services/container-shipping" className="block py-1 text-gray-600 hover:text-blue-600">
                        Container Shipping
                      </Link>
                      <Link href="/services/packaging-and-storage" className="block py-1 text-gray-600 hover:text-blue-600">
                        Packaging and Storage
                      </Link>
                      <Link href="/vehicle-procurement-car-purchase" className="block py-1 text-gray-600 hover:text-blue-600">
                        Vehicle Procurement/ Car Purchase
                      </Link>
                      <Link href="/services/air-freight" className="block py-1 text-gray-600 hover:text-blue-600">
                        Air Freight
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <button 
                  onClick={() => setActiveSubDropdown(activeSubDropdown === 'mobile-business' ? null : 'mobile-business')}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  <span>Business Solutions</span>
                  <svg className={`w-4 h-4 transform transition-transform ${activeSubDropdown === 'mobile-business' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeSubDropdown === 'mobile-business' && (
                  <div className="pl-4 space-y-2">
                    <Link href="/air-freight-services" className="block py-1 text-gray-600 hover:text-blue-600">
                      Air Freight Services
                    </Link>
                    <Link href="/courier-express" className="block py-1 text-gray-600 hover:text-blue-600">
                      Courier & Express
                    </Link>
                    <Link href="/customs-clearance" className="block py-1 text-gray-600 hover:text-blue-600">
                      Customs Clearance
                    </Link>
                    <Link href="/documentation" className="block py-1 text-gray-600 hover:text-blue-600">
                      Documentation
                    </Link>
                    <Link href="/export-services" className="block py-1 text-gray-600 hover:text-blue-600">
                      Export Services
                    </Link>
                    <Link href="/freight-packaging" className="block py-1 text-gray-600 hover:text-blue-600">
                      Freight Packaging
                    </Link>
                    <Link href="/import-services" className="block py-1 text-gray-600 hover:text-blue-600">
                      Import Services
                    </Link>
                    <Link href="/road-freight" className="block py-1 text-gray-600 hover:text-blue-600">
                      Road Freight
                    </Link>
                    <Link href="/warehousing" className="block py-1 text-gray-600 hover:text-blue-600">
                      Warehousing
                    </Link>
                    <Link href="/services/door-to-door" className="block py-1 text-gray-600 hover:text-blue-600">
                      Door To Door
                    </Link>
                  </div>
                )}
              </div>
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
