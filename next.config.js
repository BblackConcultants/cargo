/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'development' ? '' : '/cargo',
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : 'https://booking.trsh-app.co.za/cargo',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    domains: ['booking.trsh-app.co.za'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'booking.trsh-app.co.za',
        pathname: '/cargo/**',
      },
    ],
  },
  trailingSlash: true,

  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'development' ? '' : '/cargo',
  },
}

module.exports = nextConfig
