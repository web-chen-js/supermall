<template lang="">
  <div class="tab-bar-item" @click="itemclick">
    <div :style="activestyle">
      <slot name="a"></slot>
      <slot name='b'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",//组件

    props: {//父亲传入的数据
      path: String,
      activeColor: {
        type: String,
        default: 'blueviolet'
      }
    },
    

    data() {//自己的数据
      return {
        //isActive:false
      }
    },

    computed: {//计算属性
      isActive() {
        return this.$route.path === this.path
      },
      activestyle() {
        return this.isActive ? {
          color: this.activeColor
        } : {}
      }
    },


    methods: {//方法
      itemclick() {
        console.log("发生点击");
        if (this.$route.path != this.path)
         {
          this.$router.replace(this.path)
        }

      }
    },
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item>div.active {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item>div {
    font-size: 14px;
  }
</style>