module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f6cb904c160933080629e375da61adea'),
  },
});
