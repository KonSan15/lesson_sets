/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: process.env.GITHUB_ACTIONS ? '/lesson-sets' : '',
    assetPrefix: process.env.GITHUB_ACTIONS ? '/lesson-sets/' : '',
    
    // Remove trailing slash to fix base tag issues
    trailingSlash: false,
    
    // Modify webpack config for consistent path handling
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      });
  
      // Ensure public path is set correctly for GitHub Pages
      if (process.env.GITHUB_ACTIONS) {
        config.output = {
          ...config.output,
          publicPath: '/lesson-sets/_next/',
        };
      }
  
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      
      return config;
    },
  
    // Add custom headers
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;