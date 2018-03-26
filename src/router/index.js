/**
 * import pathname from path
 * 调用:
 * {
 * path: 'userpath', // 定义路由路径
 * name: 'pathname', // 对应跳转的pathname
 * component: pathname
 * }
 */
import Vue from 'vue'
import Router from 'vue-router'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import Hello from '@/components/Hello'
import Login from '@/views/login/login.vue'
import Register from '@/views/register/register.vue'
import Main from '@/views/main/main.vue'
import Home from '@/views/home/home.vue'
import Footer from '@/views/home/common/footer.vue'
import Header from '@/views/home/common/header.vue'
import Index from '@/views/home/pages/index.vue'
import polularScience from '@/views/home/pages/polularScience.vue'
import Doctors from '@/views/home/pages/doctors.vue'
import Medicines from '@/views/home/pages/medicines.vue'
import Member from '@/views/home/pages/member.vue'

Vue.use(Router)
// Vue.use(VueAwesomeSwiper)

// 配置路由
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Index',
          component: Index
        },
        {
          path: 'polularScience',
          name: 'polularScience',
          component: polularScience
        },
        {
          path: 'doctors',
          name: 'Doctors',
          component: Doctors
        },
        {
          path: 'medicines',
          name: 'Medicines',
          component: Medicines
        },
        {
          path: 'member',
          name: 'Member',
          component: Member
        },
        {
          path: 'common',
          name: 'Footer',
          component:Footer
        },
        {
          path: 'common',
          name: 'Header',
          component:Header
        }
      ]
    }
  ]
})
