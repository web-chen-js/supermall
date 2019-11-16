<template>
  <div>
    
    <nav-bar class="nav-bar">
      <div slot="left3"> </div>
      <div slot="center3"> 购物车</div>
      <div slot="right3"> </div>
    </nav-bar>
    <van-card num="2" tag="标签" 
    price="2.00" desc="描述信息" title="商品标题" 
    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      origin-price="10.00" />
  </div>
</template>

<script>
  import {
    Card
  } from 'vant';
  
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: 'cart',
    components: {
      [Card.name]: Card,
      NavBar
    }
  }

</script>

<style scoped>

</style>
