/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
};

module.exports = nextConfig;

const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();
