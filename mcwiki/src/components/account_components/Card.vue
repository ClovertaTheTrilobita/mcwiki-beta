<template>
  <div class="container">
    <div class="card-container">
      <Card v-for = "item in Item" :title="item.Entry" :text="item.Text" />
    </div>
  </div>

</template>

<script>

export default {
  name: 'Preference',
  props: {
    Item: {
      type: Array,
    }
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
















































<!-- <template>
  <div class="preference-card">
    <img :src="post.image" alt="文章图片" class="post-image" />
    <div class="post-content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <div class="like-section">
        <button @click="likePost">❤️ {{ post.likes }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  methods: {
    likePost() {
      this.$emit('updateLikes');
    },
  },
};
</script>

<style scoped>
.preference-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, height 0.3s ease;
  /* 动态控制卡片的最小和最大高度 */
  min-height: 250px;
  max-height: 600px;
  flex-grow: 1;
}

.preference-card:hover {
  /* 鼠标悬停时放大 */
  transform: scale(1.05);
}

.post-image {
  width: 100%;
  height: auto;
   /* 根据图片的宽度自适应高度 */
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  /* 最大高度限制，保证图片不会过大 */
  max-height: 300px;
}

.post-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* 根据内容多少调整卡片大小 */
  flex-grow: 1;
}

h2 {
  font-size: 18px;
  margin: 0;
  /* 根据内容的长短自动换行 */
  white-space: normal;
}

p {
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
  /* 根据描述的内容自动扩展或收缩 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  /* 限制描述显示的最大行数 */
  -webkit-box-orient: vertical;
}

.like-section {
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ff7875;
}
</style>

   -->