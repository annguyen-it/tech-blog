/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: false,
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
