<template>

  <h1 style="text-align: center; font-family: STHupo; font-size: 2.5em;">Before you play</h1>
  <br>
  <h6 style="text-align: center; font-size: 1.2em; color: gray;">Browse the news, download the game, customize the material...... Your Minecraft journey began here.</h6>
 <br>
  <div class="card-header">
    <div class="card-body" style="text-align: left;">
      <div class="tab-content">
        <div id="home" class="container tab-pane active show">
          <div class="row row-cols-2 row-cols-lg-4">
            <div class="col">
              <Card1 />
            </div>
            <div class="col">
              <Card2 />
            </div>
            <div class="col">
              <Card3 />
            </div>
            <div class="col">
              <Card4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import Card1 from './Card1.vue';
  import Card2 from './Card2.vue';
  import Card3 from './Card3.vue';
  import Card4 from './Card4.vue';

  export default {
    name: "Cards",
    components: {
      Card1,Card2,Card3,Card4,
    }
  }
</script>

<style scoped>

</style> 