<template>
  <div id="swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>



<script>
  import {
    Swipe,
    SwipeItem
  } from 'vant';
  
import { Lazyload } from 'vant';
  export default {
    name: "swipe",
    data() {
      return {
        images: [
          'http://pic71.nipic.com/file/20150710/9448607_105753090000_2.jpg',
          'http://pic71.nipic.com/file/20150710/9448607_105753090000_2.jpg',
          'http://pic71.nipic.com/file/20150710/9448607_105753090000_2.jpg',
          'http://pic71.nipic.com/file/20150710/9448607_105753090000_2.jpg',
        ]
      }
    },
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Lazyload.name]: Lazyload
    }
  }
</script>

<style scoped>
#swipe{
  height: 150px;
}
img{
  width: 100%;
  height: 150px;
  object-fit: cover 
}
</style>
