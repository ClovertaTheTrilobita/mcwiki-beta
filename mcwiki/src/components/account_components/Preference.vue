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
// 使用静态import的图片
import image101 from './media/101.jpg'; 
import image103 from './media/103.jpg'; 
import image104 from './media/104.jpg'; 
import image105 from './media/105.jpg'; 
import image106 from './media/106.jpg'; 
import image107 from './media/107.jpg'; 
import image108 from './media/108.jpg'; 
import image109 from './media/background_02.png'; 


export default {
  components: {
    PreferenceCard,
  },
  data() {
    return {
      // 模拟的动态数据
      posts: [
        {
          title: '文章test1',
          description: '这是关于文章test1的描述内容。',
          image: image101, // 使用静态import的图片
          likes: 10,
        },
        {
          title: '文章test2',
          description: '这是关于文章test2的描述内容。',
          image: image103,
          likes: 15,
        },
        {
          title: '文章1',
          description: '这是关于文章1的描述内容。',
          image: image104,
          likes: 7,
        },
        {
          title: '文章2',
          description: '这是关于文章2的描述内容。',
          image: image105,
          likes: 7,
        },
        {
          title: '文章3',
          description: '这是关于文章3的描述内容。',
          image: image106,
          likes: 7,
        },
        {
          title: '文章4',
          description: '这是关于文章4的描述内容。',
          image: image107,
          likes: 7,
        },
        {
          title: '文章5',
          description: '这是关于文章5的描述内容。',
          image: image108,
          likes: 7,
        },
        {
          title: '文章6',
          description: 'asjdbnaiushdbiuwbdiuawbdfiubnasoiudjnasjud。',
          image: image109,
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



