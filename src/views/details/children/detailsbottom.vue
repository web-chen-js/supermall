<template>
  <div>
  <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
  </div>
</template>

<script>
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

export default {
  name:"detailsbottom",
  components: {
    [GoodsAction.name]:GoodsAction,
    [GoodsActionIcon.name]:GoodsActionIcon,
    [GoodsActionButton.name]:GoodsActionButton,
    
  }

}
</script>

<style scoped>

</style>