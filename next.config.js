/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Required for static site generation
    images: {
      unoptimized: true,  // Required for static export
    },
    basePath: process.env.GITHUB_ACTIONS ? '/lesson-sets' : '',
    assetPrefix: process.env.GITHUB_ACTIONS ? '/lesson-sets/' : '',
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
    // This ensures Next.js processes all expected file types
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  };
  
  module.exports = nextConfig;