<script>
import NavBar from './components/NavBar.vue';
import SearchIndex from './components/SearchIndex.vue';
import HomeIndex from './components/HomeIndex.vue';
import BlogIndex from './components/BlogIndex.vue';
import AccMessageIndex from './components/AccMessageIndex.vue';
import SysMessageIndex from './components/SysMessageIndex.vue';
import ContactIndex from './components/ContactIndex.vue';
import SpaceIndex from './components/SpaceIndex.vue';
import i404NotFound from './components/i404NotFound.vue';
import Margin from './components/margin.vue';

export default {
  name: "App",
  components: { Margin, NavBar, SearchIndex, HomeIndex, BlogIndex, AccMessageIndex, SysMessageIndex, ContactIndex, SpaceIndex, i404NotFound },
  data() {
    return {
      comName: 'HomeIndex',  // Initalize comName
      flag: true,
    }
  },
  created() {
    window.onhashchange = () => {
      switch (location.hash) {
        case '#/home':
          this.comName = 'HomeIndex'
          break
        case '#/blogs':
          this.comName = 'BlogIndex'
          break
        case '#/sysmessage':
          this.comName = 'SysMessageIndex'
          break
        case '#/accmessage':
          this.comName = 'AccMessageIndex'
          break
        case '#/contact':
          this.comName = 'ContactIndex'
          break
        case '#/space':
          this.comName = 'SpaceIndex'
          break
        case '#/search':
          this.comName = 'SearchIndex'
          break
        default:
          this.comName = 'i404NotFound'
          break
      }
    }
  }
}
</script>

<template>
  <div>
    <NavBar />
  </div>
  <div>
    <Margin />
  </div>
  <div>
    <component :is="comName"></component>
  </div>

</template>

<style scoped>
#app {
  text-align: center;
  margin-top: 0px;
  /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
}
</style>
