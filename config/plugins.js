module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env('EMAIL_HOST'),
      port: env('EMAIL_PORT', 25),
      auth: {
        user: env('EMAIL_USERNAME'),
        pass: env('EMAIL_PASSWORD'),
      },
    },
    settings: {
      defaultFrom: 'site@xnizstudio.com',
      defaultReplyTo: 'site@xnizstudio.com',
    }
  }
});
