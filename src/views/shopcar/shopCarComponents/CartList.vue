<template>
  <div class="cart-list">
      <cart-list-item v-for="item in cartList" :key="item.id" :itemInfo="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import { mapGetters } from 'vuex'
export default {
    name: 'CartList',
    props: {

    },
    components: {
        CartListItem,
    },
    computed: {
        ...mapGetters(['cartList'])
    }
}
</script>

<style scoped>
.cart-list {
    margin-top: 50px;
}
</style>