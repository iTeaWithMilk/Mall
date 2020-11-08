<template>
  <div id="shopcar">
    <nav-bar class="shop-nav">
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import CartList from "./shopCarComponents/CartList"
import CartBottomBar from "./shopCarComponents/CartBottomBar"

import { mapGetters } from 'vuex'

export default {
  name: "Shopcar",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(['cartCount'])
  },
};
</script>

<style scoped>
.shop-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>