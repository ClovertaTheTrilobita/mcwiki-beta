<template>
  <div class="content">
    <NavBar class="navbar" />
    <component :is="comName" v-on:listenToChildEvent='showMsgfromChild' v-bind:datasent="datasent"></component> <!-- 使用 comName -->
    <About class="about" />
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
import Details from './components/category_components/Details.vue';
import Preference from './components/account_components/Preference.vue';

export default {
  name: "App",
  components: {
    Login,
    Preference,
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
    CategoryIndex,
    Details
  },

  setup() {
    const comName = ref('Login'); // 默认显示登录组件

    // 根据 hash 初始化 comName
    const initializeComponent = () => {
      const hash = window.location.hash || '#/home'; // ****！如果 hash 为空，默认为home界面
      const navbars = document.querySelectorAll('.navbar');
      const abouts = document.querySelectorAll('.about');
      if(hash=='#/preference'){
        abouts.forEach(function(about){
          about.style.display='none';
          console.log("run1");
        })
      }
      else{
        abouts.forEach(function(about){
          about.style.display='block';
          console.log("run2");
        })
      }
      //分离about和navbar显示控制
      if (hash == '#/login') {
        navbars.forEach(function (navbar) {
          navbar.style.display = 'none';
        })
        abouts.forEach(function(about){
          about.style.display='none';
          console.log("run3");
        })
        comName.value = 'Login';
      }
      else {
        navbars.forEach(function (navbar) {
          navbar.style.display = 'block';
        })
        abouts.forEach(function(about){
          about.style.display='block';
          console.log("run4");
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
        case '#/preference':
          comName.value = 'Preference';//change preference's hash
          break;
        case '#/detail':
          comName.value = 'Details';
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
  methods: {
    showMsgfromChild(data) {
      console.log(data)
      this.datasent = data;
    }
  },
  data() {
    return {
      datasent: []
    }
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 0px;
}
</style>
