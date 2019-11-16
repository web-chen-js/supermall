<template>
  <div>
    <nav-bar>
      <div slot="left3">
        <i></i>
      </div>
        <div slot="center3" class="title">
          <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active: index === CurrentIndex}"
            @click="titleclick(index)">
            {{item}} </div>
        </div>
        <div slot="right3"> </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: 'DetailsNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        CurrentIndex: 0
      }
    },
    methods: {
      titleclick(index) {
        this.CurrentIndex = index
      }
    },
  }

</script>

<style scoped>
  .title {
    display: flex;
  }

  .title-item {
    flex: 1
  }

  .active {
    color: rgb(247, 46, 170);
  }

</style>
