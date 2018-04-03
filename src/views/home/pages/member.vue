<template>
  <div>
    <div class="head"></div>
    <div class="list-box">
      <ul>
        <li v-for="item in links"><a href=""></a></li>
      </ul>
    </div>
    <a href="javascript:void(0)" class="loginout" @click="quit()">退出登录</a>
  </div>
</template>

<script>
    export default {
        name: "member",
      links: [
        {title:"健康档案",url:""},
        {title:"我的收藏",url:""},
        {title:"密码修改",url:""},
        {title:"意见反馈",url:""},
        {title:"检查更新",url:""},
        {title:"关于我们",url:""}
      ]
    }
</script>

<style scoped>

</style>
