/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Ensure trailing slashes for consistent path resolution
    trailingSlash: true,
    
    // Determine the base path and asset prefix based on environment
    basePath: process.env.GITHUB_ACTIONS ? '/lesson-sets' : '',
    assetPrefix: process.env.GITHUB_ACTIONS ? 'https://konsan15.github.io/lesson-sets' : '',
    
    // Add custom headers for GitHub Pages
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store',
            },
          ],
        },
      ];
    },
  
    // Modify webpack config to handle static assets
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      });
  
      // Ensure correct public path handling
      config.output.publicPath = process.env.GITHUB_ACTIONS ? 
        'https://konsan15.github.io/lesson-sets/_next/' : 
        '/_next/';
  
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      
      return config;
    },
    
    // Handle all page extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md'],
  };
  
  module.exports = nextConfig;