<template>
  <div>
    <!--导航 tab-->
    <nav>
      <a href="javascript:void(0)">知识库</a>
      <a href="javascript:void(0)">社区互动</a>
    </nav>

    <!-- swiper -->
    <swiper class="swiper-box" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in listImg" :key="item.id" @mouseenter.native="stopPlay" @mouseleave.native="play" ><img class="swiper-image" :src="item.url" :alt="item.url" /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!--end swiper-->

    <!--buttonlist-->
    <div class="container">
      <div class="botton-list">
        <a href='javascript:void(0)'>
          <img src="../../../assets/img/5.jpg" alt="">
        </a>
        <ul>
          <li>
            <a href="javascript:void(0)">
              <!--i.iconfont.icon- -->
              <span>高尿酸危害</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <!--i.iconfont.icon- -->
              <span>高尿酸百科</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <!--i.iconfont.icon- -->
              <span>食物库</span>
            </a>
          </li>
        </ul>
      </div>
      <!--end buttonlist-->
      <!--main-->
      <nav class="mainbav">
        <ul>
          <li  v-for="item in listNav" :key="item.id" @click="changeList(item.listKey)"><a href="javascript:void(0)">{{item.title}}</a></li>
        </ul>
      </nav>
      <div class="main-list">
        <ul v-if="showList == 1">
          <li>list1</li>
        </ul>
        <ul v-else-if="showList == 2">
          <li>list2</li>
        </ul>
        <ul v-else-if="showList == 3">
          <li>list3</li>
        </ul>
        <ul v-else-if="showList == 4">
          <li>list4</li>
        </ul>
        <ul v-else>
          <li>list5</li>
        </ul>

      </div>
      <!--end main-->
    </div>

  </div>
</template>

<style>
  @import "../../../assets/css/swiper.min.css";
  @import "../../../assets/css/polularScience.css";
</style>

<script>
  import { setCookie,getCookie,delCookie } from '../../../assets/js/cookie.js'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'


  export default {
    name: "polular-science",
    components: {
      swiper,
      swiperSlide
    },
    //定义这个sweiper对象
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    data () {
        return {
          listImg:[
            {url: '/static/img/1.jpg'},
            {url: '/static/img/2.jpg'},
            {url: '/static/img/3.jpg'},
            {url: '/static/img/4.jpg'},
            {url: '/static/img/5.jpg'}
          ],
          listNav: [
            {listKey: 1,title: "推荐"},
            {listKey: 2,title: "资讯"},
            {listKey: 3,title: "专家课堂"},
            {listKey: 4,title: "医学前沿"},
            {listKey: 5,title: "慢友故事"}
          ],
          showList: 1,
          swiperOption: {
            autoplay: 3000,
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          }
        }
      },
      mounted(){
        app.showLogo = false
        let uname = getCookie('username')
        this.name = uname
        if(uname == ""){
          this.$router.push('/')
        }
      },

      methods: {
        changeList(listKey){
          this.showList = listKey;
        }
      }
    }
</script>

<style scoped>

</style>
