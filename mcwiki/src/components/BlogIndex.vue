<template>
  <div>
    <transition name="lc">
      <p v-if="flag">我想带你去看晴空万里</p>
    </transition>
    <button @click="flag = !flag">点我</button>
  </div>
  </template>
  
  <script>
    export default {
      name: 'Blog Index',
      data() {
        return {
          flag: false,
      };
      },
    }
  </script>
  
  <style lang="scss" scoped>
  .lc-enter,.lc-leave-to{//进入前，离开后
      opacity: 0;
  }
  .lc-enter-to,.lc-leave{//进入后，离开前
      opacity: 1;
  }
  .lc-enter-active,.lc-leave-active{
      transition: all 0.1s;
  }
</style>