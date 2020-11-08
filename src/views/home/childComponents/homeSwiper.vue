<template>
<mt-swipe :auto="4000" class="swiper">
  <mt-swipe-item v-for="(item, index) in banners" :key=index>
    <a :href="item.link">
      <img :src="item.image" alt="">
    </a>
  </mt-swipe-item>
</mt-swipe>
</template>

<script>
export default {
    name: 'Swiper',
    props: {
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    }
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 195px;
  margin-top: 50px;
}
img {
  width: 100%;
}
</style>