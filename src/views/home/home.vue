<template>
	<div>
		<!--<h3>欢迎 {{name}}</h3>-->
		<!--<a href="javascript:void(0);" @click="quit">注销登录</a>-->
    <!--@import "common/footer.vue"-->
    <div id="homePage">
      <router-view></router-view>
      <div class="empty40"></div>
    </div>
    <footer>
      <ul>
        <li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
      </ul>
    </footer>
	</div>
</template>

<style>
  @import "../../assets/fonts/iconfont/iconfont.css";
  .empty40 { height: 40px; }
  footer { width: 100%; height: 40px; position: fixed; left: 0; right: 0; bottom: 0; }
  footer>ul>li { width: 20%; height: 100%; float: left;  }

</style>

<script>
  import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
	export default{
    name: 'home',
		data(){
			return{
        title:'首页',
        links:[
          {
            text: "首页",
            route: "/home"
          },
          {
            text: "问医",
            route: "/home/doctors"
          },{
            text: "科普",
            route: "/home/polularScience"
          },
          {
            text: "购药",
            route: "/home/medicines"
          },
          {
            text: "我的",
            route: "/home/member"
          }

        ]
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
		methods:{
			quit(){
				delCookie()
				this.$router.push('/')
			}
		}
	}

</script>
