module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'huntdesignco'),
        username: env('DATABASE_USERNAME', 'huntdesignco'),
        password: env('DATABASE_PASSWORD', 'j?3_Se5C+yM@'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
