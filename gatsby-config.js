module.exports = {
  siteMetadata: {
    title: `Saito Restaurant`,
    description: `Saito Restaurant — Japanese steakhouse and sushi bar with hibachi grills at three locations in Memphis, Arlington, and Collierville, TN. Dine-in, carry-out, and delivery via DoorDash and Grubhub.`,
    author: `Brian Hoang`,
    siteUrl: `https://saitorestaurant.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        start_url: `/`,
        background_color: `#1a1a1a`,
        theme_color: `#c8102e`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
