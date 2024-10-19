<template>

  <div class="LoginIndex">
    <div class="content">
      <div class="login_container" style="color: #eefdf1;">
        <h1 style="text-align: center; font-family: STHupo; font-size: 4em;">Register</h1>
        <form @submit.prevent="handleregister">
          <div class="form-group">
            <label class="label">Username:</label>
            <input type="text" v-model="username" required placeholder="Enter username" />
          </div>
          <div class="form-group">
            <label class="label">Password:</label>
            <input type="password" v-model="password" required placeholder="Enter password" />
          </div>
          <button type="submit" style="color: #eefdf1">Register</button>
        </form>
        <About class="fixed-bottom"/>
      </div>
    </div>
  </div>

</template>

<script>

import { mapActions } from 'vuex';
import About from '../public_components/About.vue'

export default {
  name: 'Login',
  components: {
    About,
  },
  methods: {
    ...mapActions(['register']),
    handleregister() {
      const user = { username: this.username, password: this.password};
      this.register(user);
    }
  },
  data() {
    return {
      username: '',
      password: '',
    }
  }
};
</script>

<style scoped>

.LoginIndex {
  height: 100vh;
  background: url('./media/background_02.png') no-repeat center center fixed;
  background-size: cover;
}

.content {
  backdrop-filter: blur(12px);
  background: rgba(0, 0, 0, 0.100);
}

.login_container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

label {
  margin-bottom: 5px;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
  /* 让输入框填满父容器 */
}

input {
  padding: 10px;
  width: 100%;
  /* 输入框宽度自适应 */
  border: 1px solid #851111;
  /* 边框 */
  border-radius: 4px;
  /* 圆角效果 */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  /* 内部阴影 */
  transition: border-color 0.3s;
  /* 过渡效果 */
}

input:focus {
  border-color: #42b983;
  /* 输入框获得焦点时的边框颜色 */
  outline: none;
  /* 去掉默认的外边框 */
}

button {
  padding: 10px 15px;
  background-color: #42b983;
  color: rgb(206, 30, 30);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  /* 按钮的过渡效果 */
}

button:hover {
  background-color: #369d73;
  /* 按钮悬停时的颜色 */
}

.signln {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.signln:hover {
  transform: translate(0);
  opacity: 1;
}

</style>