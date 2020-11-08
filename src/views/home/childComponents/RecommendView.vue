<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item.id" class="recommendItem">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div> {{ item.title }}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'RecommendView',
    props: {
        recommends: {
            type: Array,
            default(){
                return [];
            }
        }
    }
}
</script>

<style scoped>
    .recommend {
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        border-bottom: 8px solid #eee;
        padding-bottom: 10px;
    }
    .recommendItem {
        flex: 1;
    }
    .recommendItem img {
        width: 70px;
        height: 70px;
        margin-top: 10px;
        margin-bottom: 7px;
    }
</style>