<template>
  <div class="preference-container">
    <div v-for="(item, index) in items" :key="index" class="item">
      <div class="content">
        <img v-if="item.type === 'image'" :src="imageSrc" alt="Highlight" class="media" />
        <video v-else-if="item.type === 'video'" :src="videoSrc" controls class="media"></video>
        <p v-else>{{ item.text }}</p>
      </div>
      <div class="actions">
        <button @click="toggleLike(index)" class="like-btn">
          <span v-if="item.liked">❤️</span>
          <span v-else>🤍</span>
        </button>
        <span class="like-count">{{ item.likes }}</span>
      </div>
      <div class="comments">
        <input v-model="item.newComment" placeholder="Add a comment..." class="comment-input" />
        <button @click="addComment(index)" class="comment-btn">Submit</button>
        <ul class="comment-list">
          <li v-for="(comment, commentIndex) in item.comments" :key="commentIndex">{{ comment }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import imageSrc from './media/a15.jpg';
import videoSrc from './media/b11.mp4';

export default {
  data() {
    return {
      items: [
        { type: 'image', text: 'highlight', likes: 236, liked: false, comments: [], newComment: '' },
        { type: 'video', text: 'Amazing adventure', likes: 112, liked: false, comments: [], newComment: '' },
        { type: 'text', text: 'HAVE FUN!!!!!', likes: 17, liked: false, comments: [], newComment: '' },
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
    addComment(index) {
      if (this.items[index].newComment.trim()) {
        this.items[index].comments.push(this.items[index].newComment);
        this.items[index].newComment = '';
      }
    },
  },
  computed: {
    imageSrc() {
      return imageSrc;
    },
    videoSrc() {
      return videoSrc;
    },
  },
};
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

/* 主要容器样式 */
.preference-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 30%, #0ba668);
  padding: 40px;
}

/* 每个项目的样式 */
.item {
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  border: 1px solid #dee2e6;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(237, 6, 6, 0.05);
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

/* 内容样式 */
.content {
  margin-bottom: 20px;
  width: 100%;
}

.media {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 操作按钮和点赞数样式 */
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.like-btn {
  background-color: #ff6b6b;
  color: #ffffff;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: none;
}

.like-btn:hover {
  background-color: #fa5252;
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.like-btn:active {
  transform: scale(0.95);
  background-color: #f03e3e;
}

.like-count {
  font-size: 18px;
  color: #495057;
  margin-left: 15px;
  font-weight: 600;
}

/* 留言样式 */
.comments {
  width: 100%;
  margin-top: 20px;
}

.comment-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  margin-bottom: 10px;
}

.comment-btn {
  background-color: #0ba668;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.comment-btn:hover {
  background-color: #098450;
}

.comment-list {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
}

.comment-list li {
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 5px;
}
</style>


