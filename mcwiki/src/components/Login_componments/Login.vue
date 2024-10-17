<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" required placeholder="Enter username" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required placeholder="Enter password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Login',
    setup() {
      const username = ref('');
      const password = ref('');
  
      const handleLogin = () => {
        // 简单验证，实际应用中应该进行后端验证
        if (username.value === 'admin' && password.value === '1234') {
          localStorage.setItem('isAuthenticated', 'true'); // 保存登录状态
          window.location.hash = '#/home'; // 登录成功后跳转
        } else {
          alert('Invalid username or password');
          // 清空输入框
          username.value = '';
          password.value = '';
        }
      };
  
      return {
        username,
        password,
        handleLogin
      };
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f9f9f9; /* 背景颜色，提供一个干净的界面 */
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 添加轻微的阴影 */
    border-radius: 8px; /* 圆角效果 */
  }
  
  h2 {
    margin-bottom: 20px;
    color: #333; /* 字体颜色 */
  }
  
  .form-group {
    margin-bottom: 15px;
    width: 100%; /* 让输入框填满父容器 */
  }
  
  input {
    padding: 10px;
    width: 100%; /* 输入框宽度自适应 */
    border: 1px solid #851111; /* 边框 */
    border-radius: 4px; /* 圆角效果 */
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* 内部阴影 */
    transition: border-color 0.3s; /* 过渡效果 */
  }
  
  input:focus {
    border-color: #42b983; /* 输入框获得焦点时的边框颜色 */
    outline: none; /* 去掉默认的外边框 */
  }
  
  button {
    padding: 10px 15px;
    background-color: #42b983;
    color: rgb(206, 30, 30);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s; /* 按钮的过渡效果 */
  }
  
  button:hover {
    background-color: #369d73; /* 按钮悬停时的颜色 */
  }
  </style>
  
  