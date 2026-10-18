/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // generates a static site in /out for GitHub Pages
  images: { unoptimized: true }, // GitHub Pages has no image optimization server
  trailingSlash: true,
  // No basePath needed: the site is served from the root of theankitkurmi.com
};

module.exports = nextConfig;
