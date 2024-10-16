<template>
<div class="container">
  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src=".\media\Weel.png" alt="" width="90" height="90">
    <h1 class="display-5 fw-bold">Start From Here ...</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Build all the wonders you can think of in this sandbox game, uncover the mysteries
        of strange mysteries, and survive the long night.  
        In <span>Minecraft</span>, every play is a different experience, and the world
        is full of unforgettable adventures. Explore and create in an infinite world, one square at a time, a world you can shape.</p>

    </div>
  </div>

  <!-- 翻页
<div class="container demo-3">
<ul class="grid cs-style-4">
  <li>
    <figure>
      <div><img src="./images/5.png" alt=""></div>
      <figcaption>
        <h3>Safari</h3>
        <span>Jacob Cummings</span>
        <a href="http://www.jq22.com">Take a look</a>
      </figcaption>
    </figure>
  </li>
</ul>
</div> -->


<!-- 卡片 -->
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




<br><br><br><br>
  <h1 style="text-align: center; font-family: STHupo; font-size: 2.5em;">When you play</h1>
  <br>
  <h6 style="text-align: center; font-size: 1.2em; color: gray;">What is that? Don't worry. Click on the categories below to find and learn more!</h6>
 <br>
  <div class="container mt-1" style="--bs-focus-ring-color: #5a5a5a85;">
    <div class="accordion" style="--bs-accordion-active-bg: #ffffff;" id="accordionExample">


      <!-- Drop down menue for Bloks&Items -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Blocks&Items
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            <!-- <a href="#/test1" >111</a> -->
            test
          </div>
        </div>
      </div>

      <!-- Drop down menue for Boime -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Biome
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            MC bios will appear here.
          </div>
        </div>
      </div>

      <!-- Drop down menue for DIM -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            DIM
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            World dimention.
          </div>
        </div>
      </div>

      <!-- Drop down menue for Entity -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Entity
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            Minecraft Entities.
          </div>
        </div>
      </div>

      <!-- Drop down menue for Enchantment -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Enchantment
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            Enchantment for tools will appear here.
          </div>
        </div>
      </div>

      <!-- Drop down menue for Effects -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            Effect
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample" bg-light>
          <div class="accordion-body" style="text-align: left;">
            Buffs&Debuffs appears here.
          </div>
        </div>
      </div>

      <!-- Drop down menue for Structres -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            Structres
          </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            Block Structres.
          </div>
        </div>
      </div>

      <!-- Drop down menue for Game Backstories -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
            Backstory
          </button>
        </h2>
        <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            The MC Game Backstories.
          </div>
        </div>
      </div>

      <!-- Drop down menue for In Game Settings -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
            Game Settings
          </button>
        </h2>
        <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            The new game settings appeared.
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import modernizrCustom from './js/modernizr.custom';
import toucheffects from './js/toucheffects';
import Card1 from './Card1.vue';
import Card2 from './Card2.vue';
import Card3 from './Card3.vue';
import Card4 from './Card4.vue';
import placeHolders1 from './placeHolders1.vue';

export default {
  name: 'Category',
  components: {
    Card1,Card2,Card3,Card4,
    placeHolders1,
  },
  created() {



  },
  methods: {
    categoryClicked() {
      // do{
      //   console.log("waiting");

      // }while(modernizrCustom.methods.function.b.documentElement == 'undefined');

      modernizrCustom.methods.function();
      toucheffects.methods.function1();

    }
  }
}

</script>

<style scoped>
/* @import './css/component.css';
@import './css/default.css'; */

.accordion-body {
  background-color: aliceblue;
}

.lead{
  span{
    font-weight: bold;
    color: #2f7054;
  }
}
</style>
