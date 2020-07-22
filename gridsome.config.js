// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  titleTemplate: "%s",

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    const svgoConfig = {
      svgo: {
        plugins: [{
          cleanupIDs: false,
          convertShapeToPath: false
        }]
      }
    }
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
          .options(svgoConfig)
  },

  plugins: []
}
