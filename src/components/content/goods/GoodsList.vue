<template>
  <div class="GoodsList">
    <GoodsListItem v-for="(item ,index) in goods" :key="index" :goods-item="item"/>
    dfhbgjhbknkn
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
  export default {
    name:"GoodsList",
    components: {
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style  scoped>
  .GoodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    padding: 2px;
  }
</style>