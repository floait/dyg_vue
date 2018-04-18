<template>
	<div>
    <img src="../../assets/logo.png">

    <div class="login-wrap" v-show="showLogin">
			<header><h3>{{title}}</h3></header>
			<p v-show="showTishi">{{tishi}}</p>
      <div class="line">
        <i class="icon iconfont icon-shouji"></i>
        <input type="text" placeholder="输入手机号" v-model="number">
      </div>
      <div class="line">
        <i class="icon iconfont icon-mima"></i>
        <input type="password" placeholder="输入密码" v-model="password">
      </div>
      <div class="align-left"><span v-on:click="ForgetPassword">忘记密码?</span></div>
			<button v-on:click="login">登录</button>
			<span v-on:click="ToRegister">手机号快速注册</span>
		</div>
    <div class="forget-wrap"  v-show="showForgetPassword">
      <header><h3>{{title}}</h3></header>
      <p v-show="showTishi">{{tishi}}</p>
      <div class="line">
        <i class="icon iconfont icon-shouji"></i>
        <input type="text" placeholder="请输入手机号" v-model="forgetNumber">
      </div>
      <div class="line">
        <i class="icon iconfont icon-mima"></i>
        <input type="password" placeholder="请输入新密码" v-model="forgetPassword">
      </div>
      <div class="line">
        <i class="icon iconfont icon-mima"></i>
        <input type="password" placeholder="请确认新密码" v-model="forgetPassword1">
      </div>
      <button v-on:click="forget">重置密码</button>
      <span v-on:click="ToLogin">返回登录</span>
    </div>
		<div class="register-wrap" v-show="showRegister">
			<header><h3>{{title}}</h3></header>
			<p v-show="showTishi">{{tishi}}</p>
      <div class="line" v-show="registers == 1" >
        <i class="icon iconfont icon-shouji"></i>
        <input v-show="registers == 1" type="text" placeholder="请输入手机号码" v-model="newNumber">
      </div>
      <div class="line" v-show="registers == 1" >
        <i class="icon iconfont icon-anquanbaozhang"></i>
        <input type="text" placeholder="请输入验证码" v-model="newCode">
        <span class="get-code" v-show="showCodeTime == 0" v-on:click="getCode">获取验证码</span>
        <span class="get-code" v-show="showCodeTime == 1">{{codeTime}}s</span>
      </div>
      <div class="line" v-show="registers == 2" >
        <i class="icon iconfont icon-mima"></i>
        <input type="password" placeholder="请输入密码" v-model="newPassword">
      </div>
      <div class="line" v-show="registers == 2">
        <i class="icon iconfont icon-mima"></i>
        <input type="password" placeholder="请确认密码" v-model="newPassword1">
      </div>
      <button v-show="registers == 1" v-on:click="register">下一步</button>
      <button v-show="registers == 2" v-on:click="register">完成</button>
			<span v-on:click="ToLogin">已有账号？马上登录</span>
		</div>
	</div>
</template>
<style>

  @import "../../assets/fonts/iconfont/iconfont.css";

  header { position: fixed; top: 0; z-index: 10;  width: 100%; height: 40px; line-height: 40px; background-color: rgb(22,127,245); color: rgb(255,255,255) }
  header h3 { margin: 0; padding: 0; font-size: 100%; font-weight: normal; }
  .login-wrap{text-align:center;}
  input{display:block; width:250px; height:40px; line-height:40px; text-indent: 1.2em; margin:0 auto; margin-bottom: 10px; outline:none; border: none; padding:10px; box-sizing:border-box;}
  p{color:#FF0000;}
  button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto !important; border:none; border-radius: 5px; background-color: rgb(22,127,245); color:#fff; font-size:16px; margin-bottom:5px;}
  span{cursor:pointer;color: rgb(22,127,245); font-size: 12px; }
  .align-left { width: 250px; margin: 0 auto; border: none; text-align: left; }
  .line {position: relative; display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none;box-sizing:border-box; }
  .line input { margin: 0;  padding:10px; caret-color:red; }
  .line span { position: absolute; display:block; width: 80px; height:30px; line-height: 30px; top: 5px;  right: 5px; color: #888; border:1px solid #888;  border-radius: 15px; }
  .line .icon { position: absolute; left: 5px; color: #167FF5; }
  /*.align-left span { }*/
</style>

<script>
import { setCookie,getCookie } from '../../assets/js/cookie.js'
import { getAesString,getDAesString,getAES,getDAes } from '../../assets/js/aes.js'
    //apis/login
    //apis//smscode/{moudle}

	export default{
		data(){
			return{
				number: '', //登陆
				password: '',
				newNumber: '',  //注册
        newCode: '',
        newPassword: '',
        newPassword1: '',
        newEmail: '',
        forgetNumber: '',  //找回
        forgetPassword: '',
        forgetPassword1: '',
				tishi: '',
				showTishi: false,
				showLogin: true,
				showRegister: false,
        showForgetPassword:false,
        showCodeTime: 0,
        registers: 1,
        codeTime: '',
				title: "登录"
			}
		},
		mounted(){
      // setCookie("username","1")
			if(getCookie('username')){
			  this.title = ""
				this.$router.push('/home')
			}
		},
		methods: {
			login(){
			  this.title = "登录"
				if(this.username == "" || this.password == ""){
					alert("请输入用户名或密码")
				}else{
					let data = {useraccount:this.number,userpwd:this.password,usertype:'0'}

					this.$http.post('/apis/login',data).then((res)=>{
            let _data = JSON.parse(getDAes(res.bodyText))
            console.log('data',_data)
						if(_data.resultCode == 100){
							this.tishi = _data.resultMsg
						}else if(_data.resultCode == 201){
							this.tishi =  _data.resultMsg
						}else if(_data.resultCode == 'admin'){
							this.$router.push('/main')
						}else if(_data.resultCode == 0){
							this.tishi =  _data.resultMsg
							setCookie('username',_data.data.useraccount,1000*60)
              setCookie(getCookie('username'),_data.data.access_token,1000*60)
							setTimeout(function(){
								this.$router.push({path:'home',query:{id:1}})
							}.bind(this),1000)
						}else {
              this.tishi = "未知错误"
            }
            this.showTishi = true
					})
				}
			},
      // 页面跳转
      ForgetPassword (){
			  this.showLogin = false
        this.showRegister = false
        this.showForgetPassword = true
        this.title = "忘记密码"
      },
			ToRegister(){
				this.showRegister = true
				this.showLogin = false
        this.showForgetPassword = false
        this.registers = 1
        this.title = "注册"
			},
			ToLogin(){
				this.showRegister = false
				this.showLogin = true
        this.showForgetPassword = false
        this.title = "登录"
			},
      // 忘记密码
      forget(){
			  if(this.forgetNumber == ""){
			    alert("请输入手机号")
        } else if(this.forgetPassword == ""){
          alert("请输入新密码")
        } else if(this.forgetPassword1 == ""){
			    alert("请再次输入新密码")
        } else if(this.forgetPassword == this.forgetPassword1){
          alert("两次密码输入不一致，请检查")
          this.newPassword = "";
          this.newPassword1 = "";
        }else{
			    //这里写处理函数
          // 2018-03-15
        }
      },
      // 验证码
      getCode () {
        // this.$http.post('url',data).then((res) => {
          // console.log(res);
          // 启动发送冷却倒计时
          this.showCodeTime = 1
          this.codeTime = 60
          let ss = 0
          console.log("this.showCodeTime",this.showCodeTime)
          let codeTimer = setInterval(function(){
            this.codeTime --
            ss ++;
            // console.log("第"+ss+"次执行interval")
            if(this.codeTime <= 0){
              clearInterval(codeTimer);
              console.log("this.showCodeTime",this.showCodeTime)
              this.showCodeTime = 0
            }
          }.bind(this),1000)
        // })
      },
      // 注册
			register(){
        if(this.registers == 1){    //1验证码校验
          if (this.newNumber == "" ) {
            alert("请输入手机号")
          } else if(this.newCode == ""){
            alert("请输入验证码")
          } else {
            let data = {'Number':this.newNumber,'Code':this.newCode}
            // this.$http.post('url',data).then((res)=>{
            //   console.log(res)
            // })
          }
          this.registers = 2
        } else if(this.registers == 2){   //2设置密码
          alert("请设置密码")
        } else {    //3其他操作

        }
        // if (this.newNumber == "" ) {
        //   alert("请输入手机号")
        // } else if(this.newCode == ""){
        //   alert("请输入验证码")
			//   } else if (this.newPassword == ""){
			// 		alert("请输入密码")
			// 	}else if(this.newPassword1 == ""){
			// 	  alert("请再次输入密码")
        // } else if(this.newPassword1 != this.newPassword) {
			//     alert("您输入的密码不一致，请检查")
        //   this.newPassword = "";
			//     this.newPassword1 = "";
        // } else{
			// 		let data = {'username':this.newUsername,'password':this.newPassword}
			// 		this.$http.post('http://localhost/vueapi/index.php/Home/user/register',data).then((res)=>{
			// 			console.log(res)
			// 			if(res.data == "ok"){
			// 				this.tishi = "注册成功"
			// 				this.showTishi = true
			// 				this.username = ''
			// 				this.password = ''
			// 				setTimeout(function(){
			// 					this.showRegister = false
			// 					this.showLogin = true
			// 					this.showTishi = false
			// 				}.bind(this),1000)
			// 			}
			// 		})
			// 	}
        // this.registers ++;
			}
		}
	}
</script>
