<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ecf0f1;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.3);
  z-index: 1;
}
</style>