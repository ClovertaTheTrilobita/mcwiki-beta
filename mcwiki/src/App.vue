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

  export default {
    name: "App",
    components: {NavBar, SearchIndex}
  }
</script>

<template>
  <NavBar/>
  <SearchIndex/>
</template>

<style>
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
