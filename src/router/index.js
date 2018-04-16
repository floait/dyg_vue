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
// import aesjs from 'aes-js'
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
import foodBank from '@/views/home/pages/foodBank.vue'
import feedback from '@/views/home/pages/member/feedback.vue'
import healthRecords from '@/views/home/pages/member/healthRecords.vue'
import myCollection from '@/views/home/pages/member/myCollection.vue'
import resinger from '@/views/home/pages/member/resinger.vue'
import checktheUpdate from '@/views/home/pages/member/checktheUpdate.vue'
import about from '@/views/home/pages/member/about.vue'
import article from '@/views/home/pages/article.vue'




Vue.use(Router)
// Vue.use(aesjs)
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
          component: Member,
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
    },
    {
      path: '/home/pages/member/',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/home/pages/member/',
      name: 'healthRecords',
      component: healthRecords
    },
    {
      path: '/home/pages/member/',
      name: 'myCollection',
      component: myCollection
    },
    {
      path: '/home/pages/member/',
      name: 'resinger',
      component: resinger
    },
    {
      path: '/home/pages/member/',
      name: 'checktheUpdate',
      component: checktheUpdate
    },
    {
      path: '/home/pages/member/',
      name: 'about',
      component: about
    },
    {
      path: '/foodBank',
      name: 'foodBank',
      component: foodBank
    },
    {
      path: '/article',
      name: 'article',
      component: article
    }
  ]
})
