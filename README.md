# vueapi

> A Vue.js project
> 一个vue.js项目

## Build Setup

``` bash
# install dependencies
# 更新依赖
npm install

# serve with hot reload at localhost:8080
# 运行命令
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# ajax
npm install axios -S

#main.js:
## import axios from 'axios'
# 改写原型链
### Vue.prototype.$ajax = axios
#使用
##
### methods: {
###    submitForm () {
###    this.$ajax({
###     method: 'post',
###     url: '/user',
###     data: {
###     name: 'wise',
###     info: 'wrong'
###     }
###    })
###   }
#
#


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# dyg


# 20180416 push backup the lasted note
##个人中心引入图标(未排版)
##新增食物
##尝试使用  jsonp 进行跨域,产生问题,原因,未知
##############################
# 20180416 push backup the lasted note
##解决ajax跨域不成功的问题,通过配置代理访问,返回了成功标识,但数据依旧提示请求头错误

