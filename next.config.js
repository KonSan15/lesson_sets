/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      });
  
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      
      return config;
    },
    // This ensures pages are exported with proper extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md'],
  };
  
  module.exports = nextConfig;