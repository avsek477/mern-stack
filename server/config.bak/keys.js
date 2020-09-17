module.exports = {
  mongoURI: 'mongodb://trimmeruser:trimmerpass123@ds141815.mlab.com:41815/prj_videotrimmer',
  recaptcha: { secretKey: '', siteKey: '' },
  secretOrKey: 'secret',
  tokenExpireTime: 360000,
  isOauthConfig: { isGoogleAuth: false, isFacebookAuth: false, isGithubAuth: false },
  oauthConfig: {
    googleAuth: {
      client_id: '',
      client_secret: '',
    },
    facebookAuth: {
      FACEBOOK_APP_ID: '',
      FACEBOOK_APP_SECRET: '',
    },
    githubAuth: {
      ClientID: '',
      ClientSecret: '',
    },
  },
};
