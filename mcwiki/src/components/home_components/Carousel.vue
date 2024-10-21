<template>
  <div id="Carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#Carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./images/Carousel/Slide01.png" class="d-block w-100 Slide img-fluid" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h1>Cherry Grove</h1>
          <p>Cherry blossom tree forest is a special lush variant of the mountainous terrain, added in Java version 1.19.4 snapshot 23w07a (built-in datapack). A large number of cherry trees grow here, the surface is covered with grass cubes and numerous decorative pink flower clusters are generated on the surface, the grass here is warmer in tone. Pigs, sheep, and bees spawn in this biome.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/Carousel/Slide02.png" class="d-block w-100 Slide img-fluid" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h1>The Nether</h1>
          <p>The Nether is a closed, dangerous dimension filled with fire, lava, fungal vegetation, and many hostile creatures, a world that exists in a different dimension than the main world, also a cave dimension.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/Carousel/Slide03.png" class="d-block w-100 Slide img-fluid" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h1>Woodland Mansion</h1>
          <p>Woodland Mansions spawn very rarely in the Black Forest biome, usually tens of thousands of blocks away from the birth point, and players can find them by purchasing Woodland Explorer maps from cartographer villagers with emeralds.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#Carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#Carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "Carousel"
  }
</script>

<style scoped>

.Slide {
  max-height: 840px;
  object-fit: cover;
}

</style>

<!--

example: style="--bs-carousel-control-color: "

$carousel-control-color:             $white;
$carousel-control-width:             15%;
$carousel-control-opacity:           .5;
$carousel-control-hover-opacity:     .9;
$carousel-control-transition:        opacity .15s ease;

$carousel-indicator-width:           30px;
$carousel-indicator-height:          3px;
$carousel-indicator-hit-area-height: 10px;
$carousel-indicator-spacer:          3px;
$carousel-indicator-opacity:         .5;
$carousel-indicator-active-bg:       $white;
$carousel-indicator-active-opacity:  1;
$carousel-indicator-transition:      opacity .6s ease;

$carousel-caption-width:             70%;
$carousel-caption-color:             $white;
$carousel-caption-padding-y:         1.25rem;
$carousel-caption-spacer:            1.25rem;

$carousel-control-icon-width:        2rem;

$carousel-control-prev-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>");
$carousel-control-next-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>");

$carousel-transition-duration:       .6s;
$carousel-transition:                transform $carousel-transition-duration ease-in-out; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)

-->