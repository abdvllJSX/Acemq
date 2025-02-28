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
      {
        source: "/mq-services/",
        destination: "/rabbitmq/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
