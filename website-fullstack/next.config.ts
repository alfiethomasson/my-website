/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // generate static HTML
};

module.exports = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/my-website" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-website/" : "",
};