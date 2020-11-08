<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="product.show.img" alt="">
    <div class="goods-info">
      <p>{{ product.title }}</p>
      <span class="price">{{ product.price }}</span>
      <span class="collect">{{ product.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props: {
      product: {
        type: Object,
        default(){
          return {};
        }
      }
    },
    methods: {
        itemClick(){
            this.$router.push('/detail/' + this.product.iid)
        }
    }
}
</script>

<style scoped>
  .goods-item {
    position: relative;
    margin-top: 3px;
    padding-bottom: 40px;
    width: 46%;
    text-align: center;
  }
  .goods-item img {
    border-radius: 4px;
  }
  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    font-size: 12px ;
    margin-bottom: 0px;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .price {
    color: #ff5777;
    margin-right: 18px;
  }
  .collect {
    position: relative;
  }
  .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("../../../assets/images/common/collect.svg") 0 0/14px 14px;
  }
</style>