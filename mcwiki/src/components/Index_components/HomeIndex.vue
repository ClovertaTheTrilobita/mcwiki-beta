<script>

  import Carousel from '../home_components/Carousel.vue';
  import Accordion from '../home_components/Accordion.vue';
  import tabsCard from '../home_components/tabsCard.vue';
  import Card from '../home_components/Card.vue';

  export default {
    name: 'HomeIndex',
    components: {
      Accordion,
      tabsCard,
      Carousel,
      Card,
    }
  }

</script>

<template>

  <div style="background-color: #fff;">
    <Carousel/>
    <tabsCard/>
    <Accordion/>
  </div>

</template>

<style>
  
</style>