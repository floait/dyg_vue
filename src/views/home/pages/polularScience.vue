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
      <swiper-slide v-for="item in listImg" :key="item.id" ><img class="swiper-image" :src="item.url" :alt="item.url" /></swiper-slide>
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
            <a href="/foodBank">
              <i class="iconfont icon icon-apple-and-pear"></i>
              <span>食物库</span>
            </a>
          </li>
        </ul>
      </div>
      <div v-else class="notice">
        <ul>
          <li v-for="item in listNotice" :key="item.id">
            <a href="javascript:void(0)"><b>{{item.type}}</b><span>{{item.title}}</span></a>
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
      <div  class="main-list">
        <ul>
          <li v-for='item in listData.datas' :key="item.id">
            <div class="list-left"><a :href="item.content_url"><img :src="item.image_url" /></a></div>
            <div class="list-right">
              <!--:href="item.content_url" 支持string + obj形式 => 'loalhost' + item.content_url-->
              <a :href="item.content_url">{{item.title}}</a>
              <div class="message">
                <a href=""><i class="iconfont icon icon-chakan2"></i><span>{{item.read_count}}</span></a>
                <a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>{{item.thumbup_count}}</span></a>
              </div>
            </div>
          </li>
        </ul>
        <!--<ul v-if="showList == 2">-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>资讯</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>痛风检查利器&#45;&#45;双能量TC</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>痛风检查利器&#45;&#45;双能量TC</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul v-else-if="showList == 3">-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>专家课堂</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>痛风检查利器&#45;&#45;双能量TC</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>痛风检查利器&#45;&#45;双能量TC</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul v-else-if="showList == 4">-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>医学前沿</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>痛风检查利器&#45;&#45;双能量TC</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>痛风检查利器&#45;&#45;双能量TC</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul v-else-if="showList == 5">-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>慢友故事</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>痛风检查利器&#45;&#45;双能量TC</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>痛风检查利器&#45;&#45;双能量TC</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul v-else-if="showList == 6">-->
          <!--&lt;!&ndash;dynamics&ndash;&gt;-->
          <!--<li v-for="item in dynamic" :key="item.id">-->
            <!--<div class="list-header">-->
              <!--<div class="list-header-img"><img src="item.user.thumb" :alt="item.text"></div>-->
              <!--<div class="list-header-text">-->
                <!--<div class="line"><b>{{item.user.nickname}}</b><span>Lv{{item.user.level}}</span></div>-->
                <!--<div class="line">尿酸值:{{item.user.uricacid}}</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="list-body">-->
              <!--<p>{{item.message.text}}</p>-->
              <!--<div class="img-box">-->
                <!--<img v-for="img in item.message.img" :key="img.id" :src="img.url" alt="img1">-->
              <!--</div>-->
              <!--<div class="list-body-time">-->
                <!--&lt;!&ndash;<div>&ndash;&gt;-->
                  <!--<span>3/28 17:20</span><span>东莞·长安</span>-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--<span class="dynamics">动态</span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="list-footer">-->
              <!--<div class="line">-->
                <!--<div cl ass="visit fr">-->
                  <!--&lt;!&ndash;i.iconfont.icon.&ndash;&gt;-->
                  <!--<i>aaa</i>-->
                <!--</div>-->
                <!--<div class="replay fl">-->
                  <!--&lt;!&ndash;i.iconfont.icon.&ndash;&gt;-->
                  <!--<i>bbb</i>-->

                <!--</div>-->
                <!--<div class="collection fl">-->
                  <!--&lt;!&ndash;i.iconfont.icon.&ndash;&gt;-->

                  <!--<span>0</span>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul v-else-if="showList == 7">-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>动态</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul v-else-if="showList == 8">-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>经验</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul v-else>-->
          <!--<li>-->
            <!--<div class="list-left"><a href=""><img src="../../../assets/img/2.png" alt=""></a></div>-->
            <!--<div class="list-right">-->
              <!--<a>咨询</a>-->
              <!--<div class="message">-->
                <!--<a href=""><i class="iconfont icon icon-chakan2"></i><span>10</span></a>-->
                <!--<a href=""><i class="iconfont icon icon-xiaoxi1"></i><span>20</span></a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
        <!--</ul>-->


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
  // import aesjs from 'aes-js'
  // import AES from "crypto-js/aes"
  // import SHA256 from "crypto-js/sha256"
  // import CryptoJS from "crypto-js"
  import { getAesString,getDAesString,getAES,getDAes } from '../../../assets/js/aes.js'
  // import { ajaxpost } from '../../../assets/js/ajax.js'

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
            {url: '/static/img/1.jpg'},
            {url: '/static/img/1.jpg'},
            {url: '/static/img/1.jpg'},
            {url: '/static/img/1.jpg'}
          ],
          listNav: [
            {listKey: 1, title: "推荐"},
            {listKey: 2, title: "资讯"},
            {listKey: 3, title: "专家课堂"},
            {listKey: 4, title: "医学前沿"},
            {listKey: 5, title: "慢友故事"}
          ],
          listNav2: [
            {listKey: 6,title: "全部"},
            {listKey: 7,title: "动态"},
            {listKey: 8,title: "经验"},
            {listKey: 9,title: "咨询"}
          ],
          listNotice: [
            {type:"公告",title:"阳光医生项目正式启动1",discription: "阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动"},
            {type:"通知",title:"阳光医生项目正式启动2",discription: "阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动"},
            {type:"公告",title:"阳光医生项目正式启动3",discription: "阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动"},
            {type:"公告",title:"阳光医生项目正式启动4",discription: "阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动阳光医生项目正式启动"}

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
                  {url:"/static/img/1.jpg"},
                  {url:"/static/img/1.jpg"},
                  {url:"/static/img/1.jpg"},
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
          listData : {},
          listDataSend: {
            pageindex:1,
            pagenum: 3,
            type:1

          },
          showList: 1,
          swiperOption: {
            autoplay: 1000,
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          },
          showNav: 1,
          articleType: 1
        }
      },
      mounted(){
        app.showLogo = false
        let uname = getCookie('username')
        this.name = uname
        if(uname == ""){
          this.$router.push('/')
        }
          let getListData = this.$http.post(
            '/apis/hecdoctor/api/user/article/list',
            this.listDataSend,
            'Content-Type:application/json',
          )
          getListData.then(function(response){
            // 响应成功回调
            console.log(response);
            if(response.statusText != 'OK') {
              return
            }
            let _data = response.bodyText = JSON.parse(getDAes(response.bodyText))
            console.log('data:',response.bodyText)
            console.log(_data.resultMsg)

            if (_data.resultCode == 0){
              let __data = _data.data;
              this.listData = __data;
            }else {
              alert(_data.resultMsg)
            }
          }, function(response){
            console.log("请求失败")
          });
      },
      methods: {
        changeList: function (listKey) {
          this.showList = listKey;
          this.articleType = listKey;
          this.listDataSend.type = this.articleType
          // let url='/apis/hecdoctor/api/user/article/list'
          // ajaxpost(url,this.listDataSend.type)
          let getListData = this.$http.post(
            '/apis/hecdoctor/api/user/article/list',
            this.listDataSend,
            'Content-Type:application/json',
          )
          getListData.then(function(response){
            // 响应成功回调
            console.log(response);
            if(response.statusText != 'OK') {
              return
            }
            let _data = response.bodyText = JSON.parse(getDAes(response.bodyText))
            console.log('data:',response.bodyText)
            console.log(_data.resultMsg)

            if (_data.resultCode == 0){
              let __data = _data.data;
              this.listData = __data;
            }else {
              alert(_data.resultMsg)
            }
          }, function(response){
            console.log("请求失败")
          });
            // let datas
          //   data = {
          //     pageindex:1,
          //     pagenum: 3,
          //     type:this.articleType
          //   }
          //
          // ajaxpost(url,data)
          // this.listData = datas;


        }
      //   changeNav(){
      //
      //   },
      //   getArticle (data){
      //
      //   },
      //
      // getjsonp(url,data,callback){
      //
      // }
      }
    }
</script>

<style scoped>

</style>
