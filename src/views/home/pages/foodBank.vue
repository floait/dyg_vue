<template>
  <div class="food-bank">
    <!--header-->
    <header>
      <div class="main">
        <div class="content">
          <!--input自动聚焦 autofocus="autofocus" -->
          <input type="text" name="search" id="search" class="search" v-model="search.key" @focus="search.showTips = false" @blur="searchInputChange()"  placeholder="">
          <span v-show="search.showTips == true" @click="focusInput()">请输入搜索内容</span>
          <i class="icon iconfont icon-sousuo"></i>
        </div>
      </div>
      <a class="left" href="/home/polularScience" ><i class="icon iconfont icon-zuojiantou5"></i></a>
      <a class="right" href="javascript:void(0)" :click="submitSearch()">搜索</a>
    </header>
    <!--end header-->
    <!--nav-->
    <div class="empty50"></div>
    <nav class="navbar">
      <a v-for="item in navIcon" :key="item.id" :href="item.url"><i class="icon iconfont" :class="item.icon"></i><span>{{item.title}}</span></a>
    </nav>
    <!--end nav-->
    <section>
      <div class="hot-list list">
        <div class="list-head">
          <span class="list-title">热搜食物</span>
          <div class="list-dr">
            <span><i class="icon iconfont icon-yuandianxiao1 color-ease"></i><span>放心吃</span></span>
            <span><i class="icon iconfont icon-yuandianxiao1 color-few"></i><span>少量吃</span></span>
            <span><i class="icon iconfont icon-yuandianxiao1 color-cautious"></i><span>谨慎吃</span></span>
          </div>
        </div>
        <div class="list-body">
          <ul>
            <li>
              <a href="">
                <div class="list-main">
                  <div class="list-content">
                    <b>猪后腿肉</b>
                    <p>猪肉,猪肉,猪肉,猪肉,猪肉,猪肉,猪肉,猪肉,猪肉,</p>
                    <span><i class="iconfont icon icon-chakan2"></i><span>10</span></span>
                  </div>
                </div>
                <div class="list-left">
                  <img src="/static/img/1.jpg" alt="">
                </div>
                <div class="list-right"><i class="icon iconfont icon-yuandianxiao1 color-cautious"></i></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
    export default {
      name: "foodBank",
      data(){
          return {
            search:{
              key: "",
              showTips : false
            },
            navIcon:[
              {title:"主食",icon:"icon-mifan", type: "",url:""},
              {title:"肉/蛋类",icon:"icon-roupai", type: "",url:""},
              {title:"水产品",icon:"icon-kaohaixian", type: "",url:""},
              {title:"乳制品",icon:"icon-niunai", type: "",url:""},
              {title:"豆类",icon:"icon-wandou", type: "",url:""},
              {title:"蔬菜",icon:"icon-shucai", type: "",url:""},
              {title:"水果",icon:"icon-shuiguo", type: "",url:""},
              {title:"干果",icon:"icon-icon-test1", type: "",url:""},
              {title:"其他",icon:"icon-shiwuqimin1", type: "",url:""}
            ]
          }
      },
      methods: {
          submitSearch(){

          },
        searchInputChange(){
            this.search.key == '' ? this.search.showTips = true : this.search.showTips = false;
        }
        ,focusInput(){
          // var Input = document.forms[0].elements[i];
          this.search.showTips = false;
          document.getElementById("search").focus()
        }
      }
    }
</script>

<style lang="css">
  @import url("../../../assets/css/foodBank.css");

</style>
