import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },

    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;

//insert  it insidde  the nextConfig
// images: {
//   remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "google.com",
//     }
//   ]
// }