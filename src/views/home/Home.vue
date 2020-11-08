<template>
  <div id='home'>
  <nav-bar class="home-nav">
    <span slot="center">购物街</span>
  </nav-bar>
  <swiper :banners="banners"></swiper>
  <recommend-view :recommends='recommends'></recommend-view>
  <feature-view></feature-view>
  <tab-control :title="['流行','新款','精选']" @tabClick='tabClick'></tab-control>
  <goods-list :goods="showGoods"></goods-list>
  <back-top v-if="backTopFlag"></back-top>
  
  </div>

</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import Swiper from "@/views/home/childComponents/homeSwiper"
import RecommendView from '@/views/home/childComponents/RecommendView'
import FeatureView from '@/views/home/childComponents/FeatureView'

import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import BackTop from '@/components/content/backTop/BackTop'

import { getHomeMultidata, getHomeGoods } from '@/network/home.js'

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop
  },
  data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      backTopFlag: false,
      saveY: 0,
    }
  },
  computed: {
      showGoods(){
        return this.goods[this.currentType].list;
      }
  },
  created(){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop);
    window.addEventListener('scroll', this.scrollToLoadMore);
  },
  activated(){
    document.documentElement.scrollTo(0, this.saveY);
    document.body.scrollTo(0, this.saveY);
  },
  deactivated(){
  },
  beforeRouteLeave(to, from, next){
    this.saveY = document.documentElement.scrollTop || document.body.scrollTop;
    next();
  },
  methods: {
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.recommends = res.data.recommend.list;
        this.banners = res.data.banner.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    },
    tabClick(index) {
      switch(index){
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
    },
    scrollToTop(){
      if(window.pageYOffset > 1200){
        this.backTopFlag = true;
      } else {
        this.backTopFlag = false;
      }
    },
    scrollToLoadMore(){
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      if (scrollTop + clientHeight > scrollHeight - 1){
        this.getHomeGoods(this.currentType);
      }
    }
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
ul li {
  height: 300px;
}
</style>