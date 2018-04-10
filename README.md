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
