module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'xnizstudio'),
        username: env('DATABASE_USERNAME', 'xnizstudio'),
        password: env('DATABASE_PASSWORD', 'xnizStudio123!'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
