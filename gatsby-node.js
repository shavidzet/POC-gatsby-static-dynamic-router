/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
//   console.log(page.path, 333)
  if (page.path.match(/^\/profile\/overview/)) {
      console.log(page.path)
    page.matchPath = "/profile/:id/overview"  
    page.context = {
        tabName: 'overview'
    }

    // Update the page.
    createPage(page)
  }

    if (page.path.match(/^\/profile\/statistics/)) {
        page.matchPath = "/profile/:id/statistics"  
        page.context = {
            tabName: 'statistics'
        }

    // Update the page.
    createPage(page)
  }
}