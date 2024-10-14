<template>
    <div class="preference-container">
      <div v-for="(item, index) in items" :key="index" class="item">
        <div class="content">
          <img v-if="item.type === 'image'" :src="imageSrc " alt="Highlight" class="media" />
          <video v-else-if="item.type === 'video'" :src="videoSrc" controls class="media"></video>
          <p v-else>{{ item.text }}</p>
        </div>
        <div class="actions">
          <button @click="toggleLike(index)">
            <span v-if="item.liked">❤️</span>
            <span v-else>🤍</span>
          </button>
          <span class="like-count">{{ item.likes }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import imageSrc from '@/assets/a12.jpg';
  import videoSrc from '@/assets/b11.mp4';
  
  export default {
    data() {
      return {
        items: [
          { type: 'image',  text: 'highlight', likes: 0, liked: false },
          { type: 'video',  text: 'Amazing adventure', likes: 0, liked: false },
          { type: 'text', text: 'HAVE FUN!!!!!', likes: 0, liked: false },
        ],
      };
    },
    methods: {
      toggleLike(index) {
        this.items[index].liked = !this.items[index].liked;
        if (this.items[index].liked) {
          this.items[index].likes++;
        } else {
          this.items[index].likes--;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .preference-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
  }
  .item {
    width: 100%;
    max-width: 600px;
    border: 1px solid #d2c2c2;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .content {
    margin-bottom: 10px;
  }
  .media {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .actions {
    display: flex;
    align-items: center;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    margin-right: 10px;
  }
  .like-count {
    font-size: 18px;
  }
  </style>
  