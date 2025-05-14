import Image from 'next/image'
import Link from 'next/link'
import ShippingForm from '@/components/ShippingForm'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/home-hero.mp4"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Forwarding freight around the world
            </h1>
            <p className="text-xl mb-8">
              For years, Cargo World Link's world-class freight forwarding services have improved bottom lines across virtually every industry.
            </p>
            <Link
              href="/quote"
              className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Explore More</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Overlap Section */}
      <div className="w-full bg-[#f47521] -mt-20 relative z-20 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
            Enjoy flexible, cost-effective air freight solutions, ocean shipping options
          </h2>
        </div>
      </div>

      {/* Global Shipping Section */}
      <section className="relative bg-cover bg-center py-24" style={{ backgroundImage: "url('/images/hero_bg_4.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Global Shipping Made Easy</h2>
              <p className="text-white mb-8">Experience hassle-free shipping with our comprehensive global logistics solutions. We handle everything from documentation to delivery, ensuring your cargo reaches its destination safely and on time.</p>
              <div className="flex space-x-4">
                <Image
                  src="/images/google-reviews.svg"
                  alt="Google Reviews"
                  width={150}
                  height={50}
                  style={{ width: 'auto', height: '50px' }}
                />
                <Image
                  src="/images/trustpilot.svg"
                  alt="Trust Pilot"
                  width={150}
                  height={50}
                  style={{ width: 'auto', height: '50px' }}
                />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <ShippingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#283694]">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Air Freight */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/services/air-freight.jpg"
                  alt="Air Freight Services"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Air Freight</h3>
              <p className="text-gray-600">
                Fast international delivery with express shipping solutions for urgent cargo.
              </p>
            </div>

            {/* Sea Freight */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/services/sea-freight.jpg"
                  alt="Sea Freight Services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sea Freight</h3>
              <p className="text-gray-600">
                Cost-effective solutions for bulk shipments with full container and less-than-container options.
              </p>
            </div>

            {/* Road Freight */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/services/road-freight.jpg"
                  alt="Road Freight Services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Road Freight</h3>
              <p className="text-gray-600">
                Reliable door-to-door delivery for domestic and international road transport.
              </p>
            </div>

            {/* Customs Brokerage */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/services/customs-brokerage.jpg"
                  alt="Customs Brokerage Services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customs Brokerage</h3>
              <p className="text-gray-600">
                Professional customs clearance services ensuring smooth import and export processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#283694]">
            Why Choose Cargo World Link
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
              <p className="text-gray-600">Years of experience serving clients worldwide with reliable logistics solutions.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified & Accredited</h3>
              <p className="text-gray-600">Fully compliant with international shipping and safety standards.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">Monitor your shipments 24/7 with our advanced tracking system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team for a customized shipping solution that meets your needs.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact and Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Column */}
            <div className="space-y-6" data-aos="fade" data-aos-delay="100">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#283694] leading-tight">
                  CONTACT OUR <br />EXPERT TEAM
                </h2>
              </div>
              <div className="space-y-4">
                <Link 
                  href="/contact" 
                  className="inline-block w-full md:w-auto text-[#283694] border-2 border-[#283694] py-3 px-5 font-semibold hover:bg-[#283694] hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="inline-block w-48">Contact Us</span>
                  <i className="fas fa-arrow-right absolute right-5 top-1/2 transform -translate-y-1/2 transition-transform group-hover:translate-x-2"></i>
                </Link>
                <Link 
                  href="/pod-form" 
                  className="inline-block w-full md:w-auto text-[#283694] border-2 border-[#283694] py-3 px-5 font-semibold hover:bg-[#283694] hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="inline-block w-48">POD Form</span>
                  <i className="fas fa-arrow-right absolute right-5 top-1/2 transform -translate-y-1/2 transition-transform group-hover:translate-x-2"></i>
                </Link>
                <Link 
                  href="/quote" 
                  className="inline-block w-full md:w-auto text-[#283694] border-2 border-[#283694] py-3 px-5 font-semibold hover:bg-[#283694] hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="inline-block w-48">Request A Quote</span>
                  <i className="fas fa-arrow-right absolute right-5 top-1/2 transform -translate-y-1/2 transition-transform group-hover:translate-x-2"></i>
                </Link>
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-3 gap-8" data-aos="fade" data-aos-delay="100">
              {/* Destinations Column */}
              <div>
                <h4 className="text-lg font-semibold text-[#283694] mb-4">DESTINATIONS</h4>
                <div className="space-y-2">
                  <Link href="/destinations/local" className="block text-gray-600 hover:text-[#283694]">Local</Link>
                  <Link href="/destinations/europe" className="block text-gray-600 hover:text-[#283694]">Europe</Link>
                  <Link href="/destinations/africa" className="block text-gray-600 hover:text-[#283694]">Africa</Link>
                  <Link href="/destinations/zimbabwe" className="block text-gray-600 hover:text-[#283694]">Zimbabwe</Link>
                  <Link href="/destinations/world" className="block text-gray-600 hover:text-[#283694]">Rest Of World</Link>
                </div>
              </div>

              {/* Services Column */}
              <div>
                <h4 className="text-lg font-semibold text-[#283694] mb-4">SERVICES</h4>
                <div className="space-y-2">
                  <Link href="/services/air-freight" className="block text-gray-600 hover:text-[#283694]">Air Freight</Link>
                  <Link href="/services/sea-freight" className="block text-gray-600 hover:text-[#283694]">Sea Freight</Link>
                  <Link href="/services/road-freight" className="block text-gray-600 hover:text-[#283694]">Road Freight</Link>
                  <Link href="/services/customs" className="block text-gray-600 hover:text-[#283694]">Customs</Link>
                  <Link href="/services/courier" className="block text-gray-600 hover:text-[#283694]">COURIER</Link>
                </div>
              </div>

              {/* Company Column */}
              <div>
                <h4 className="text-lg font-semibold text-[#283694] mb-4">COMPANY</h4>
                <div className="space-y-2">
                  <Link href="/about" className="block text-gray-600 hover:text-[#283694]">About Us</Link>
                  <Link href="/news" className="block text-gray-600 hover:text-[#283694]">News</Link>
                  <Link href="/office" className="block text-gray-600 hover:text-[#283694]">Registered Office</Link>
                  <Link href="/environment" className="block text-gray-600 hover:text-[#283694]">Environment</Link>
                  <Link href="/careers" className="block text-gray-600 hover:text-[#283694]">Careers</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners and Social Media Section */}
      



      {/* Partner Logos Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <Image
                src="/images/partners/AEO_final-cs.jpg"
                alt="AEO Certification"
                width={120}
                height={60}
                className="object-contain"
                style={{ width: 'auto', height: '60px' }}
              />
              <Image
                src="/images/partners/iso.png"
                alt="ISO Certification"
                width={120}
                height={60}
                className="object-contain"
                style={{ width: 'auto', height: '60px' }}
              />
              <Image
                src="/images/partners/Bifa Logo.png"
                alt="BIFA Member"
                width={120}
                height={60}
                className="object-contain"
                style={{ width: 'auto', height: '60px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
