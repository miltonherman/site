const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let type = node.fileAbsolutePath.match(/content\/(.*?)\//);
    if (node.frontmatter.path != null && type.length > 1) {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/` + type[1] + `.js`),
        context: {}, // additional data can be passed via context
      })
    }
  })
}
