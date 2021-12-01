const { v4: uuidv4 } = require("uuid")

const nonce = uuidv4()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-global-context',
      options: {
        context: {
          nonce,
          gtmContainerId: 'GTM-WXQLXHW'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          'X-Frame-Options: SAMEORIGIN',
          `Content-Security-Policy: default-src 'self'; script-src 'unsafe-eval' 'unsafe-inline' https://tagmanager.google.com/ https://www.googletagmanager.com/; style-src 'unsafe-inline' https://tagmanager.google.com/ https://fonts.googleapis.com/; img-src 'unsafe-inline' https://ssl.gstatic.com/`
        ]
      }
    }
  ],
};
