<template>
  <div class="recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
      <a :href="item.link">
        <img :src="item.img" alt="">
        <div> {{item.title}} </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    data() {
      return {
        recommends: [{
            link: "http://www.baidu.com",
            img: "http://pic29.nipic.com/20130527/9331768_163938364000_2.jpg",
            title:"十点抢购"
          },
          {
            link: "http://www.baidu.com",
            img: "http://pic29.nipic.com/20130527/9331768_163938364000_2.jpg",
            title:"十点抢购"
          },
          {
            link: "http://www.baidu.com",
            img: "http://pic29.nipic.com/20130527/9331768_163938364000_2.jpg",
            title:"十点抢购"
          },
          {
            link: "http://www.baidu.com",
            img: "http://pic29.nipic.com/20130527/9331768_163938364000_2.jpg",
            title:"十点抢购"
          }
        ]
      }
    },
  }

</script>

<style scoped>
.recommends{
  width: 100%;
  display:flex;
  text-align: center;
  padding: 8px 0 15px;
  border-bottom: 8px solid #eee;
  
}
.recommends-item{
  flex: 1;
}

img{
  height: 70px;
    width: 70px;
    border-radius:50%;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    margin-top: 15px
}
</style>
