module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.huntdesignco.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3644f6535236792855b6ba9770cd5f60'),
    },
  },
});
