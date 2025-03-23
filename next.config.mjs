/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/our-services/",
        destination: "/mq-services/",
        permanent: true,
      },
      {
        source: "/services-2/",
        destination: "/support/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
