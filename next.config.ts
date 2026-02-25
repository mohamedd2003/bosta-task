import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    BASE_URL: "https://fakestoreapi.com",
  },
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
       
          port: '', // optional, leave empty if standard ports
          pathname: '/**',
        },
      ],
      unoptimized: true,
    },
};

export default nextConfig;
