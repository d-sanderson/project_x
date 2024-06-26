/* eslint-disable max-len */
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)
require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: 'David Sanderson, Software Engineer',
    description:
      "Hi! I'm David, I am a Software Engineer from Albuquerque, New Mexico. I enjoy playing piano, learning new languages, and leveraging code to (creatively) solve problems.",
    author: '@_dsanderson',
    topHeader: {
      superTitle: ' David Sanderson',
      subTitle: 'Software Engineer',
    },
    about: {
      title: 'Hi I am David Sanderson!',
      content: ' I am a Software Engineer from Albuquerque, New Mexico. I enjoy playing piano, learning new languages, and leveraging code to (creatively) solve problems.',
    },
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
  ],
}
