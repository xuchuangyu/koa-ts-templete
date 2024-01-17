/*
 * @Date: 2023-12-29 18:51:10
 * @Description: 
 * @LastEditTime: 2024-01-12 14:57:10
 * @FilePath: \react-hook-ts\src\setupProxy.js
 */

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/dev-api',
      createProxyMiddleware({
        target: 'http://127.0.0.1:8088', //代理的地址
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''  // 将请求路径中的 "/api" 替换为 ""
        }
      })
    )
  };