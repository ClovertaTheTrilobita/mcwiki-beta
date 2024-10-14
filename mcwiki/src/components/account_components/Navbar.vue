<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img  class="avatar-img" src="@/assets/a12.jpg" alt="Avatar" >
        <p class="mb-0">{{ appName }}</p>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about-me">About Me</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/preference">Preference</router-link>
          </li>
        </ul>
      </div>
      <button class="change-name" @click="changeAppName">Change Name</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      appName: 'my App',
      appNames: ['  New App Name 1', '  New App Name 2', '  New App Name 3'], // 添加多个名字
      currentIndex: 0 // 当前名字的索引
    };
  },
  methods: {
    changeAppName() {
      // 改变 appName 为 appNames 数组中的下一个名字
      this.appName = this.appNames[this.currentIndex];
      // 更新索引，如果到达数组末尾则重置为 0
      this.currentIndex = (this.currentIndex + 1) % this.appNames.length;
    }
  }
};
</script>


<style scoped>

/* 导航栏样式 */
.navbar {
  background: linear-gradient(90deg, #ffffff 0%, #4016ac 100%); /* 添加渐变背景 */
  padding: 10px 20px; /* 内边距 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加底部阴影 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* 使导航栏固定在顶部 */
  width: 100%; /* 让导航栏充满宽度 */
  z-index: 1000; /* 设置导航栏的层级 */
}

/* 品牌 logo 和头像 */
.navbar-brand {
  display: flex;
  align-items: center;
  font-size: 18px; /* 字体大小 */
  color: white; /* 文字颜色 */
  font-weight: bold; /* 加粗字体 */
  text-transform: uppercase; /* 文字大写 */
}

/* 头像图片 */
.avatar-img {
  max-width: 40px; /* 设置头像的宽度 */
  max-height: 40px; /* 设置头像的高度 */
  border-radius: 50%; /* 使头像显示为圆形 */
  margin-right: 10px; /* 设置头像与文字之间的间距 */
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 添加过渡效果 */
}

/* 头像悬停效果 */
.avatar-img:hover {
  transform: translateY(-5px); /* 图片向上浮动 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
}

/* 导航栏品牌名称的样式 */
.navbar-brand p {
  margin-bottom: 0; /* 去除段落默认的下边距 */
  color: white; /* 设置文字颜色 */
}

/* 修改用户名按钮 */
.change-name {
  background-color: #ffffff; /* 按钮背景颜色 */
  color: #4CAF50; /* 按钮文字颜色 */
  border: 1px solid #4CAF50; /* 边框颜色 */
  padding: 10px 20px; /* 内边距 */
  text-align: center; /* 文本居中 */
  text-decoration: none; /* 移除下划线 */
  display: inline-block; /* 行内块元素 */
  font-size: 16px; /* 字体大小 */
  margin: 4px 2px; /* 外边距 */
  cursor: pointer; /* 鼠标指针样式 */
  border-radius: 5px; /* 圆角 */
  transition: background-color 0.3s ease, color 0.3s ease; /* 背景颜色与文字颜色的过渡效果 */
}

/* 修改用户名按钮悬停效果 */
.change-name:hover {
  background-color: #4CAF50; /* 悬停时背景颜色 */
  color: white; /* 悬停时文本颜色 */
}

</style>

  
