<template>
  <div class="container">
    <div class="card-container">
      <Card v-for = "item in Item" :key="item.id"  :title="item.Entry" :text="item.Text" :img_url="item.Image"/>
      <!-- 改变image_url名，和card对应 -->
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
  column-count: 4; /* 设置列数 */
  column-gap: 30px; /* 列之间的间距 */
  max-width: 2000px; /* 设置最大宽度，防止卡片过多时溢出 */
}

.card-container .card {
  display: inline-block; /* 确保卡片在列之间均匀分布 */
  width: 100%; /* 卡片宽度占满列宽 */
  margin-bottom: 20px; /* 卡片之间的间距 */
}
</style>


