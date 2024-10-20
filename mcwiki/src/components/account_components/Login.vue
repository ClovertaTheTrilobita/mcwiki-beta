<template>

  <div class="LoginIndex">
    <div class="content">
      <div class="login_container" style="color: #eefdf1;">
        <h1 style="text-align: center; font-family: STHupo; font-size: 4em;">Login</h1>
        <div class="form_container">
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label class="label">Username:</label>
              <input type="text" v-model="username" required placeholder="Enter username" />
            </div>
            <div class="form-group">
              <label class="label">Password:</label>
              <input type="password" v-model="password" required placeholder="Enter password" />
            </div>
            <div v-if="message" class="alert" :class="{'alert-danger': isError, 'alert-success': !isError}" role="alert" style="--bs-alert-padding-y: 10px">
              {{ message }}
            </div>
            <button class="btn btn-success" type="submit" style="color: #eefdf1"><a class="mx-1">Login</a></button>
            <a class="btn btn-success Register" style="color: #eefdf1" href="#/register">Signup</a>
          </form>
        </div>
        <About class="fixed-bottom"/>
      </div>
    </div>
  </div>

  <div style="display: none;">
    <datasent v-bind:datasent="datasent" ref="datasent"></datasent>
  </div>

</template>

<script>
import { mapActions } from 'vuex';
import SearchIndex from '../Index_components/SearchIndex.vue';
import About from '../public_components/About.vue'

export default {
  name: 'Login',
  components: {
    'datasent': SearchIndex,
    About,
  },

  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      const user = { username: this.username, password: this.password };
      console.log('Sending login request:', user);
      try {
        const response = await this.login(user);
        console.log('Login success');
        this.message = 'Login success, jumping';
        this.isError = false;
        setTimeout(() => {
          window.location.hash = '#/home';
        }, 2000)
      } catch (error) {
        console.error('Login failed:', error);
        this.message = 'Login failed: Invalid credentials';
        this.isError = true;
      }
    }
  },
  data() {
    return {
      username: '',
      password: '',
      message: '',
      isError: false,
    }
  }
};
</script>

<style scoped>

.LoginIndex {
  height: 100vh;
  background: url('./media/background_01.png') no-repeat center center fixed;
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
  border: 1px solid #00bf77;
  /* 边框 */
  border-radius: 4px;
  /* 圆角效果 */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  /* 内部阴影 */
  transition: border-color 0.3s;
  /* 过渡效果 */
}

input:focus {
  border-color: #2d7054;
  /* 输入框获得焦点时的边框颜色 */
  outline: none;
  /* 去掉默认的外边框 */
}

button {
  padding: 10px 15px;
}

.signln {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.signln:hover {
  transform: translate(0);
  opacity: 1;
}

.Register {
  position: absolute;
            bottom: 0;
            right: 0;
  padding: 10px 15px;
}

.form_container {
  position: relative;
}

a {
    color: #eefdf1;
    text-decoration: none;
  }

</style>