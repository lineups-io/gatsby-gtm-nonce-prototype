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
          `Content-Security-Policy: script-src 'self' 'nonce-${nonce}'; img-src 'self' www.googletagmanager.com; frame-ancestors *`
        ]
      }
    }
  ],
};
