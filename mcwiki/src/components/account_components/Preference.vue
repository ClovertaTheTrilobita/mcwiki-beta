<template>
  <div class="preference-container">
    <div v-for="(item, index) in items" :key="index" class="item">
      <div class="content">
        <img v-if="item.type === 'image'" :src="imageSrc" alt="Highlight" class="media" />
        <video v-else-if="item.type === 'video'" :src="videoSrc" controls class="media"></video>
        <p v-else>{{ item.text }}</p>
      </div>
      <div class="actions">
        <button @click="toggleLike(index)" class="btn">
          <span v-if="item.liked">❤️</span>
          <span v-else>🤍</span>
        </button>
        <span class="like-count">{{ item.likes }}</span>
      </div>
    </div>
  </div>
</template>

<script>

// 通过 import 导入资源
  import imageSrc from './media/a15.jpg';
  import videoSrc from './media/b11.mp4';

  export default {
    data() {
      return {
        items: [
          { type: 'image', text: 'highlight', likes: 0, liked: false },
          { type: 'video', text: 'Amazing adventure', likes: 0, liked: false },
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

/* 添加自定义字体 */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

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
}

.item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

/* 内容样式 */
.content {
  margin-bottom: 20px;
}

.media {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 操作按钮和点赞数样式 */
/* 操作按钮和点赞数样式 */
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.like-btn {
  background-color: #ff6b6b; /* 去掉边框，使用平滑的背景颜色 */
  color: #ffffff;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影，使按钮有立体感 */
  border: none; /* 去除边框 */
}

.like-btn:hover {
  background-color: #fa5252;
  transform: scale(1.1); /* 鼠标悬停时按钮放大 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 鼠标悬停时增加阴影 */
}

.like-btn:active {
  transform: scale(0.95); /* 点按时缩小，增加点击效果 */
  background-color: #f03e3e; /* 点按时按钮颜色更深 */
}

.like-count {
  font-size: 18px;
  color: #495057;
  margin-left: 15px;
  font-weight: 600;
}

</style>
