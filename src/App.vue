<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/maintabbar.vue'
  export default {
    name: 'myApp',
    components: {
      MainTabBar,
    }
  }

</script >
<style >
  @import "assets/css/base.css";
  @import "assets/css/fonts.css";
</style>
