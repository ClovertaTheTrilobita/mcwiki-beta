<script>
import Category from '../category_components/Category.vue';
import Test1 from '../category_components/Test1.vue';

export default {
  name: 'CategoryIndex',
  components: { Category, Test1 },
  data() {
    return {
      comName1: 'Category',  // Initalize comName
    }
  },
  // created() {
  //   window.onhashchange = () => {
  //     switch (location.hash) {
  //       case '#/category/test1':
  //         this.comName1 = 'Test1'
  //         break
  //     }
  //   }
  // }
}

</script>

<template>
  <component :is="comName1"></component>
</template>

<style scoped>
.accordion-body {
  background-color: aliceblue;
}
</style>