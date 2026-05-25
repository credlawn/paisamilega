import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.cipl.me',
        port: '',
        pathname: '/api/files/**',
      },
      {
        protocol: 'https',
        hostname: 'paisamilega.in',
        port: '',
        pathname: '/api/files/**',
      },
      {
        protocol: 'https',
        hostname: '*.paisamilega.in',
        port: '',
        pathname: '/api/files/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8090',
        pathname: '/api/files/**',
      },
    ],
  },
};

export default nextConfig;
