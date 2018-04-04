<template>
  <div>
    <div class="head">
      <div class="user-img">
        <img :src="user.thumb" alt="">
      </div>
      <div class="user-text"><b>13000000000</b><span>lv1</span></div>
    </div>
    <div class="list-box">
      <ul>
        <li v-for="item in memberMenu" :key="item.id"><a :href="item.url">{{item.title}}</a></li>
      </ul>
    </div>
    <a href="javascript:void(0)" class="loginout" @click="WebSocketTest()">退出登录</a>
  </div>
</template>

<script>
    export default {
      // name: "member",
      data () {
        return {
          memberMenu: [
            {title:"健康档案",url:"/"},
            {title:"我的收藏",url:"/"},
            {title:"密码修改",url:"/"},
            {title:"意见反馈",url:"/"},
            {title:"检查更新",url:"/"},
            {title:"关于我们",url:"/"}
          ],
          user: {
            username: '13000000000',
            nickname: "一条咸鱼",
            level: "1",
            uricacid: "222",
            thumb: ""
        }
        }
      },
      methods: {
        WebSocketTest() {
          if ("WebSocket" in window)
          {
            alert("您的浏览器支持 WebSocket!");

            // 打开一个 web socket
            let ws = new WebSocket("ws:http://localhost:8099");

            ws.onopen = function()
            {
              // Web Socket 已连接上，使用 send() 方法发送数据
              ws.send({a:'a'});
              alert("数据发送中...");
            };

            ws.onmessage = function (evt)
            {
              let received_msg = evt.data;
              alert("数据已接收...");
              console.log(received_msg);
            };

            ws.onclose = function(e)
            {
              // 关闭 websocket
              alert("连接已关闭...");
              console.log(e);
            };
          }

          else
          {
            // 浏览器不支持 WebSocket
            alert("您的浏览器不支持 WebSocket!");
          }
        }
      }

    }
</script>

<style scoped>

</style>
