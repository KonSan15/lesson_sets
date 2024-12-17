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
      // Handle markdown files
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      });
  
      // Required fallbacks
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      
      return config;
    },
    // Ensure CSS handling
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md'],
    typescript: {
      ignoreBuildErrors: false,
    },
    swcMinify: true,
  };
  
  module.exports = nextConfig;