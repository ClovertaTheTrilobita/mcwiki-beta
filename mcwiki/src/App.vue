<template>

  <div class="content">
    <NavBar class="navbar" :isLoggedIn="isLoggedIn" :user="user" />
    <component :is="comName" :Item="currentItem"></component>
    <About class="about" />
  </div>

</template>

<script>

import { ref, onMounted } from 'vue';
import { jwtDecode } from 'jwt-decode';

import NavBar from './components/public_components/NavBar.vue';
import About from './components/public_components/About.vue';

import SearchIndex from './components/Index_components/SearchIndex.vue';
import HomeIndex from './components/Index_components/HomeIndex.vue';
import ContactIndex from './components/Index_components/ContactIndex.vue';
import CategoryIndex from './components/Index_components/CategoryIndex.vue';

import Login from './components/account_components/Login.vue';
import Register from './components/account_components/Register.vue';
import Details from './components/category_components/Details.vue';
import Preference from './components/account_components/Preference.vue';
import NotFound404 from './components/public_components/NotFound404.vue';

import Data from './data/Summary/AllDataFinal.json';



export default {
  name: "App",
  components: {
    Login,
    Register,
    Preference,
    NavBar,
    About,
    Details,

    SearchIndex,
    HomeIndex,
    ContactIndex,
    CategoryIndex,

    NotFound404,
  },

  setup() {

    const comName = ref('');
    const currentItem = ref(null);
    const isLoggedIn = ref(false);
    const user = ref(null);

    const initializeComponent = () => {      

      const hash = window.location.hash;                                 // 根据 hash 初始化 comName
      const navbars = document.querySelectorAll('.navbar');
      const abouts = document.querySelectorAll('.about');
      const decodedHash = decodeURIComponent(hash.slice(2));             // 去掉前面的 `#/` 并解码
      const matchedItem = Data.find(Item => Item.Entry == decodedHash);

      if (hash == '#/login' || hash == '#/register') {
        navbars.forEach(function (navbar) {
          navbar.style.display = 'none';
        })
        abouts.forEach(function(about){
          about.style.display='none';
        })
        comName.value = 'Login';
      }
      else {
        navbars.forEach(function (navbar) {
          navbar.style.display = 'block';
        })
        abouts.forEach(function(about){
          about.style.display='block';
        })
      }

      if (matchedItem) {
        comName.value = 'Details';
        currentItem.value = matchedItem;
      } else {
        switch (hash) {
          case '':
            comName.value = 'HomeIndex';
            break;
          case '#/login':
            comName.value = 'Login';
            break;
          case '#/register':
            comName.value = 'Register';
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
          case '#/jumpcategory':
            comName.value = 'CategoryIndex';
            break;
          case '#/preference':
            comName.value = 'Preference';
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
          case '#/detail':
            comName.value = 'Details';
            break;
          default:
            comName.value = 'i404NotFound';                               // 404 页面
            currentItem.value = null;
            break;
        }
      }
    };

    const handleHashChange = () => {
      initializeComponent();                                              // 每次 hash 变化时更新 comName
    };

    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = jwtDecode(token);
        user.value = { username: decodedToken.username };
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
        user.value = null;
      }
    };

    onMounted(() => {
      initializeComponent();                                              // 初始化时设置当前组件
      window.addEventListener('hashchange', handleHashChange);            // 监听 hash 变化
      checkLoginStatus();
    });

    return {
      comName,
      currentItem,
      isLoggedIn,
      user,
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

<!-- 

<template>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>
</style> 

-->
