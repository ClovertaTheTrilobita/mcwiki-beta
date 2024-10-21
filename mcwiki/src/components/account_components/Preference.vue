<template>
  <div class="container">
    <div class="container">
      <div v-if="Items.length === 0" class="preference" style="text-align: center; font-family: STHupo; font-size: 4em;">
        <span>Oh, you don't have a favourite item yet, click <a href="#category">here</a> to go for it!</span>
      </div>
      <div v-else class="card-container">
        <Card v-for = "item in Items" :key="item.id"  :title="item.Entry" :text="item.Text" :img_url="item.Image"/>
      </div>
    </div>
  </div>
</template>

<script>

import Card from './Card.vue';
import axios from 'axios';

export default {
  name: 'Preference',
  data() {
    return {
      Items: []
    };
  },
  components: {
    Card,
  },
  methods: {
    fetchFavorites() {
      const token = localStorage.getItem('token');
      axios.get('http://localhost:3000/favorites', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log('Fetched favorites from server:', response.data);     // 显示从服务器获取的数据
        this.Items = response.data;
      })
      .catch(error => {
        console.error('Error fetching favorites:', error);
      });
    }
  },
  mounted() {
    this.fetchFavorites();
  }
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

.preference {
  height: 83.2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

a {
    color: #48af3a;
    text-decoration: none;
}

</style>


