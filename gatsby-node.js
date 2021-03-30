const path = require("path");
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if(node.internal.type ===  'MarkdownRemark') {
      const urlPath = path.basename(node.fileAbsolutePath, ".md");

      createNodeField({
        node,
        name: "path",
        value: urlPath
      })
  }
}

module.exports.createPages = async ({graphql , actions}) => {
    const   {createPage} = actions;
    const template = path.resolve("./src/templates/blogTemplate.js");

    const pages = await graphql(`
    query {
        allMarkdownRemark {
          edges {
            node {
              fields{
                path
              }
            }
          }
        }
      }
      
    `);
    console.log(pages);

    pages.data.allMarkdownRemark.edges.forEach(blogPg => {
        createPage({
            component: template,
            path: `/blog/${blogPg.node.fields.path}`,
            context: {
                slug: blogPg.node.fields.path
            }
        })
    });
}
