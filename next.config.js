/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // console.log(config)
    // Important: return the modified config
    // config.externals.push({
    //   "react-hook-form": "react-hook-form",
    // });
    return config;
  },
};

module.exports = nextConfig;
