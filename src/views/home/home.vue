<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="left3">  </div>
      <div slot="center3"> 购物街</div>
      <div slot="right3"> </div>
    </nav-bar>
    <swipe></swipe>
    <recommend-view></recommend-view>
    <tab-control :title="['流行','精选','新品']" class="tab-control" @tabclick='tabclick'>
    </tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
  </div>
</template>


<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabcontral/tabContral"
  import Swipe from 'components/common/vant/swipe';
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/backTop'

  import RecommendView from './children/recommmend'

  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home.js'

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      Swipe,
      RecommendView,
      GoodsList,
      BackTop,
    },
    data() {
      return {
        currentType: 'pop',
        goods: {
          'pop': {
            page: 0,
            list: [{
                iid: '1dd',
                img: 'http://pic227.nipic.com/pic/20190712/25921483_094353212000_4.jpg',
                name: '风景'
              },
              {
                iid: '2dd',
                img: 'http://pic234.nipic.com/pic/20190815/22636788_104026758083_4.jpg',
                name: '但行货'
              },
              {
               iid: '1dsfd',
                img: 'http://pic225.nipic.com/pic/20190702/20953913_215405932000_4.jpg',
                name: '道具卡'
              },
              {
                iid: '1dsdfd',
                img: 'http://pic227.nipic.com/pic/20190712/25921483_094353212000_4.jpg',
                name: '风景'
              },
              {
                iid: '1dsddfd',
                img: 'http://pic234.nipic.com/pic/20190815/22636788_104026758083_4.jpg',
                name: '但行货'
              },
              {
                iid: '1dfsdfd',
                img: 'http://pic225.nipic.com/pic/20190702/20953913_215405932000_4.jpg',
                name: '道具卡'
              },
              {
                iid: '1dssdfd',
                img: 'http://pic227.nipic.com/pic/20190712/25921483_094353212000_4.jpg',
                name: '风景'
              },
              {
                iid: '1dsrdfd',
                img: 'http://pic234.nipic.com/pic/20190815/22636788_104026758083_4.jpg',
                name: '但行货'
              },
             
            ]
          },
          'new': {
            page: 0,
            list: [{
                img: 'http://pic229.nipic.com/pic/20190720/26950520_120945743089_4.jpg',
                name: '风景'
              },
              {
                img: 'http://pic227.nipic.com/pic/20190712/25921483_094353212000_4.jpg',
                name: '风景'
              },
              {
                img: 'http://pic233.nipic.com/pic/20190812/20953913_171950660000_4.jpg',
                name: '风景'
              },
              {
                img: 'http://pic229.nipic.com/pic/20190721/28193867_211436274082_4.jpg',
                name: '风景'
              },
            ]
          },
          'sell': {
            page: 0,
            list: [{
                img: 'http://pic227.nipic.com/pic/20190712/25921483_094353212000_4.jpg',
                name: '风景'
              },
              {
                img: 'http://pic229.nipic.com/pic/20190721/28193867_211436274082_4.jpg',
                name: '风景'
              },
              {
                img: 'http://pic233.nipic.com/pic/20190809/3148298_093621599085_4.jpg',
                name: '风景'
              },
              {
                img: 'http://pic229.nipic.com/pic/20190720/26950520_120945743089_4.jpg',
                name: '风景'
              },
            ]
          }
        }
      }
    },

    created() {
      //getHomeMultidata().then(res => {})

      //this.getHomeGoods('pop')
      //this.getHomeGoods('new')
      //this.getHomeGoods('sell')

    },
    methods: {
      getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      },
      tabclick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;

        }

      }

    },
  }

</script>

<style scoped>
  #home {
    padding-top: 44px
  }

  .nav-bar {
    background-color: #e696be;
    color: #000000;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
     z-index: 9;
  }

</style>
