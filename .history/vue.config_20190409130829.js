const path = require('path');
module.exports = {
  baseUrl: "./",
  outputDir: "dist",

  css: {
    // 配置css模块
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  },

  productionSourceMap: false,

  devServer: {
    open: "Chrome",
    port: 8080,
    host: "192.168.1.168",
    proxy: {
      "/api": {
        target: "http://39.107.50.74:8888",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/less/global.less')]
    }
  }
};
