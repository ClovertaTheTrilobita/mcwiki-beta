<template>

  <div class="LoginIndex">
    <div class="content">
      <div class="login_container" style="color: #eefdf1;">
        <div class="row fixed-top">
          <div class="col-1 signln">
            <!-- ----------以下代码正在测试，请勿改动---------- -->
            <input type="file" @change="handleFileUpload">
            <!-- ----------以上代码正在测试，请勿改动---------- -->
          </div>
        </div>
        <h1 style="text-align: center; font-family: STHupo; font-size: 4em;">Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="username" class="label">Username:</label>
            <input type="text" v-model="username" id="username" required placeholder="Enter username" />
          </div>
          <div class="form-group">
            <label for="password" class="label">Password:</label>
            <input type="password" v-model="password" id="password" required placeholder="Enter password" />
          </div>
          <button type="submit" style="color: #eefdf1">Login</button>
        </form>
        <About class="fixed-bottom"/>
      </div>
    </div>
  </div>

  <div style="display: none;">
    <datasent v-bind:datasent="datasent" ref="datasent"></datasent>
  </div>

</template>

<script>
import { ref } from 'vue';
import { mapActions } from 'vuex';
import SearchIndex from '../Index_components/SearchIndex.vue';
import About from '../public_components/About.vue'

export default {
  name: 'Login',
  components: {
    'datasent': SearchIndex,
    About,
  },

  /* --------------------以下代码正在测试，请勿改动-------------------- */
  methods: {
    handleFileUpload(event) {
      // 获取用户选择的文件
      const file = event.target.files[0];

      // 创建一个新的FileReader对象
      const reader = new FileReader();

      // 监听文件读取完成事件
      reader.onload = () => {
        // 将读取的文件内容传递给处理CSV数据的函数
        this.parseCSVData(reader.result);
      };

      // 读取文件内容
      reader.readAsText(file);
    },

    parseCSVData(data) {
      // 解析CSV文件内容，并将其转换为对应的数据结构
      // 例如，将CSV中的每一行转换为一个对象
      const rows = data.split('\n');
      const headers = rows[0].split(',');
      const csvData = [];

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        const rowData = {};

        for (let j = 0; j < headers.length; j++) {
          if (j > 0){
            rowData[headers[j].substring(1, headers[j].length - 1)] = row[j];
          }else{
            rowData[headers[j]] = row[j];
          }
        }

        csvData.push(rowData);
        console.log("rowData:")
        console.log(rowData)
      }

      // 在控制台中打印CSV数据
      console.log(csvData);
      this.datasent = csvData;
      console.log(this.datasent)
      this.sendTOParent()
    },
    sendTOParent() {
      this.$emit('listenToChildEvent', this.datasent)
    },
    ...mapActions(['login']),
    async handleLogin() {
      const user = { username: this.username, password: this.password };
      try {
        await this.login(user);
        console.log('Login successful');
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  },
  data() {
    return {
      datasent: [],
      username: '',
      password: '',
    }
  }
  /* --------------------以上代码正在测试，请勿改动-------------------- */



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