<template>
  <div class="preference-list">
    <h1>小红书风格页面</h1>
    <div class="preference-items">
      <PreferenceCard
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
        @updateLikes="updateLikes(index)"
      />
    </div>
  </div>
</template>

<script>
import PreferenceCard from './PreferenceCard.vue';

export default {
  components: {
    PreferenceCard,
  },
  data() {
    return {
      // 模拟的动态数据
      posts: [
        {
          title: '文章1',
          description: '这是关于文章1的描述内容。',
          image: './media/a12.jpg',
          likes: 10,
        },
        {
          title: '文章2',
          description: '这是关于文章2的描述内容。',
          image: 'https://via.placeholder.com/200x300.png?text=文章2',
          likes: 15,
        },
        {
          title: '文章3',
          description: '这是关于文章3的描述内容。',
          image: 'https://via.placeholder.com/200x300.png?text=文章3',
          likes: 7,
        },
        {
          title: '文章4',
          description: '这是关于文章3的描述内容。',
          image: 'https://via.placeholder.com/200x300.png?text=文章3',
          likes: 7,
        },
        {
          title: '文章5',
          description: '这是关于文章3的描述内容。',
          image: 'https://via.placeholder.com/200x300.png?text=文章3',
          likes: 7,
        },
        {
          title: '文章6',
          description: '这是关于文章3的描述内容。',
          image: 'https://via.placeholder.com/200x300.png?text=文章3',
          likes: 7,
        },
      ],
    };
  },
  methods: {
    // 处理点赞功能
    updateLikes(index) {
      this.posts[index].likes++;
    },
  },
};
</script>

<style scoped>
.preference-list {
  padding: 20px;
  background-color: #f7f7f7;
}

.preference-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>



