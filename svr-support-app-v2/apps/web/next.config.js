/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensures the Stripe webhook handler can read raw body via req.text()
  experimental: {
    serverActions: { allowedOrigins: ["*"] }
  }
};
module.exports = nextConfig;
