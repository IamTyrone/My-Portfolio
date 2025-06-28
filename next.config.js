// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...other config...
  images: {
    remotePatterns: [
      {
        protocol: "https", // Always specify the protocol
        hostname: "t4.ftcdn.net",
        // No port needed for default HTTPS
        pathname: "/**", // Allow all paths on this domain, or be more specific if possible
      },
      {
        protocol: "https",
        hostname: "www.safihelp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**",
      },
      // If you have local images in your `public` folder, no need to add them here.
      // This is ONLY for external image sources.
    ],
    // You can remove the 'domains' array once you've fully migrated to 'remotePatterns'
    // domains: [], // Optional: keep empty or remove if not using it at all
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
