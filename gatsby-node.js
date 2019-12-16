const path = require(`path`)
const _ = require(`lodash`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      pages: allMarkdownRemark(
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
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const tagTemplate = path.resolve(`src/templates/tags.js`)

  result.data.pages.edges.forEach(({ node }) => {
    let type = node.fileAbsolutePath.match(/content\/(.*?)\//);
    if (node.frontmatter.path != null && type.length > 1) {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/` + type[1] + `.js`),
        context: {}, // additional data can be passed via context
      })
    }
  });
  result.data.tagsGroup.group.forEach(tag => {
    createPage({
      path: `/blog/tags/${_.kebabCase(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      }
    });
  });
}
