import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Only this site's own files may load, plus the Google Maps embed shown after "Show Map".
// Next.js inlines its startup scripts and this page's CSS, so both need 'unsafe-inline': a nonce
// would make every request render on the server and lose static generation. Dev mode also needs eval.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src https://maps.google.com https://www.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // One-page site with ~7 KB of Tailwind CSS: inlining removes the render-blocking request.
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
