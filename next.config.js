/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Only add basePath and assetPrefix in production
    ...(process.env.NODE_ENV === 'production' && {
      basePath: '/lesson-sets',
      assetPrefix: '/lesson-sets'
    }),
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