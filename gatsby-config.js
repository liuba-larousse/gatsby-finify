/** @format */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Finify',
    author: 'liuba.larousse',
    description: 'E-Commerce Web Development Studio',
    url: 'https://www.finify.expert', // No trailing slash allowed!
    image:
      'https://www.finify.expert/static/a4f33d0f32f787cb549f5fd4e2047d2c/d9e4f/hero.jpg', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
