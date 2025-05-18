/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'development' ? '' : '/cargo',
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/cargo',
  distDir: 'dist',
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    unoptimized: true
  },
  trailingSlash: true,
  experimental: {
    appDir: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'development' ? '' : '/cargo',
  },
}

module.exports = nextConfig
