<template>
  <div class="container mt-1" style="--bs-focus-ring-color: #5a5a5a85;">
  <div class="accordion accordion-flush" style="--bs-accordion-active-bg: #ffffff;" id="accordionExample">

    <!-- Drop down menue for Bloks&Items -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button focus-ring" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Blocks&Items
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body" style="text-align: left;" >
          Items will display here.
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

</template>

<script>
  export default{
      name: 'MenuList'
  }

</script>

<style>
  .accordion-body{
  background-color: aliceblue;
}
</style>