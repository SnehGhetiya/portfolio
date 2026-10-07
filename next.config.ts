import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Reverse proxy for PostHog (US cloud) so requests are first-party.
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://us-assets.i.posthog.com/array/:path*",
      },
      { source: "/ingest/:path*", destination: "https://us.i.posthog.com/:path*" },
    ];
  },
  // PostHog API paths end in a slash; don't redirect them away.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
