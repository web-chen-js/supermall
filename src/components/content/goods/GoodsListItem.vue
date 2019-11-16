<template>
  <div class="GoodsListItem" @click="itemclick">
    <img :src="goodsItem.img" alt="" >
    <span> {{goodsItem.name}} </span>
  </div> 
</template>

<script>
  export default {
    name:"GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      itemclick(){
        console.log('tag')
        this.$router.push('/details/'+this.goodsItem.iid)
      }
    },
  }
</script>

<style  scoped>
  
  
  .GoodsListItem{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  
  .GoodsListItem img{
    width:100%;
    border-radius: 5px;
  }


</style>