/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/landing/app', // Your subdirectory name
  assetPrefix: '/landing/app', // Needed if you're serving static assets

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
