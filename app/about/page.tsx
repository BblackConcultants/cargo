import Image from 'next/image'
import Link from 'next/link'
import ShippingForm from '@/components/ShippingForm'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function About() {
  return (
    <div>
      {/* Fixed Navigation */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-white shadow-lg rounded-l-lg overflow-hidden">
        <div className="flex flex-col space-y-1">
          <Link href="/quote" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors group">
            <Image
              src={`${basePath}/images/icons/pound-icon.svg`}
              width={30}
              height={20}
              alt="Quote icon"
              className="text-[#283694] group-hover:text-[#f47521]"
            />
            <span className="text-gray-700 group-hover:text-[#f47521]">Get Quote</span>
          </Link>
          
          <Link href="/locations" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors group">
            <Image
              src={`${basePath}/images/icons/map-pin.svg`}
              width={30}
              height={20}
              alt="Map pin icon"
              className="text-[#283694] group-hover:text-[#f47521]"
            />
            <span className="text-gray-700 group-hover:text-[#f47521]">Locations</span>
          </Link>
          
          <Link href="/contact" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors group">
            <Image
              src={`${basePath}/images/icons/chat.svg`}
              width={30}
              height={20}
              alt="Chat icon"
              className="text-[#283694] group-hover:text-[#f47521]"
            />
            <span className="text-gray-700 group-hover:text-[#f47521]">Contact</span>
          </Link>
          
          <Link 
            href="/book-online" 
            className="flex items-center space-x-3 px-4 py-3 bg-[#f47521] hover:bg-[#e06411] transition-colors group"
          >
            <Image
              src={`${basePath}/images/icons/package.svg`}
              width={30}
              height={20}
              alt="Package icon"
              className="text-white"
            />
            <div className="text-white">
              <div className="text-sm">Packed & Less Than 30kg?</div>
              <div className="font-semibold">Book Now</div>
            </div>
          </Link>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center text-white overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl">
              Experts in quick, cost-effective deliveries from UK to any destination in the world
            </p>
          </div>
        </div>
      </section>

      {/* Overlap Section */}
      <div className="w-full bg-[#f47521] -mt-20 relative z-20 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
            Excellence in Global Freight Solutions
          </h2>
        </div>
      </div>
      {/* Company History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#283694] mb-8">We at Cargo World Link!</h2>
            <div className="prose max-w-none space-y-6">
              <p className="text-lg text-gray-700">
                Here at Cargo World Link, we're proud to be experts in quick, cost-effective deliveries from UK to any destination in the world. Whether you're looking for next day delivery within UK or require cost-effective freight forwarding solution to key global destinations, Cargo World Link is determined to provide a professional and reliable service every time.
              </p>
              <p className="text-lg text-gray-700">
                Our sea and air freight services make it possible to extend our reach far beyond the limits of Europe. With strong relationships with a number of partners all over the world, we can deliver freight to the Africa, North America, Middle East, the Far East and even Australasia. We also able to handle imports from any destination in the world into UK, we have sufficient experience and expertise needed to ensure a smooth, seamless delivery from pick up to drop off.
              </p>
              <p className="text-lg text-gray-700">
                We have a number of other services available including the arrangement of insurance on behalf of clients for commercial shipments, tail lift delivery packaging and storage services depending on your cargo and its final destination.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-[#283694] mt-12 mb-8">Our Mission</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-[#f47521] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>To keep all our customers informed</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-[#f47521] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>To ensure easy and transparent transactions</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-[#f47521] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Maintain High Ethical Standards</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-[#f47521] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Drive Continuous Improvement</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-[#f47521] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>To deliver what we promise</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-[#f47521] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>To provide freight Security</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-[#f47521] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>To ensure all shipments are covered by freight/cargo Insurance</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-[#f47521] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>To offer a stress free and efficient customs clearance and brokerage service</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 text-[#f47521] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>To make client's cargo compliant with local and destination laws</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#283694] mb-12 text-center">Our Partners</h2>
          <div className="partners-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="partner-item">
              <Image
                src="/images/partners/ups-logo.png"
                width={150}
                height={150}
                alt="UPS Logo"
                className="w-auto h-auto max-h-20 object-contain"
              />
            </div>
            <div className="partner-item">
              <Image
                src="/images/partners/nmt-shipping.png"
                width={150}
                height={150}
                alt="NMT Shipping Logo"
                className="w-auto h-auto max-h-20 object-contain"
              />
            </div>
            <div className="partner-item">
              <Image
                src="/images/partners/msc.png"
                width={150}
                height={150}
                alt="MSC Logo"
                className="w-auto h-auto max-h-20 object-contain"
              />
            </div>
            <div className="partner-item">
              <Image
                src="/images/partners/martinair-cargo.png"
                width={150}
                height={150}
                alt="Martinair Cargo Logo"
                className="w-auto h-auto max-h-20 object-contain"
              />
            </div>
            <div className="partner-item">
              <Image
                src="/images/partners/dhl.png"
                width={150}
                height={150}
                alt="DHL Logo"
                className="w-auto h-auto max-h-20 object-contain"
              />
            </div>
            <div className="partner-item">
              <Image
                src="/images/partners/ami.png"
                width={150}
                height={150}
                alt="AMI Logo"
                className="w-auto h-auto max-h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#283694] mb-6">Stay Updated with Our Latest Services</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our mailing list to receive updates about our services, shipping rates, and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
              required
            />
            <button
              type="submit"
              className="bg-[#f47521] text-white px-8 py-3 text-lg font-semibold hover:bg-[#e06411] transition-colors inline-flex items-center space-x-2 rounded"
            >
              <span>Subscribe</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
