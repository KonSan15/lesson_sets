/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    // Only add output: 'export' when doing static builds
    ...(process.env.npm_lifecycle_event === "build:static" && {
      output: "export",
    }),
    webpack: (config) => {
      // Ensure proper module handling
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      return config;
    }
  }
  
  module.exports = nextConfig