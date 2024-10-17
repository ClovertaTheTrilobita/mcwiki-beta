<template>
  <div class="content">
    <NavBar class="navbar"/>
    <component :is="comName"></component> <!-- 使用 comName -->
    <About />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'; // 导入 ref 和 onMounted
import NavBar from './components/public_components/NavBar.vue';
import SearchIndex from './components/Index_components/SearchIndex.vue';
import HomeIndex from './components/Index_components/HomeIndex.vue';
import AccMessageIndex from './components/Index_components/AccMessageIndex.vue';
import SysMessageIndex from './components/Index_components/SysMessageIndex.vue';
import ContactIndex from './components/Index_components/ContactIndex.vue';
import SpaceIndex from './components/Index_components/SpaceIndex.vue';
import i404NotFound from './components/public_components/i404NotFound.vue';
import About from './components/public_components/About.vue';
import TestIndex from './components/Index_components/TestIndex.vue';
import CategoryIndex from './components/Index_components/CategoryIndex.vue';
import Login from './components/Login_componments/Login.vue';

export default {
  name: "App",
  components: {
    Login,
    NavBar,
    SearchIndex,
    HomeIndex,
    AccMessageIndex,
    SysMessageIndex,
    ContactIndex,
    SpaceIndex,
    i404NotFound,
    About,
    TestIndex,
    CategoryIndex
  },

  setup() {
    const comName = ref('Login'); // 默认显示登录组件

    // 根据 hash 初始化 comName
    const initializeComponent = () => {
      const hash = window.location.hash || '#/login'; // ****！如果 hash 为空，默认为登录页面
      const navbars=document.querySelectorAll('.navbar');
      if(hash=='#/login'){
        navbars.forEach(function(navbar){
          navbar.style.display='none';
        })
        comName.value='Login';
      }
      else{
        navbars.forEach(function(navbar){
          navbar.style.display='block';
        })
      }
      switch (hash) {
        case '#/login':
          comName.value = 'Login';
          
          break;
        case '#/home':
          comName.value = 'HomeIndex';
          break;
        case '#/search':
          comName.value = 'SearchIndex';
          break;
        case '#/category':
          comName.value = 'CategoryIndex';
          break;
        case '#/sysmessage':
          comName.value = 'SysMessageIndex';
          break;
        case '#/accmessage':
          comName.value = 'AccMessageIndex';
          break;
        case '#/contact':
          comName.value = 'ContactIndex';
          break;
        case '#/space':
          comName.value = 'SpaceIndex';
          break;
        case '#/test':
          comName.value = 'TestIndex';
          break;
        default:
          comName.value = 'i404NotFound'; // 404 页面
          break;
      }
    };

    const handleHashChange = () => {
      initializeComponent(); // 每次 hash 变化时更新 comName
    };

    onMounted(() => {
      initializeComponent(); // 初始化时设置当前组件
      window.addEventListener('hashchange', handleHashChange); // 监听 hash 变化
    });

    return {
      comName
    };
  },
}
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 0px;
}
</style>

