/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Add trailing slash for consistent routing
    trailingSlash: true,
    
    // Set base path for GitHub Pages
    basePath: process.env.NODE_ENV === 'production' ? '/lesson-sets' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/lesson-sets/' : '',
    
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