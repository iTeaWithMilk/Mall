<template>
  <tabbar>
    <tabbaritems path="/home" activeColor="red">
      <img slot="tabbar-item-img" src="@/assets/images/tabbar/shouye.png" alt />
      <img slot="tabbar-item-imgActive" src="@/assets/images/tabbar/shouyeActive.png" alt />
      <div slot="tabbar-item-text">首页</div>
    </tabbaritems>
    <tabbaritems path="/shopcar" activeColor="red">
      <img slot="tabbar-item-img" src="@/assets/images/tabbar/gouwuche.png" alt />
      <img slot="tabbar-item-imgActive" src="@/assets/images/tabbar/gouwucheActive.png" alt />
      <div slot="tabbar-item-text">购物车</div>
    </tabbaritems>
    <tabbaritems path="/profile">
      <img slot="tabbar-item-img" src="@/assets/images/tabbar/wode.png" alt />
      <img slot="tabbar-item-imgActive" src="@/assets/images/tabbar/wodeActive.png" alt />
      <div slot="tabbar-item-text">我的</div>
    </tabbaritems>
  </tabbar>
</template>

<script>
import tabbar from "@/components/common/tabbar/tabbar";
import tabbaritems from "@/components/common/tabbar/tabbaritems";
export default {
  name: "mainTabbarItem",
  components: {
    tabbaritems,
    tabbar,
  },
};
</script>

<style>
</style>