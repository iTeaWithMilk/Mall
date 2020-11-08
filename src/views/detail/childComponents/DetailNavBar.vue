<template>
      <nav-bar>
          <div slot="left" class="back" @click="backClick">
              <img src="@/assets/images/common/back.svg" alt="">
          </div>
          <div slot="center" class="title">
              <div v-for="(item, index) in title" :key="index" class="title-item" :class="{ 'active': index === currentIndex}" @click="activeClick(index)">
                  {{ item }}
              </div>
          </div>
      </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
    name: 'DetailNavBar',
    components: {
        NavBar,
    },
    data(){
        return {
            title: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    methods: {
        backClick(){
            this.$router.back();
        },
        activeClick(index){
            this.currentIndex = index;
        }
    }
}
</script>

<style scoped>
.title {
    display: flex;
}
.title-item {
    flex: 1
}
.back {
    width: 14px;
    height: 14px;
    margin-top: 18px;
    margin-left: 18px;
}
.active {
    color: #ff5777;
}
</style>