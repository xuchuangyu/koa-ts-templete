/*
 * @Date: 2024-01-03 10:16:12
 * @Description: 
 * @LastEditTime: 2024-01-03 10:19:17
 * @FilePath: \react-hook-ts\craco.config.js
 */

const path=  require('path');

module.exports={
  // webpack 配置
  webpack:{
    // 配置别名
    alias:{
      // 约定 使用 @ 标识 src
      '@':path.resolve(__dirname,'src')
    }
  }
}