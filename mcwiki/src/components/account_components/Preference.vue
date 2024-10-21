<template>
  <div class="preference-list">
    <h1>Preference</h1>
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
          description: '这是关于文章3的描述内容《我的世界》是一款极具创造性和自由度的沙盒游戏，玩家可以在一个由方块构成的无限世界中探索、建造和生存。游戏的基本玩法包括采集资源、制作工具、建造房屋以及与各种生物互动。你可以选择在生存模式中挑战自己，抵御敌对生物的攻击，或者在创造模式中尽情发挥想象力，建造任何你喜欢的结构。每次游戏都有不同的体验，丰富的社区内容和Mods也让《我的世界》始终充满新鲜感。',
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



