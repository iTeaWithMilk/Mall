<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
      <div class="goods-title">{{ goods.title }}</div>
      <div class="goods-price">
          <span class="new-price">{{ goods.newPrice }}</span>
          <span class="old-price">{{ goods.oldPrice }}</span>
          <span class="discount">{{goods.discount}}</span>
      </div>
      <div class="goods-other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="goods-service">
          <span v-for="index in goods.services.length - 1" :key="index">
              <img :src="goods.services[index - 1].icon | Imgfilter" alt="">
              <span>{{ goods.services[index - 1].name }}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailBaseInfo',
    props: {
        goods: {
            type: Object,
            default(){
                return {};
            }
        }
    },
    filters: {
        Imgfilter(value) {
            return "http:" + value;
        }
    }
}
</script>

<style scoped>
.base-info {
    padding: 0 8px;
}
.goods-title {
    font-size: 15px;
    text-indent: 2em;
    color: #000;
    font-weight: 700;
    margin-top: 8px;
}
.goods-price {
    margin-top: 10px;
    color: var(--color-high-text);
}
.new-price {
    font-size: 25px;
    margin-left: 10px;
}
.old-price {
    text-decoration-line: line-through;
    font-size: 14px;
    color: grey;
    margin-left: 8px;
}
.discount {
    position: relative;
    top: -10px;
    font-size: 13px;
    border-radius: 8px;
    background-color: var(--color-high-text);
    color: #fff;
    margin-left: 3px;
    padding: 2px 5px;
}
.goods-other {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
}
.goods-other span {
    color: rgba(0, 0, 0, .4);
    font-size: 14px;
}
.goods-service {
    display: flex;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    justify-content: space-between;
    color: #000;
}
.goods-service img {
    position: relative;
    top: -2px;
    width: 14px;
    height: 14px;
    vertical-align: middle;
}

</style>