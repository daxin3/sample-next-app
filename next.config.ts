import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sample-next-app', 
  // assetPrefix: 'https://daxin3.github.io/sample-next-app', // Seems to not to work.......
  reactStrictMode: true
  
};

export default nextConfig;
