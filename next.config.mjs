/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.yes24.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "search1.kakaocdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "covers.oreillystatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: { instrumentationHook: true },
  webpack(config, { isServer }) {
    if (isServer) {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: "msw/browser", alias: false });
      } else {
        config.resolve.alias["msw/browser"] = false;
      }
    } else {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: "msw/node", alias: false });
      } else {
        config.resolve.alias["msw/node"] = false;
      }
    }
    return config;
  },
};

export default nextConfig;
