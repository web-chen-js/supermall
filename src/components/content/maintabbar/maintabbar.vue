<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <i slot="a" class="iconfont">&#xe604;</i>
      <div slot="b">首页 </div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <i slot="a" class="iconfont">&#xe602;</i>
      <div slot="b"> 分类 </div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <i slot="a" class="iconfont">&#xe603;</i>
      <div slot="b"> 购物车 </div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <i slot="a" class="iconfont">&#xe605;</i>
      <div slot="b"> 我的 </div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>