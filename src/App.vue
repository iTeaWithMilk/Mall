<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar-item v-if="footShow"></main-tabbar-item>
  </div>
</template>
<script>
import mainTabbarItem from "@/components/content/mainTabbarItem/mainTabbarItem";

export default {
  name: "App",
  components: {
    mainTabbarItem,
  },
  data() {
    return {
      footShow: true
    }
  },
  watch: {
    $route(to, from) {
      let ThisPage = to.path;
      if (ThisPage === '/home' || ThisPage === '/shopcar' || ThisPage === '/profile') {
        this.footShow = true;
      } else {
        this.footShow = false;
      }
    }
  }
};
</script>
<style scoped>
@import "./assets/CSS/base.css";
</style>
