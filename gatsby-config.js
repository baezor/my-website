module.exports = {
  siteMetadata: {
    title: `Angel Baez`,
    name: `Angel Baez`,
    siteUrl: `https://romerobaez.com`,
    description: `Developer & Entrepeneur`,
    hero: {
      heading: `Developer, entrepeneur and baker. Obviously not an A.I. (or who knows 👀)`,
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
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
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
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
