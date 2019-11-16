<template>
  <div>
   <details-nav-bar></details-nav-bar>
    详情
    {{iid}}
    <DetailsBottom></DetailsBottom>
  </div>
</template>

<script>
  import DetailsBottom from './children/detailsbottom'
  import DetailsNavBar from './children/DetailsNavBar'

  export default {
    name: "Details",
    components: {
      DetailsBottom,
      DetailsNavBar
    },
    data() {
      return {
        iid: null
      }

    },
    created() {
      console.log(this.$route.params);

      this.iid = this.$route.params.id
    },


  }

</script>

<style scoped>

</style>
