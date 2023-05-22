/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avaters.githubusercontent.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
    ],
  },
  output: "export",
};

module.exports = nextConfig;
