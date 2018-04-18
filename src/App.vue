<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      showLogo: true
    }
  },
  methods:{
    setCookie: function(c_name,value,expire) {
        var date=new Date()
        date.setSeconds(date.getSeconds()+expire)
        document.cookie=c_name+ "="+escape(value)+"; expires="+date.toGMTString()
        console.log(document.cookie)
      },
      getCookie: function(c_name){
        if (document.cookie.length>0){
          let c_start=document.cookie.indexOf(c_name + "=")
          if (c_start!=-1){
              c_start=c_start + c_name.length+1
              let c_end=document.cookie.indexOf(";",c_start)
              if (c_end==-1) c_end=document.cookie.length
              return unescape(document.cookie.substring(c_start,c_end))
          }
        }
        return ""
      }
  }

}
</script>

<style>
  @import "//at.alicdn.com/t/font_593635_te3hrbrgzsuac3di.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F3F3F3;
  margin-top: 60px;
}
  #app>img { width: 250px; }
</style>
