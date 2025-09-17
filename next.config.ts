import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://kuwswlhsvzkemdgc.public.blob.vercel-storage.com/**"),
    ],
  },
};

export default nextConfig;
