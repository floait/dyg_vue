<template>
  <div>
    <div class="head" :uid="user.uricacid">
      <div class="user-img">
        <img :src="user.thumb" alt="">
      </div>
      <div class="user-text"><b>{{user.nickname}}</b><span>lv.{{user.level}}</span></div>
    </div>
    <div class="list-box">
      <ul>
        <li v-for="item in memberMenu" :key="item.id"><a :href="item.url"><i class="iconfont icon" :class="item.icon"></i>{{item.title}} <i class="iconfont icon icon-youjiantou1 fr"></i></a></li>
      </ul>
    </div>
    <a href="javascript:void(0)" class="loginout u-btn u-btn-default" @click="quit()">退出登录</a>
  </div>
</template>

<script>
  import { setCookie,getCookie,delCookie } from '../../../assets/js/cookie.js'
    export default {
      name: "member",
      data () {
        return {
          user: {
            username: '13000000000',
            nickname: "一条咸鱼",
            level: "3",
            uricacid: "222",
            thumb: "static/img/1.jpg"
          },
          memberMenu: [
            {title:"健康档案", icon: 'icon-folder',  url:"/healthRecords"},
            {title:"我的收藏", icon: 'icon-xin1',  url:"/myCollection"},
            {title:"密码修改", icon: 'icon-mima',  url:"/resinger"},
            {title:"意见反馈", icon: 'icon-yijianfankui',  url:"/feedback"},
            {title:"检查更新", icon: 'icon-Versionupdaterule-copy',  url:"/checktheUpdate"},
            {title:"关于我们", icon: 'icon-guanyuwomen',  url:"/about"}
          ]

        }
      },
      methods: {
        quit(){
          delCookie(getCookie('username'))
        	delCookie('username')
        	this.$router.push('/')
        }
      }

    }
</script>

<style>

  @import "../../../assets/css/member.css";
</style>
