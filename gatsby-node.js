exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({ fromPath: '/facebook', toPath: 'https://facebook.com', redirectInBrowser: true, isPermanent: true })
  createRedirect({ fromPath: '/twitter', toPath: 'https://twitter.com/triplea_dev', redirectInBrowser: true, isPermanent: true })
  createRedirect({ fromPath: '/discord', toPath: 'https://discord.gg/xFSWRM5', redirectInBrowser: true, isPermanent: true })
  createRedirect({ fromPath: '/instagram', toPath: 'https://instagram.com', redirectInBrowser: true, isPermanent: true })
}