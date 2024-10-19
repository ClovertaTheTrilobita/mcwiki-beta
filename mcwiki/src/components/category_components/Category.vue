<template>
  <div class="container">
    <Start v-if="currentHash !== '#/jumpcategory'" />


    <!-- 卡片 -->
    <Cards v-if="currentHash !== '#/jumpcategory'" />



    <br><br><br><br>
    <h1 style="text-align: center; font-family: STHupo; font-size: 2.5em;">When you play</h1>
    <br>
    <h6 style="text-align: center; font-size: 1.2em; color: gray;">What's this ... and ... what is that? Don't worry.
      Click on the categories below to find and learn more!</h6>
    <br>
    <div class="container mt-1" :style="Accordion">
      <div class="accordion" style="--bs-focus-ring-color: #6cb16385; --bs-accordion-btn-color: #eefdf1;
    --bs-accordion-active-color: #eefdf1; --bs-accordion-bg: #eefdf1;" id="accordionExample">


      <!-- Drop down menue for Bloks&Items -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" 
            style="--bs-accordion-btn-bg: #39d275; --bs-accordion-active-bg: #39d275;">
            Blocks&Items
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            <a v-for="block in Entry" :key="block.Entry" :href="'#/' + block.Entry" target="_blank" class="mx-2">{{ block.Entry }}</a>
          </div>
        </div>
      </div>

        <!-- Drop down menue for Boime -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
              style="--bs-accordion-btn-bg: #32c674; --bs-accordion-active-bg: #32c674;">
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
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
              style="--bs-accordion-btn-bg: #2bbb75; --bs-accordion-active-bg: #2bbb75;">
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
              data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"
              style="--bs-accordion-btn-bg: #24b074; --bs-accordion-active-bg: #24b074;">
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
              data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"
              style="--bs-accordion-btn-bg: #1ba173; --bs-accordion-active-bg: #1ba173;">
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
              data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"
              style="--bs-accordion-btn-bg: #139372; --bs-accordion-active-bg: #139372;">
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
              data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven"
              style="--bs-accordion-btn-bg: #0c8672; --bs-accordion-active-bg: #0c8672;">
              Multiblocked Structures
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
              data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight"
              style="--bs-accordion-btn-bg: #067b72; --bs-accordion-active-bg: #067b72;">
              Features
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
              data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine"
              style="--bs-accordion-btn-bg: #007271; --bs-accordion-active-bg: #007271;">
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
      <About v-if="currentHash == '#/jumpcategory'" :class="{ 'fixed-bottom': isFixed }" />
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
import About from '../public_components/About.vue';
import Entry from '../../data/entry.json';

export default {
  name: 'Category',
  components: {
    Card1, Card2, Card3, Card4, Cards,
    placeHolders1,
    Start,
    About,
  },
  data() {
    return {
      Entry,
      currentHash: window.location.hash,
      isFixed: true,
      Accordion: {
        height: '72.5vh',
      }
    };
  },
  created() {
    window.addEventListener('hashchange', this.onHashChange);
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll);
    window.addEventListener('resize', this.checkScroll);
    this.checkScroll();
  },
  beforeDestroy() {
    window.removeEventListener('hashchange', this.onHashChange);
    window.removeEventListener('scroll', this.checkScroll);
    window.removeEventListener('resize', this.checkScroll);
  },
  methods: {
    categoryClicked() {
      // do{
      //   console.log("waiting");

      // }while(modernizrCustom.methods.function.b.documentElement == 'undefined');
    },
    onHashChange() {
      this.currentHash = window.location.hash;
    },
    checkScroll() {
      const hasScrollbar = document.documentElement.scrollHeight > window.innerHeight;
      this.isFixed = !hasScrollbar;
      this.Accordion = hasScrollbar
        ? {}
        : { height: '72.5vh' };
    }
  }
}

</script>

<style scoped>

a {
    color: #48af3a;
    text-decoration: none;
  }

</style>
