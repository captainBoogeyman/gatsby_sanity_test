module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "o9jgtdz3",
        dataset: "production",
        overlayDrafts: true,
        watchMode: true,
        token: 'sk53smq94b71A6FWCkwBKA6YZweDoyc0F0LCrmMNW9fMSBNSwtDkkEEaPxQMFG3kxSk0SB9lR9noN6uVUKXAMiXcJiEBPfEbdiJNxd13AddO0EJbzBeLH7iZk7Y592XbKYywoPmmDaZwxpEUvUVMms5ZVToQBKcyUsv798oKl9runuGjhWSP',
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/data/`,
    //   },
    // },
    "gatsby-plugin-sass", "gatsby-image",
    "gatsby-transformer-sharp", "gatsby-plugin-sharp",
  ],
};
