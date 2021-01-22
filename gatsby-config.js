module.exports = {
  siteMetadata: {
    title: `Angel Baez`,
    name: `Angel Baez`,
    siteUrl: `https://romerobaez.com`,
    description: `Developer & entrepreneur`,
    hero: {
      heading: `Hi! I'm building the future of the internet and the education.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/baezor`,
      },
      {
        name: `github`,
        url: `https://github.com/baezor`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/this.is.baez`,
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
