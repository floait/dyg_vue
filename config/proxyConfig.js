module.exports = {
  proxy: {
    '/apis': {  //api接口地址
      target: 'http://*********.com/hecdoctor/api/user', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/apis': ''  //需要rewrite的,
      }
    }
  }
}
