<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
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

export default {
  name: "App",
  components: { NavBar, SearchIndex, HomeIndex, BlogIndex, AccMessageIndex, SysMessageIndex, ContactIndex, SpaceIndex, i404NotFound },
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
    <transition name="lc">
      <!-- <p v-if="flag">我想带你去看晴空万里</p> -->
      <component :is="comName" v-if="flag"></component>
    </transition>
  </div>

</template>

<style lang="scss" scoped>
#app {
  text-align: center;
  margin-top: 0px;
  /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
}

.lc-enter,
.lc-leave-to {
  //进入前，离开后
  opacity: 0;
}

.lc-enter-to,
.lc-leave {
  //进入后，离开前
  opacity: 1;
}

.lc-enter-active,
.lc-leave-active {
  transition: all 0.1s;
}
</style>
