module.exports = {
  proxy: {
    '/hecdoctor': {  //baseUrl
      target: 'http://********.com/hecdoctor', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/hecdoctor': ''  //需要rewrite的,
      }
    },
    '/apis': {  //api接口地址
      target: 'http://*********.com/hecdoctor/api/user', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/apis': ''  //需要rewrite的,
      }
    },
    '/article': {  //文章
      target: 'http://*********.com/hecdoctor/api/user/article', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/article': ''  //需要rewrite的,
      }
    },
    '/article': {  //文章
      target: 'http://*********.com/hecdoctor/api/user/article', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/article': ''  //需要rewrite的,
      }
    }
  }
}
