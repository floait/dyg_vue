// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
