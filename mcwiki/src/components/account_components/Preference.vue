<template>
  <div class="container">
    <div class="card-container">
      <Card v-for = "item in Item" :key="item.id"  :title="item.Entry" :text="item.Text" :img_url="item.Image"/>
    </div>
  </div>

</template>

<script>

import Card from './Card.vue';

export default {
  name: 'Preference',
  props: {
    Item: {
      type: Array,
      default :()=>[]
    }
  },
  components: {
    Card,
  },
};

</script>

<style scoped>

.card-container {
  column-count: 4;
  column-gap: 30px;
  max-width: 2000px;
}

.card-container .card {
  display: inline-block;
  width: 100%;
  margin-bottom: 9px;
}

</style>


