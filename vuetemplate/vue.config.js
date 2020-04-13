const path = require('path')
console.log(path.resolve(__dirname, 'src/style/theme.less'))

const os = require('os');

function getNetworkIp () {
  let needHost = ''; // 打开的host
  try {
    // 获得网络接口列表
    const network = os.networkInterfaces();
    for (const dev in network) {
      const iface = network[dev];
      for (let i = 0; i < iface.length; i++) {
        const alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          needHost = alias.address;
        }
      }
    }
  } catch (e) {
    needHost = 'localhost';
  }
  return needHost;
}

module.exports = {
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  //   baseUrl: '/', // 基本路径
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 这个是加上自己的路径,不能使用(如下:alias)中配置的别名路径
        path.resolve(__dirname, './src/style/theme.less')
      ]
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          // 补全css前缀(解决兼容性)
          require('autoprefixer')(),
          // 把px单位换算成rem单位
          require('postcss-pxtorem')({
            rootValue: 75, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: ['.van-'], // 过滤掉.van-开头的class，不进行rem转换。
            propList: ['*'], // 可以从px更改为rem的属性。
            minPixelValue: 2 // 设置要替换的最小像素值。
          })
        ]
      }
    }
  },
  outputDir: 'dist',
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: getNetworkIp(),
    port: 8080,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api': {
        target: 'http://10.0.98.140:9012',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
