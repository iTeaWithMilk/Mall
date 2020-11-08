<template>
  <div id="detail">
      <detail-nav-bar class="detail-navbar"></detail-nav-bar>
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
      <back-top v-if="backTopFlag"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar"
import DetailSwiper from "./childComponents/DetailSwiper"
import DetailBaseInfo from "./childComponents/DetailBaseInfo"
import DetailShopInfo from "./childComponents/DetailShopInfo"
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo"
import DetailBottomBar from "./childComponents/DetailBottomBar"

import BackTop from "@/components/content/backTop/BackTop"

import { getDetail, Goods, Shop, GoodsParam } from "@/network/detail"
export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailBottomBar,
        BackTop
    },
    data(){
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            backTopFlag: false
        }
    },
    created(){
        this.iid = this.$route.params.iid;
        this.getDetail(this.iid);
    },
    mounted() {
        window.addEventListener('scroll', this.scrollToTop);
  },
    methods: {
        getDetail(iid) {
            getDetail(iid).then(res => {
                const data = res.result;
                //轮播图图片地址
                this.topImages = data.itemInfo.topImages;
                //商品信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
                //店铺信息
                this.shop = new Shop(data.shopInfo);
                //商品详细信息
                this.detailInfo = data.detailInfo;
                //商品参数信息
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
            })
        },
        scrollToTop(){
            if(window.pageYOffset > 1200){
                this.backTopFlag = true;
            } else {
                this.backTopFlag = false;
        }
    },
    addToCart(){
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        this.$store.dispatch("addCart", product).then(res => console.log(res));
    }
    }
}
</script>

<style scoped>
.detail-navbar {
    background-color: #fff;
}
</style>