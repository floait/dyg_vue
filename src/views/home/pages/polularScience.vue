<template>
  <div>
    <!--导航 tab-->
    <nav>
      <div class="tab" :class="{active:showNav == '1'}"  @click="showNav = '1';changeList(1)">
          <a href="javascript:void(0)" class="">知识库</a>
      </div>
      <div class="tab" :class="{active:showNav == '2'}"   @click="showNav = '2';changeList(6)">
          <a href="javascript:void(0)">社区互动</a>
      </div>
    </nav>

    <!-- swiper -->
    <swiper class="swiper-box" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in listImg" :key="item.id" @mouseenter.native="stopPlay" @mouseleave.native="play" ><img class="swiper-image" :src="item.url" :alt="item.url" /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!--end swiper-->

    <!--container-->
    <div class="container">
      <!--buttonlist-->

      <div v-if="showNav == '1'" class="botton-list">
        <a href='javascript:void(0)'>
          <img src="../../../assets/img/5.jpg" alt="">
        </a>
        <ul>
          <li>
            <a href="javascript:void(0)">
              <i class="iconfont icon icon-wuuiconsuotanhao"></i>
              <span>高尿酸危害</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="iconfont icon icon-jiedanjilumian"></i>
              <span>高尿酸百科</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="iconfont icon icon-apple-and-pear"></i>
              <span>食物库</span>
            </a>
          </li>
        </ul>
      </div>
      <div v-else class="notice">
        <ul>
          <li v-for="item in listNotice" :key="item.id">
            <a href="javascript:void(0)"><b>公告</b><span>阳光医生项目正式启动</span></a>
          </li>
        </ul>
      </div>
      <!--end buttonlist-->
      <!--main-->
      <nav class="mainbav">
        <ul v-show="showNav == 1">
          <li v-for="item in listNav" :key="item.id" :class="{active:showList == item.listKey}" @click="changeList(item.listKey)"><a href="javascript:void(0)">{{item.title}}</a></li>
        </ul>
        <ul v-show="showNav == 2">
          <li v-for="item in listNav2" :key="item.id" :class="{active:showList == item.listKey}" @click="changeList(item.listKey)"><a href="javascript:void(0)">{{item.title}}</a></li>
        </ul>
      </nav>
      <div class="main-list">
        <ul v-if="showList == 1">
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
        </ul>
        <ul v-else-if="showList == 2">
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>资讯</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
        </ul>
        <ul v-else-if="showList == 3">
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>专家课堂</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
        </ul>
        <ul v-else-if="showList == 4">
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>医学前沿</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
        </ul>
        <ul v-else-if="showList == 5">
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>慢友故事</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>痛风检查利器--双能量TC</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
        </ul>
        <ul v-else-if="showList == 6">
          <!--dynamics-->
          <li>
            <div class="list-header">
              <div class="list-header-img"><img src="" alt=""></div>
              <div class="list-header-text">
                <div class="line"><b>13000000000</b><span>Lv1</span></div>
                <div class="line">尿酸值:222</div>
              </div>
            </div>
            <div class="list-body">
              <p>这是一个测试2018.03.28</p>
              <div class="img-box">
                <img src="" alt="img1">
                <img src="" alt="img2">
                <img src="" alt="img3">
              </div>
              <div class="list-body-time">
                3/28 17:20 <span>东莞</span>·<span>长安</span> <span class="dynamics">动态</span>
              </div>
            </div>
            <div class="list-footer">
              <div class="line">
                <div class="visit fr">
                  <!--i.iconfont.icon.-->
                </div>
                <div class="replay fl">
                  <!--i.iconfont.icon.-->
                </div>
                <div class="collection fl">
                  <!--i.iconfont.icon.-->
                  <span>0</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul v-else-if="showList == 7
">
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>动态</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
        </ul>
        <ul v-else-if="showList == 8">
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>经验</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
        </ul>
        <ul v-else>
          <li>
            <div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>
            <div class="list-right">
              <a>咨询</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>
              </div>
            </div>
          </li>
        </ul>


      </div>
      <!--end main-->
    </div>
    <!--end container-->

  </div>
</template>

<style>
  @import "../../../assets/css/base.css";
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
          keyList: [{key:"value"},{key:"value"}],
          keyList: [{key:"key1",value:"value"},{key:"key1",value:"value"}],

          listNav2: [
            {listKey: 6,title: "全部"},
            {listKey: 7,title: "动态"},
            {listKey: 8,title: "经验"},
            {listKey: 9,title: "咨询"}
          ],
          listNotice: [
            {type:"公告",title:"阳光医生项目正式启动",discription: "阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动"},
            {type:"公告",title:"阳光医生项目正式启动",discription: "阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动"},
            {type:"公告",title:"阳光医生项目正式启动",discription: "阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动"},
            {type:"公告",title:"阳光医生项目正式启动",discription: "阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动"}

          ],
          dynamic: [
            {
              id: 1,
              user: {
                username: '13000000000',
                nickname: "一条咸鱼",
                level: "1",
                uricacid: "222",
                thumb: ""
              },
              message:{
                id: 1,
                text: "这是一个测试",
                img:[
                  {url:"/static/img/1.jpg"},
                  {url:"/static/img/1.jpg"}
                ],
                time: "1522220040038",
                areas: {
                  areasCity: '东莞',
                  areasTown: '长安'
                },
                interaction: {
                  replay: '3',
                  collection: '收藏',
                  visit: '28'
                }
              }
            }
          ],
          showList: 1,
          swiperOption: {
            autoplay: 3000,
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          },
          showNav: 1
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
        },
        changeNav(){

        }
      }
    }
</script>

<style scoped>

</style>
