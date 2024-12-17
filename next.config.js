/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // This ensures the app works when deployed to a subfolder
    basePath: '',
    trailingSlash: true,
  }
  
  module.exports = nextConfig