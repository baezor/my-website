require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Angel Baez`,
    name: `Angel Baez`,
    siteUrl: `https://romerobaez.com`,
    description: `Developer & Entrepeneur`,
    hero: {
      heading: `Developer, entrepreneur and bookworm. I'm not an A.I. (or who knows 👀)`,
      maxWidth: 900,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/baezor`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/angelromerobaez/`,
      }
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Angel Baez`,
        short_name: `AngelBaez`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    }
  ],
};
