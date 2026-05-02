import type { NextConfig } from "next";

const securityHeaders = [
  // Forces browsers to use HTTPS for 2 years, even if the user types http://
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Prevents your site from being embedded in an <iframe> on another domain (clickjacking)
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Stops browsers from guessing a file's type — prevents MIME-confusion attacks
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controls how much referrer info is sent when navigating away from your site
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Disables browser features your site doesn't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Tells browsers which origins can load each type of resource (CSP)
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js needs 'unsafe-inline' for its runtime scripts; nonce-based CSP is the stricter alternative
      "script-src 'self' 'unsafe-inline' https://www.youtube.com https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      // YouTube embeds load from youtube.com and ytimg.com
      "frame-src https://www.youtube.com",
      "img-src 'self' data: blob: https:",
      // Supabase REST API calls
      "connect-src 'self' https://*.supabase.co https://va.vercel-scripts.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      // Blocks loading this page in a frame (redundant with X-Frame-Options but belt-and-suspenders)
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        // Apply to every route
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
