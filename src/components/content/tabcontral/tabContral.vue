<template>
  <div class="tab-control">
    <div v-for="(item,index) in title " :key="item" class="tab-control-item" :class="{active: index === currentIndex } "
      @click="tabclick(index)">
      <span> {{item}} </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      title: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabclick(index) {
        this.currentIndex = index
        this.$emit('tabclick', index)
      }
    },
  }

</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    background-color: white;
  }

  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item span {
    padding: 6px;
  }

  .active {
    color: rgb(247, 46, 170);
  }

  .active span {
    border-bottom: 3px solid rgb(247, 46, 170);
  }

</style>
