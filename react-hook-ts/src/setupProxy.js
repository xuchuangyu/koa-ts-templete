
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/dev-api',
      createProxyMiddleware({
        target: 'http://127.0.0.1:8686', //代理的地址
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''  // 将请求路径中的 "/api" 替换为 ""
        }
      })
    )
  };