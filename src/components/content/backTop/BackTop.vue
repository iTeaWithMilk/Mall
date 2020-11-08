<template>
  <div class='backTop'>
      <img src="@/assets/images/common/top.png" alt="" @click="backToTop">
  </div>
</template>

<script>
export default {
    name: 'BackTop',
    methods: {
        backToTop(){
            let timer = setInterval(() => {
                let scrollTop = document.documentElement.scrollTop;
                document.documentElement.scrollTop = document.body.scrollTop = scrollTop - 100;
                if (scrollTop == 0){
                    clearInterval(timer)
                }
            }, 16);
        }
    }
}
</script>

<style scoped>
    .backTop {
        position: fixed;
        width: 43px;
        height: 43px;
        right: 20px;
        bottom: 80px;
    }
</style>