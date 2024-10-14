<template>
  <div id="app">
    <Preference />
    <router-view />
  </div>
</template>
  
  <script>

  import Preference from '../user_components/Preference.vue';

  export default {
    name: 'TestIndex',
    components: {
      Preference,
    }
  }

  </script>
  
  <style>

  nav{
    position: sticky;
    top: 0;
    width: 100%;
    background-color: rgb(223, 175, 111);
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .navbar-static {
    position: static;
  }

  </style>
  
  
  