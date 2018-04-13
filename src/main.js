// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import aesJs from 'aes-js'
import VueJsonp from 'vue-jsonp'
import CryptoJS from 'crypto-js'
// import axios from 'axios'


Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.use(aesJs)
Vue.use(VueJsonp)

// let aesjs = require('aes-js');


// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}
// ajax
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// Vue.prototype.$ajax = axios



Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
// Vue.http.headers.common['Content-Type'] = 'applacation/json';
// Vue.http.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
// Vue.http.options.emulateJSON = true


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{
    data:{}
  },
  replace: false,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
