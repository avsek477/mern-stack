module.exports = {
  smtp: {
    protocal: '',
    email: '',
    password: '',
    server: '',
    port: '',
    secure: true,
    security: '',
  },
  channel: 'sendgrid', // ['smtp','mailgun','sendgrid']
  mailgun: {
    api_key: '',
    domain: '',
  },
  sendgrid: {
    api_key: process.env.SENDGRID_API_KEY
  },
};
