const { v4: uuidv4 } = require("uuid")

const nonce = btoa(uuidv4())

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
          `Content-Security-Policy: script-src 'nonce-${nonce}' 'self'`
        ]
      }
    }
  ],
};
