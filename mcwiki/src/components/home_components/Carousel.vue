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
          <h1 >Cherry Grove</h1>
          <p >樱花树林是山地的特殊繁茂变种，在Java版1.19.4快照23w07a（内置数据包）中加入。这里生长着大量樱花树，地表被草方块覆盖着，且地表上会生成众多装饰性的粉红色花簇，这儿的草色调较暖。猪、绵羊、蜜蜂会在此生物群系生成。</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/Carousel/Slide02.png" class="d-block w-100 Slide img-fluid" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h1>The Nether</h1>
          <p>下界是一个封闭、危险的维度，充斥着火焰、熔岩、菌类植被以及许多敌对生物，是一个和主世界存在于不同维度的世界，也是一个洞穴维度。</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/Carousel/Slide03.png" class="d-block w-100 Slide img-fluid" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h1>Woodland Mansion</h1>
          <p>林地府邸会非常罕见地在黑森林生物群系中生成，通常距离出生点有几万个方块远，玩家可以通过向制图师村民用绿宝石购买林地探险家地图寻找它们</p>
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