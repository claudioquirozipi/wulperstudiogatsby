module.exports = {
  siteMetadata: {
    title: `Wulpers Studio - UI/UX for digital projects`,
    author: {
      name: `Claudio Quiroz`,
      summary: `Ingeniero industrial y desarrollador frontend`,
    },
    description: `We are a digital studio capable of transforming an idea into a mindblowing project.`,
    siteUrl: `https://wulperstudio.com`,
    keywords: `App design, UI, UX, Software development, Sofware factory, Software interfase. Diseño de apps, diseño de interfases, experiencia de usuario, empresa de software,`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `static`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://admin.wulperstudio.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`Post`],
        //If using single types place them in this array.
        // singleTypes: [`Contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    },
  ],
}
