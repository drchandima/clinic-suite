/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // remove `appDir` — Next 16 enables app router by default; you can remove experimental entirely
  }
};

module.exports = nextConfig;
