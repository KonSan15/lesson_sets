/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Update this to match your repository name
    basePath: '/lesson-sets',
    // This helps with serving static assets
    assetPrefix: '/lesson-sets/',
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
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md'],
  };
  
  module.exports = nextConfig;