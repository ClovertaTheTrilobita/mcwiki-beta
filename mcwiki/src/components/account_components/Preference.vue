<template>

  <div class="container">
    <div class="card-container">
      <Card v-for = "item in Item" :title="item.Entry" :text="item.Text" />
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
    }
  },
  components: {
    Card,
  },
};

</script>

<style scoped>

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-container .card {
  flex: 0 0 28%; /* 每行两个卡片 */
  margin-bottom: 20px; /* 卡片之间的间距 */
}

</style>



