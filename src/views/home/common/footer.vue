<template>
  <footer >
    <a v-if="showMenu =='0'" href=""><i class="iconfont icon-shouji01"></i><span>首页</span></a>
    <a v-else @click = "showMenu = '0'" class="active" href=""><i class="iconfont icon-shouji01"></i><span>首页</span></a>
    <a v-if="showMenu =='1'" href=""><i class="iconfont icon-shouji01"></i><span>问医</span></a>
    <a v-else @click = "showMenu = '1'" class="active" href=""><i class="iconfont icon-shouji01"></i><span>问医</span></a>
    <a v-if="showMenu =='2'" href=""><i class="iconfont icon-shouji01"></i><span>科普</span></a>
    <a v-else @click = "showMenu = '2'" class="active" href=""><i class="iconfont icon-shouji01"></i><span>科普</span></a>
    <a v-if="showMenu =='3'" href=""><i class="iconfont icon-shouji01"></i><span>购药</span></a>
    <a v-else @click = "showMenu = '3'" class="active" href=""><i class="iconfont icon-shouji01"></i><span>购药</span></a>
    <a v-if="showMenu =='4'" href=""><i class="iconfont icon-shouji01"></i><span>我的</span></a>
    <a v-else @click = "showMenu = '4'" class="active" href=""><i class="iconfont icon-shouji01"></i><span>我的</span></a>
  </footer>
</template>

<script>
    export default {
      name: "footer",
      data() {
        return {
          discription: "footerMenu",
          showLogo: false,
          showMenu: "0"
        }
      }
    }
</script>

<style scoped>

</style>
