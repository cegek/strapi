module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "mail.smart-card.io",
        secure: false,
        port: 587,
        tls: {
          ciphers: "SSLv3",
          rejectUnauthorized: false,
        },
        requireTLS: true,
        auth: {
          user: "noreply@smart-card.io",
          pass: "PrismaDev2020!",
        },
      },
      // providerOptions: {
      //   host: 'localhost',
      //   port: 1025,
      //   ignoreTLS: true,
      // },
      settings: {
        defaultFrom: "noreply@smart-card.io",
        defaultReplyTo: "noreply@smart-card.io",
      },
    },
  },
});
