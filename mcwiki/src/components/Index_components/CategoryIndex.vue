<script>

import Category from '../category_components/Category.vue';
import Details from '../category_components/Details.vue';

export default {
  name: 'CategoryIndex',
  components: { Category, Details },
  data() {
    return {
      comName_01: 'Category',
    }
  },
}

</script>

<template>
  <component :is="comName_01"></component>
</template>

<style scoped>

</style>