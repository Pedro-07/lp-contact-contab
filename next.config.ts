import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "172.26.64.1",
    "172.28.208.1",
    "192.168.100.236",
    "loca.lt",
    "*.loca.lt",
    "lhr.life",
    "*.lhr.life",
    "2713fb291c36ca.lhr.life"
  ],
};

export default nextConfig;



