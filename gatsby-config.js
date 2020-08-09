module.exports = {
  siteMetadata: {
    title: `Курганская соборная мечеть`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/src/pages` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '57132133',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        version: 2,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          { resolve: `gatsby-remark-images`, options: { maxWidth: 770 } },
        ],
      },
    },
  ],
}
