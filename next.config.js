module.exports = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
    ];
  },
  images: {
    domains: ['lbweb.lt'],

    domains: ['res.cloudinary.com'],
  },
};
