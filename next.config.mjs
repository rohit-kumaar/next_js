/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/redirect",
        destination: "/",
        permanent: false,
      },
      {
        source: "/user/:userId",
        destination: "/",
        permanent: false,
      },
      {
        source: "/redirect-another-page",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
