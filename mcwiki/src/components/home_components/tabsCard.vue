<template>
  <div class="container-fluid" style="background-color: #2d7054; height: 60px;"></div>
  <div class="container mt-5">
    <div class="mb-5">
      <h1 style="text-align: center; font-family: STHupo; font-size: 4em;">Minecraft Materials</h1>
    </div>
    <div class="card text-center">
      <div class="card-header" style="background-color: #009978;">
        <ul class="nav nav-tabs card-header-tabs" role="tablist" style="--bs-nav-link-color: #eefdf1; --bs-nav-link-hover-color: #eefdf1; --bs-nav-tabs-link-active-border-color: #eefdf1; --bs-nav-tabs-link-hover-border-color: #eefdf1">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" aria-current="true" href="#home">原版资料</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu1">原版介绍</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu2">原版教程</a>
          </li>
        </ul>
      </div>
      <div class="card-body" style="text-align: left; background-color: #eefdf1;">
        <div class="tab-content">
          <div id="home" class="container tab-pane active show fade"> 
            <div class="row row-cols-2 row-cols-lg-4">
              <div class="col" v-for = "item in present"><Card :img_url="item.url" :text="item.descriptions" :title="item.title"/></div>
            </div>
          </div>
          <div id="menu1" class="container tab-pane fade">
            <h5>HelloWorld</h5>
          </div>
          <div id="menu2" class="container tab-pane fade">
            <h4>Hello</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Card from './Card.vue';
  import img1 from './images/present/card_01.png';
  import img2 from './images/present/card_02.png';
  import img3 from './images/present/card_03.png';
  import img4 from './images/present/card_04.png';
  import img5 from './images/present/card_05.png';
  import img6 from './images/present/card_06.png';
  import img7 from './images/present/card_07.png';
  import img8 from './images/present/card_08.png';
  import img9 from './images/present/card_09.png';

  export default {
    name: "tabsCard",
    components: {
      Card,
    },
    setup() {
      return {
        present: [
          {
            "title": "Items/Blocks",
            "descriptions": "Newly added or rewritten items and blocks",
            "url": img1,
          },
          {
            "title": "Biome",
            "descriptions": "Newly added or rewritten biomes",
            "url": img2,
          },
          {
            "title": "DIM",
            "descriptions": "Newly added or rewritten DIM",
            "url": img3,
          },
          {
            "title": "Entity",
            "descriptions": "Newly added or rewritten entities",
            "url": img4,
          },
          {
            "title": "Enchantment",
            "descriptions": "Newly added or rewritten enchantments",
            "url": img5,
          },
          {
            "title": "Effect",
            "descriptions": "Newly added or rewritten effects",
            "url": img6,
          },
          {
            "title": "Multiblocked Structure",
            "descriptions": "Events triggered by players building blocks",
            "url": img7,
          },
          {
            "title": "Feature",
            "descriptions": "Newly added or rewritten structures, features, jigsaws",
            "url": img8,
          },
          {
            "title": "Game Settings",
            "descriptions": "Newly added nomenclature, commands, worldview and backstory",
            "url": img9,
          },
        ],
      }
    }
  }

</script>

<style>
</style>