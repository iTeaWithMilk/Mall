<template>
  <div class="tabbar-item" @click="itemClick" path="path" activeColor="activeColor">
    <slot v-if="isflag" name="tabbar-item-img"></slot>
    <slot v-else name="tabbar-item-imgActive"></slot>
    <div :style="isactiveColor">
      <slot name="tabbar-item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritems",
  data() {
    return {
      flag: true,
    };
  },
  computed: {
    isflag() {
      return this.$route.path.indexOf(this.path) == -1;
    },
    isactiveColor() {
      return this.isflag ? {} : { color: this.activeColor };
    },
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(() => {});
    },
  },
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 50px;
  font-size: 12px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.tabbar-item:last-child {
  border: 0;
}
.tabbar-item img {
  width: 25px;
  height: 25px;
  margin-top: 5px;
}
</style>