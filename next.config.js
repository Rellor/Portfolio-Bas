/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === "development";

// Only the origins this site actually needs. Anything else - a script from
// another host, a page trying to frame this one, a form posting elsewhere - is
// blocked by the browser.
const contentSecurityPolicy = [
  "default-src 'self'",
  // Next.js inlines a small bootstrap script, hence 'unsafe-inline'. The dev
  // server additionally needs eval for hot reloading.
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "media-src 'self'",
  // The itch.io game players.
  "frame-src https://itch.io https://*.itch.io https://*.itch.zone",
  `connect-src 'self'${isDevelopment ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  reactStrictMode: true,
  // Do not advertise the framework version to anyone scanning the site.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
