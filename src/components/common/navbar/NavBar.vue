<template>
  <div id="navb">
    <div class = "left">   <slot name = "left3"></slot>    </div>
    <div class = "center"> <slot name = "center3"></slot>  </div>
    <div class = "right">  <slot name = "right3"></slot>  </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>


<style scoped>
  #navb
   {
     display: flex;
     height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px  rgba(100,100,100,0.1)
  }

  .left, .right{
    width: 60px;
  }
   
  .center{
    flex: 1;
  }
</style>