<template>
  <mt-swipe :auto="4000" class="detail-swiper">
  <mt-swipe-item v-for="(item, index) in topImages" :key="index">
      <img :src="item | Imgfilter" alt="">
  </mt-swipe-item>
</mt-swipe>
</template>

<script>
export default {
    name: 'DetailSwiper',
    props: {
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    filters: {
        Imgfilter: function(value) {
            return "http:" + value;
        }
    }
}
</script>

<style scoped>
.detail-swiper {
    width: 100%;
    height: 300px;
    margin-top: 50px;
}
</style>