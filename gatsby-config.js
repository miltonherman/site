module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdowns/feedback/`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`
  ]
};
