<template>
  <div class="container">
    <div class="row">
      <div class="col-3" v-for="(card, index) in cards" :key="index">
        <Card :img_url="card.img_url" :title="card.title" :text="card.text" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      cards: [
        { img_url: 'https://via.placeholder.com/150', title: 'Card 1', text: 'This is card 1' },
        { img_url: 'https://via.placeholder.com/150', title: 'Card 2', text: 'This is card 2' },
        { img_url: 'https://via.placeholder.com/150', title: 'Card 3', text: 'This is card 3' },
        { img_url: 'https://via.placeholder.com/150', title: 'Card 4', text: 'This is card 4' },
        { img_url: 'https://via.placeholder.com/150', title: 'Card 5', text: 'This is card 5' },
        { img_url: 'https://via.placeholder.com/150', title: 'Card 6', text: 'This is card 6' },
        { img_url: 'https://via.placeholder.com/150', title: 'Card 7', text: 'This is card 7' },
        { img_url: 'https://via.placeholder.com/150', title: 'Card 8', text: 'This is card 8' },
      ]
    };
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: -10px; /* 用于抵消卡片之间的间距 */
}

.col-3 {
  flex: 0 0 25%; /* 每行4个卡片，每个卡片占25%宽度 */
  padding: 10px; /* 卡片之间的间距 */
}
</style>




