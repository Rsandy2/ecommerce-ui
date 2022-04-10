/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

// module.exports = nextConfig;

module.exports = {
  webpack(config, options) {
    config.resolve.alias["server"] = path.join(__dirname, "server");
    return config;
  },
};
