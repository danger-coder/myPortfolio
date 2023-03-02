/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // plugins: [
  //   // other plugins,
  //   new webpack.ProvidePlugin({
  //     $: 'jquery',
  //     jQuery: 'jquery',
  //     'window.jQuery': 'jquery'
  //   }),
  // ],
}

module.exports = nextConfig

