/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
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
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md'],
};

module.exports = nextConfig;