<!-- AboutMe.vue -->
<template>
  <div class="aboutme-container">
    <h1 class="leave-worlds">留言板</h1>
    <div class="message-list">
      <div v-for="(message, index) in messages" :key="index" class="message-item">
        {{ message }}
      </div>
    </div>
    <form @submit.prevent="addMessage">
      <input v-model="newMessage" type="text" placeholder="输入留言" required />
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
      messages: []
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage.trim()) {
        this.messages.push(this.newMessage);
        this.newMessage = '';
      }
    }
  }
};
</script>

<style scoped>
.aboutme-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #f8f9fa 30%, #007efc);
  color: #333;
  font-family: 'Arial', sans-serif;
}

.leave-worlds {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #007bff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* 标题阴影 */
}

.message-list {
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
}

.message-item {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 留言框阴影 */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 过渡效果 */
}

.message-item:hover {
  transform: translateY(-5px); /* 悬停时向上浮动 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 悬停时阴影加深 */
}

form {
  display: flex;
  width: 100%;
  max-width: 600px;
}

input {
  flex: 1;
  padding: 12px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease; /* 输入框边框颜色过渡效果 */
}

input:focus {
  border-color: #007bff; /* 输入框聚焦时边框颜色变化 */
  outline: none;
}

button {
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 按钮背景颜色过渡效果 */
}

button:hover {
  background-color: #0056b3; /* 按钮悬停时背景颜色变化 */
}
</style>
