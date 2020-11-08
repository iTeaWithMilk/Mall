<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  box-shadow: 1px -2px 10px #000;
  z-index: 1;
}
.left,
.right {
  width: 66px;
  height: 100%;
}
.center {
  flex: 1;
  text-align: center;
  line-height: 50px;
}
</style>