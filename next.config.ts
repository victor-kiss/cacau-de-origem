import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  images:{
    qualities:[50,75]
  }
};

export default nextConfig;
