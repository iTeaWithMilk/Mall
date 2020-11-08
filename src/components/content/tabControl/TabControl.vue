<template>
  <div class="tab-control">
      <div v-for="(item, index) in title" :key="index" class="tab-control-item" :class="{ active: index===currentIndex}" @click="itemClick(index)">
          <span>{{ item }}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TabControl',
    props: {
        title: {
            type: Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return {
            currentIndex: 0,
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex = index;
            this.$emit('tabClick', index);
        }
    }
}
</script>

<style scoped>
.tab-control {
    display: flex;
    position: sticky;
    top: 50px;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 16px;
    z-index: 1;
    background-color: #fff;
}
.tab-control-item {
    flex: 1;
}
.active {
    color: #ff5777;
}
.active span {
    padding-bottom: 3px;
    border-bottom: 3px solid #ff5777;
}
</style>