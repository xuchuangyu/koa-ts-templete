/* eslint-env node */
module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375,

      selectorBlackList: ['favor']
    }
  }
}
