module.exports = {
  siteMetadata: {
    title: `TripleA Development`,
    description: `A small team located in Poland that specializes in web development.`,
    author: `TripleA`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `triplea`,
        short_name: `triplea`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/triplea.png`,
      },
    },
  ],
}
