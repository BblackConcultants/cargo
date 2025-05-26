import Link from 'next/link';
import Image from 'next/image';

const LocationsPage = () => {
  const regions = [
    {
      name: 'Africa',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/600px-Africa_%28orthographic_projection%29.svg.png',
      description: 'Comprehensive freight solutions across the African continent.',
      countries: ['South Africa', 'Nigeria', 'Kenya', 'Egypt', 'Morocco']
    },
    {
      name: 'Asia',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/600px-Asia_%28orthographic_projection%29.svg.png',
      description: 'Expert shipping services throughout Asia and the Middle East.',
      countries: ['China', 'Japan', 'India', 'Singapore', 'UAE']
    },
    {
      name: 'Australia',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Australia_%28orthographic_projection%29.svg/600px-Australia_%28orthographic_projection%29.svg.png',
      description: 'Reliable freight services to Australia and surrounding regions.',
      countries: ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea']
    },
    {
      name: 'Europe',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/600px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png',
      description: 'Extensive network covering all major European destinations.',
      countries: ['UK', 'Germany', 'France', 'Italy', 'Spain']
    },
    {
      name: 'North America',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Location_North_America.svg/600px-Location_North_America.svg.png',
      description: 'Comprehensive coverage across USA, Canada, and Mexico.',
      countries: ['United States', 'Canada', 'Mexico']
    },
    {
      name: 'South America',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_America_%28orthographic_projection%29.svg/600px-South_America_%28orthographic_projection%29.svg.png',
      description: 'Reliable shipping solutions throughout South America.',
      countries: ['Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#283694] mb-4">Global Shipping Destinations</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Cargo World Link provides comprehensive freight and logistics solutions worldwide. 
          Our extensive network ensures reliable shipping services across six continents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regions.map((region) => (
          <div key={region.name} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48">
              <div className="relative h-full w-full" style={{ padding: '1rem', background: '#f8fafc' }}>
                <svg
                  viewBox="0 0 600 400"
                  className="w-full h-full transition-transform hover:scale-110"
                  style={{ fill: '#283694' }}
                >
                  <image
                    href={region.image}
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
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#283694] mb-3">{region.name}</h2>
              <p className="text-gray-600 mb-4">{region.description}</p>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-700">Key Destinations:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {region.countries.map((country) => (
                    <li key={country}>{country}</li>
                  ))}
                </ul>
              </div>
              <Link 
                href={`/services/${region.name.toLowerCase().replace(' ', '-')}`}
                className="inline-block mt-4 px-6 py-2 bg-[#283694] text-white rounded-md hover:bg-[#283694]/90 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-[#283694] mb-4">Need More Information?</h2>
        <p className="text-gray-600 mb-6">
          Contact our expert team to discuss your specific shipping requirements or get a custom quote.
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

export default LocationsPage;
