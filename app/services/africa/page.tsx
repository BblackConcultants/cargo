import Image from 'next/image';
import Link from 'next/link';

const AfricaPage = () => {
  const countries = [
    'South Africa', 'Nigeria', 'Kenya', 'Egypt', 'Morocco', 'Algeria', 'Angola',
    'Botswana', 'Cameroon', 'Congo', 'Ethiopia', 'Ghana', 'Ivory Coast',
    'Madagascar', 'Mozambique', 'Namibia', 'Senegal', 'Tanzania', 'Uganda', 'Zimbabwe'
  ];

  const services = [
    {
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services to all major African airports.',
      icon: 'fas fa-plane'
    },
    {
      title: 'Sea Freight',
      description: 'Cost-effective ocean freight solutions to all major African ports.',
      icon: 'fas fa-ship'
    },
    {
      title: 'Door-to-Door',
      description: 'Complete logistics solutions from pickup to final destination.',
      icon: 'fas fa-truck'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-full w-full" style={{ padding: '1rem', background: '#f8fafc' }}>
            <svg
              viewBox="0 0 600 400"
              className="w-full h-full"
              style={{ fill: '#283694' }}
            >
              <image
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/600px-Africa_%28orthographic_projection%29.svg.png"
                width="100%"
                height="100%"
                style={{ filter: 'url(#blueFilter)' }}
              />
            </svg>
            <svg width="0" height="0">
              <defs>
                <filter id="blueFilter">
                  <feColorMatrix
                    type="matrix"
                    values="0.33 0 0 0 0.157
                            0.33 0 0 0 0.212
                            0.33 0 0 0 0.580
                            0 0 0 1 0"/>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Shipping to Africa</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Comprehensive freight solutions across the African continent
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-[#283694] mb-6">Our African Shipping Services</h2>
          <p className="text-gray-600 mb-6">
            At Cargo World Link, we pride ourselves on providing outstanding shipping services to Africa. 
            With decades of experience in international freight, we offer reliable and cost-effective 
            cargo solutions for businesses and individuals alike.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg">
                <i className={`${service.icon} text-[#283694] text-3xl mb-4`}></i>
                <h3 className="text-xl font-semibold text-[#283694] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-[#283694] mb-4">Why Choose Us for African Shipping?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-[#f47521] mt-1 mr-2"></i>
                <span>Extensive network covering all major African ports and airports</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-[#f47521] mt-1 mr-2"></i>
                <span>Dedicated customer service team with African shipping expertise</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-[#f47521] mt-1 mr-2"></i>
                <span>Competitive rates and flexible shipping options</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-[#f47521] mt-1 mr-2"></i>
                <span>Full documentation and customs clearance support</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-[#283694] mb-4">Key Destinations</h3>
            <div className="grid grid-cols-1 gap-2">
              {countries.map((country) => (
                <div key={country} className="flex items-center p-2 hover:bg-gray-50 rounded">
                  <i className="fas fa-map-marker-alt text-[#f47521] mr-2"></i>
                  <span className="text-gray-700">{country}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#283694] text-white rounded-lg shadow-lg p-6 mt-6">
            <h3 className="text-2xl font-bold mb-4">Need a Quote?</h3>
            <p className="mb-6">Get in touch with our team for competitive shipping rates to Africa.</p>
            <Link 
              href="/quote" 
              className="block w-full text-center bg-[#f47521] text-white py-3 rounded-md hover:bg-[#f47521]/90 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-[#283694] mb-4">Ready to Ship?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact our expert team to discuss your African shipping requirements or get a custom quote.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-[#283694] text-white rounded-md hover:bg-[#283694]/90 transition-colors"
          >
            Contact Us
          </Link>
          <Link 
            href="/quote" 
            className="px-6 py-3 bg-[#f47521] text-white rounded-md hover:bg-[#f47521]/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AfricaPage;
