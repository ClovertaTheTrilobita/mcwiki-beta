<script>
import Category from '../category_components/Category.vue';
import Details from '../category_components/Details.vue';

export default {
  name: 'CategoryIndex',
  components: { Category, Details },
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

</style>