module.exports = {
  siteMetadata: {
    title: `Saito Restaurant`,
    description: `Japanese steakhouse with hibachi grills and a full sushi bar in Memphis (Bartlett) and Arlington, TN. See our menu, hours and directions, or order online.`,
    author: `Brian Hoang`,
    siteUrl: `https://www.saito-restaurant.com`,
    image: `/og-image.jpg`,
    imageAlt: `Dining room at Saito Restaurant`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Saito Restaurant`,
        short_name: `Saito`,
        description: `Japanese steakhouse and sushi bar in Memphis and Arlington, TN.`,
        start_url: `/`,
        background_color: `#1a1a1a`,
        theme_color: `#c8102e`,
        display: `minimal-ui`,
        icon: `src/images/saito-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
