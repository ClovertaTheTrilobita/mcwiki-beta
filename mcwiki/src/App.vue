<script>
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


export default {
  name: "App",
  components: { NavBar, SearchIndex, HomeIndex, AccMessageIndex, SysMessageIndex, ContactIndex, SpaceIndex, i404NotFound, About, TestIndex, CategoryIndex},
  data() {
    return {
      comName: 'HomeIndex',  // Initalize comName
    }
  },
  created() {
    if (location.hash == '#/search'){
      this.comName = 'SearchIndex'
    }
    if (location.hash == '#/home'){
      this.comName = 'HomeIndex'
    }
    if (location.hash == '#/menu'){
      this.comName = 'MenuIndex'
    }
    if (location.hash == '#/sysmessage'){
      this.comName = 'SysMessageIndex'
    }
    if (location.hash == '#/contact'){
      this.comName = 'ContactIndex'
    }
    if (location.hash == '#/space'){
      this.comName = 'SpaceIndex'
    }
    window.onhashchange = () => {
      switch (location.hash) {
        case '':
          this.comName = 'HomeIndex'
          break
        case '#/home':
          this.comName = 'HomeIndex'
          console.log(this.comName)
          break
        case '#/category':
          this.comName = 'CategoryIndex'
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
        case '#/test':
          this.comName = 'TestIndex'
          break
          // test
        default:
          this.comName = 'i404NotFound'
          break
      }
    }
  }
}
</script>

<template>
  <div class="content">
    <NavBar />
    <component :is="comName"></component>
    <About/>
  </div>
</template>

<style scoped>
#app {
  text-align: center;
  margin-top: 0px;
}
</style>
