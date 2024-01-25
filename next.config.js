/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized:true,
  },
  basePath:"",
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/works": { page: "/works" },
      "/about": { page: "/about" },
      "/careers": { page: "/careers" },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
      "/services": { page: "/services" },
      "/blog": { page: "/blog" },
    };
  }

}

module.exports = nextConfig
