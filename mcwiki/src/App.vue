<script>
import NavBar from './components/public_components/NavBar.vue';
import SearchIndex from './components/Index_components/SearchIndex.vue';
import HomeIndex from './components/Index_components/HomeIndex.vue';
import BlogIndex from './components/Index_components/BlogIndex.vue';
import AccMessageIndex from './components/Index_components/AccMessageIndex.vue';
import SysMessageIndex from './components/Index_components/SysMessageIndex.vue';
import ContactIndex from './components/Index_components/ContactIndex.vue';
import SpaceIndex from './components/Index_components/SpaceIndex.vue';
import i404NotFound from './components/public_components/i404NotFound.vue';
import About from './components/public_components/About.vue';

export default {
  name: "App",
  components: { NavBar, SearchIndex, HomeIndex, BlogIndex, AccMessageIndex, SysMessageIndex, ContactIndex, SpaceIndex, i404NotFound, About },
  data() {
    return {
      comName: 'HomeIndex',  // Initalize comName
    }
  },
  created() {
    window.onhashchange = () => {
      switch (location.hash) {
        case '#/home':
          this.comName = 'HomeIndex'
          console.log(this.comName)
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
          console.log(this.comName)
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
  <NavBar />
  <component :is="comName"></component>
  <About/>
</template>

<style scoped>
#app {
  text-align: center;
  margin-top: 0px;
}
</style>
