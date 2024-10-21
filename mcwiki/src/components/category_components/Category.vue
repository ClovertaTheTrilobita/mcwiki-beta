<template>
  <div class="container">
    <Start v-if="currentHash !== '#/jumpcategory'" />


    <!-- 卡片 -->
    <Cards v-if="currentHash !== '#/jumpcategory'" />



    <br><br><br><br>
    <h1 style="text-align: center; font-family: STHupo; font-size: 2.5em;">When you play</h1>
    <br>
    <h6 style="text-align: center; font-size: 1.2em; color: gray;">What's this ... and ... what is that? Don't worry.
      Look below to find and learn more!</h6>
    <br>
    <div class="container mt-1">
      <div class="accordion" style="--bs-focus-ring-color: #6cb16385; --bs-accordion-btn-color: #eefdf1;
    --bs-accordion-active-color: #eefdf1; --bs-accordion-bg: #eefdf1;" id="accordionExample">


        <!-- Drop down menue for Bloks&Items -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button focus-ring" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
              style="--bs-accordion-btn-bg: #39d275; --bs-accordion-active-bg: #39d275;font-size: 18px;" >
              Blocks&Items
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <!-- copy -->
              <div class="container" id="cardd">
                <div class="card" v-for="block in Blocks_Items" style="--bs-card-height: 162px;">
                  <a :href="'#/' + block.Entry" target="_blank">
                    <div class="card-body">
                      <img  :src=block.Image height="100px"> <!--Image-->
                      <p class="card-content" >{{ block.Entry }}</p> <!--Name-->
                    </div>
                  </a>
                </div>
              </div>
              <!-- copy end-->
            </div>
          </div>
        </div>

        <!-- Drop down menue for Boime -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
              style="--bs-accordion-btn-bg: #32c674; --bs-accordion-active-bg: #32c674;font-size: 18px;">
              Biome
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="container" id="cardd">

                <div class="card" v-for="block in Biome" style="--bs-card-height: 115px;">
                  <a :href="'#/' + block.Entry" target="_blank">
                    <div class="card-body">
                      <img class="card-img" :src=block.Image > <!--Image-->
                      <p class="card-content" >{{ block.Entry }}</p> <!--Name-->
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Drop down menue for DIM -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
              style="--bs-accordion-btn-bg: #2bbb75; --bs-accordion-active-bg: #2bbb75;font-size: 18px;">
              DIM
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="container" id="cardd">
                <div class="card" v-for="block in DIM" style="--bs-card-height: 150px;">
                  <a :href="'#/' + block.Entry" target="_blank">
                    <div class="card-body">
                      <img  :src=block.Image height="100px"> <!--Image-->
                      <p class="card-content" >{{ block.Entry }}</p> <!--Name-->
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Drop down menue for Entity -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"
              style="--bs-accordion-btn-bg: #24b074; --bs-accordion-active-bg: #24b074;font-size: 18px;">
              Entity
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="container" id="cardd">
                <div class="card" v-for="block in Entity" style="--bs-card-height: 135px;">
                  <a :href="'#/' + block.Entry" target="_blank">
                    <div class="card-body">
                      <img  :src=block.Image height="75px"> <!--Image-->
                      <p class="card-content" >{{ block.Entry }}</p> <!--Name-->
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Drop down menue for Enchantment -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"
              style="--bs-accordion-btn-bg: #1ba173; --bs-accordion-active-bg: #1ba173;font-size: 18px;">
              Enchantment
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="container" id="cardd">
                <div class="card" v-for="block in Enchantment" style="--bs-card-height: 162px;">
                  <a :href="'#/' + block.Entry" target="_blank">
                    <div class="card-body">
                      <img  :src=block.Image height="100px"> <!--Image-->
                      <p class="card-content" >{{ block.Entry }}</p> <!--Name-->
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Drop down menue for Effects -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"
              style="--bs-accordion-btn-bg: #139372; --bs-accordion-active-bg: #139372;font-size: 18px;">
              Effect
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample" bg-light>
            <div class="accordion-body">
              <div class="container" id="cardd">
                <div class="card" v-for="block in Effect" style="--bs-card-height: 150px;">
                  <a :href="'#/' + block.Entry" target="_blank">
                    <div class="card-body">
                      <img  :src=block.Image height="100px"> <!--Image-->
                      <p class="card-content" >{{ block.Entry }}</p> <!--Name-->
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Drop down menue for Structres -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven"
              style="--bs-accordion-btn-bg: #0c8672; --bs-accordion-active-bg: #0c8672;font-size: 18px;">
              Structure
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="container" id="cardd">
                <div class="card" v-for="block in Structure" style="--bs-card-height: 115px;">
                  <a :href="'#/' + block.Entry" target="_blank">
                    <div class="card-body">
                      <img  :src=block.Image height="65px"> <!--Image-->
                      <p class="card-content" >{{ block.Entry }}</p> <!--Name-->
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Drop down menue for Game Backstories -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight"
              style="--bs-accordion-btn-bg: #067b72; --bs-accordion-active-bg: #067b72;font-size: 18px;">
              Feature
            </button>
          </h2>
          <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="container" id="cardd">
                <div class="card" v-for="block in Features" style="--bs-card-height: 155px;">
                  <a :href="'#/' + block.Entry" target="_blank">
                    <div class="card-body">
                      <img  :src=block.Image height="100px"> <!--Image-->
                      <p class="card-content" >{{ block.Entry }}</p> <!--Name-->
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Drop down menue for In Game Settings -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine"
              style="--bs-accordion-btn-bg: #007271; --bs-accordion-active-bg: #007271;font-size: 18px;">
              GameSettings
            </button>
          </h2>
          <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="container" id="cardd">
                <div class="card" v-for="block in GameSettings" style="--bs-card-height: 155px;">
                  <a :href="'#/' + block.Entry" target="_blank">
                    <div class="card-body">
                      <img  :src=block.Image height="100px"> <!--Image-->
                      <p class="card-content" >{{ block.Entry }}</p> <!--Name-->
                    </div>
                  </a>
                </div>
              </div>
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
import Start from './Start.vue';
import Cards from './Cards.vue';
import placeHolders1 from './placeHolders1.vue';
import Entry from '../../data/entry.json';
import Biome from '../../data/FinalData/Biome/Biome.json'
import Blocks_Items from '../../data/FinalData/Blocks_Items/Blocks_Items.json'
import DIM from'../../data/FinalData/DIM/DIM.json'
import Entity from '../../data/FinalData/Entity/Entity.json'
import Enchantment from '../../data/FinalData/Enchantment/Enchantment.json'
import Effect from '../../data/FinalData/Effect/Effect.json'
import Structure from '../../data/FinalData/Structure/Structure.json'
import Features from '../../data/FinalData/Features/Features.json'
import GameSettings from '../../data/FinalData/GameSettings/GameSettings.json'

export default {
  name: 'Category',
  components: {
    Card1, Card2, Card3, Card4, Cards,
    placeHolders1,
    Start,
  },
  data() {
    return {
      Entry,Biome,Blocks_Items,DIM,Entity,Enchantment,Effect,Structure,Features,GameSettings,
      currentHash: window.location.hash,
    };
  },
  methods: {
    categoryClicked() {
      // do{
      //   console.log("waiting");

      // }while(modernizrCustom.methods.function.b.documentElement == 'undefined');
    },
    CheckImg(){
      console.log(this.Biome[0].Image)
    }
  }
}

</script>

<style scoped>
a {
  color: #48af3a;
  text-decoration: none;
}


#cardd {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  /* 卡片之间的间距 */
}

.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: calc(12.5% - 14px);/* 减去间距，确保8张卡片并排 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #F6FFF8;
}

.card:hover {
  transform:  scale(1.01);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-content {
  text-align: center;
  font-size: 10.9px;
  position: relative;
  top: 10px;
}

.card-img {
  width: 100%;
  height: auto;
  border-radius: 4px;

}

a {
    text-decoration: none;
    color: #000000;
  }

.accordion-body {
  text-align: left;
}

.card-body{
  text-align: center;
}

</style>