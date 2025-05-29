/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'development' ? '' : '/cargo',
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/cargo',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    domains: ['upload.wikimedia.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/commons/**',
      },
    ],
  },
  trailingSlash: true,

  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'development' ? '' : '/cargo',
  },
}

module.exports = nextConfig
