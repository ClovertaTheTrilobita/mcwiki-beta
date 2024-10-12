<script>
  import Carousel from './home_components/Carousel.vue';
  import Accordion from './home_components/Accordion.vue';
  import tabsCard from './home_components/tabsCard.vue';
  import About from './home_components/About.vue';
  import placeHolders from './home_components/placeHolders.vue';
  import Card from './home_components/Card.vue';


  export default {
    name: 'HomeIndex',
    components: {
      Accordion,
      tabsCard,
      Carousel,
      Card,
      About,
      placeHolders,
    }
  }
</script>

<template>
  <Carousel/>
  <Accordion/>
  <tabsCard/>
  <About/>
  <placeHolders/>
</template>

<style>
  
</style>