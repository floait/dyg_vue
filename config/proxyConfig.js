module.exports = {
  proxy: {
    '/apis': {  //baseUrl
      target: 'http://********.com/', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/apis': ''  //需要rewrite的,
      }
    },
  }
}
