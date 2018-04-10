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
        <li v-for="item in memberMenu" :key="item.id"><a :href="item.url"><i class="iconfont icon" :class="item.icon"></i>{{item.title}}</a></li>
      </ul>
    </div>
    <a href="javascript:void(0)" class="loginout" @click="WebSocketTest()">退出登录</a>
  </div>
</template>

<script>
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
            {title:"健康档案", icon: 'icon-',  url:"/healthRecords"},
            {title:"我的收藏", icon: 'icon-',  url:"/myCollection"},
            {title:"密码修改", icon: 'icon-',  url:"/resinger"},
            {title:"意见反馈", icon: 'icon-',  url:"/feedback"},
            {title:"检查更新", icon: 'icon-',  url:"/checktheUpdate"},
            {title:"关于我们", icon: 'icon-',  url:"/about"}
          ]

        }
      },
      methods: {

      }

    }
</script>

<style>
  @import "../../../assets/css/member.css";
</style>
