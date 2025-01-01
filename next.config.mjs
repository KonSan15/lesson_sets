// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Markdown handling with raw-loader
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    
    return config;
  },
  // Add page extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md'],
};

export default nextConfig;