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
            <a class="btn btn-secondary Register" href="#/register">Sign up</a>
            <button class="btn btn-success" type="submit"><a class="mx-1 login">Login</a></button>
          </form>
        </div>
        <About class="fixed-bottom"/>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex';
import About from '../public_components/About.vue'
import { jwtDecode } from 'jwt-decode';

export default {
  name: 'Login',
  components: {
    About,
  },
  data() {
    return {
      username: '',
      password: '',
      message: '',
      isError: false,
    }
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      const user = { username: this.username, password: this.password };
      console.log('Sending login request:', user);
      try {
        const response = await this.login(user);
        console.log('Login success');
        const token = response.data.token;
        console.log('Received token:', token);
        localStorage.setItem('token', token);                   //存储 JWT
        const decodedToken = jwtDecode(token);
        console.log('Decoded token:', decodedToken);
        localStorage.setItem('username', decodedToken.username);
        this.message = 'Login success, jumping';
        this.isError = false;
        setTimeout(() => {
          window.location.hash = '#/home';
          setTimeout(() => {
            window.location.reload();
          }, 1);
        }, 2000);
      } catch (error) {
        console.error('Login failed:', error);
        this.message = 'Login failed: Invalid credentials';
        this.isError = true;
      }
    }
  },
};
</script>

<style scoped>

.LoginIndex {
  height: 100vh;
  background: url('./images/background_01.png') no-repeat center center fixed;
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