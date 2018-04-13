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
        <li v-for="item in links" :key="item.id"><a  :class="{active:thisLinks == item.text}" @click="$goRoute(item.route);changeClass(item.text)"><i class="icon iconfont" :class="item.icon" ></i>{{item.text}}</a></li>
      </ul>
    </footer>
	</div>
</template>

<style>
  @import "../../assets/css/home.css";
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
            // id: 1,
            text: "首页",
            icon:"icon-shouye1",
            route: "/home"
          },
          {
            // id: 2,
            text: "问医",
            icon: "icon-yisheng",
            route: "/home/doctors"
          },{
            id: 3,
            text: "科普",
            icon: "icon-jibenziliao",
            route: "/home/polularScience"
          },
          {
            // id:4,
            text: "购药",
            icon: "icon-444",
            route: "/home/medicines"
          },
          {
            // id: 5,
            text: "我的",
            icon: "icon-profile",
            route: "/home/member"
          }

        ],
        thisLinks: "首页"
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
			},
			changeClass(text){
        console.log("导航到"+text);
        this.thisLinks = text;
      }
		}
	}

</script>
