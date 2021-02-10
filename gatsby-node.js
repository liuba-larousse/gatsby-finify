/** @format */

const path = require('path');

exports.createPages = async function ({
  actions,
  graphql,
}) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.forEach((node) => {
    const slug = node.fields.slug;
    actions.createPage({
      path: slug,
      component: require.resolve(
        `./src/templates/project.js`
      ),
      context: { slug: slug },
    });
  });
};
