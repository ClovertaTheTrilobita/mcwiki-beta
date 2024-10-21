<template>

  <div class="RegisterIndex">
    <div class="content">
      <div class="register_container" style="color: #eefdf1;">
        <h1 style="text-align: center; font-family: STHupo; font-size: 4em;">Join Us</h1>
        <div class="form_container">
          <form @submit.prevent="handleRegister">
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
            <a class="btn btn-secondary Register" href="#/login"><span class="mx-1 login">Login</span></a>
            <button class="btn btn-success" type="submit" style="color: #eefdf1">Sign up</button>
          </form>
        </div>
        <About class="fixed-bottom"/>
      </div>
    </div>
  </div>

</template>

<script>

import { mapActions } from 'vuex';
import About from '../public_components/About.vue';

export default {
  name: 'Register',
  components: {
    About,
  },

  data() {
    return {
      username: '',
      password: '',
      message: '',
      isError: false,
    };
  },

  methods: {
    ...mapActions(['register']),
    async handleRegister() {
      const user = { username: this.username, password: this.password };
      console.log('Sending register request:', user);
      try {
        const response = await this.register(user);
        if (response.status === 201) {
          console.log('Registration success, jumping');
          this.message = 'Registration success, jumping';
          this.isError = false;
          setTimeout(() => {
            window.location.hash = '#/login';
          }, 2000);
        } else {
          console.error('Registration failed:', response.statusText);
          this.message = `Registration failed: ${response.statusText}`;
          this.isError = true;
        }
      } catch (error) {
        if (error.response && error.response.status === 409) {
          console.log('Username already exists');
          this.message = 'Username already exists';
          this.isError = true;
        } else {
          console.error('Registration failed:', error);
          this.message = `Registration failed: ${error.message}`;
          this.isError = true;
        }
      }
    }
  }
};

</script>

<style scoped>

.RegisterIndex {
  height: 100vh;
  background: url('./images/background_02.png') no-repeat center center fixed;
  background-size: cover;
}

.content {
  backdrop-filter: blur(12px);
  background: rgba(0, 0, 0, 0.100);
}

.register_container {
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
}

input {
  padding: 10px;
  width: 100%;
  border: 1px solid #00bf77;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;
}

input:focus {
  border-color: #2d7054;
  outline: none;
}

button {
  padding: 10px 15px;
  position: absolute;
            bottom: 0;
            right: 0;
}

.Register {
  padding: 10px 15px;
}

.form_container {
  position: relative;
}

.login {
    color: #eefdf1;
    text-decoration: none;
}

</style>