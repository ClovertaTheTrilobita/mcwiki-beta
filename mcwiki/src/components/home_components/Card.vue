<template>
  <a href="#" class="btn ">
    <div class="card">
      <img src="./images/95122414.jpg" class="card-img-top img-fluid" alt="..." id="source">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: "Card"
  }
</script>

<style>
</style>

<!--

example: style="--bs-card-spacer-y: "

$card-spacer-y:                     $spacer;
$card-spacer-x:                     $spacer;
$card-title-spacer-y:               $spacer * .5;
$card-title-color:                  null;
$card-subtitle-color:               null;
$card-border-width:                 var(--#{$prefix}border-width);
$card-border-color:                 var(--#{$prefix}border-color-translucent);
$card-border-radius:                var(--#{$prefix}border-radius);
$card-box-shadow:                   null;
$card-inner-border-radius:          subtract($card-border-radius, $card-border-width);
$card-cap-padding-y:                $card-spacer-y * .5;
$card-cap-padding-x:                $card-spacer-x;
$card-cap-bg:                       rgba(var(--#{$prefix}body-color-rgb), .03);
$card-cap-color:                    null;
$card-height:                       null;
$card-color:                        null;
$card-bg:                           var(--#{$prefix}body-bg);
$card-img-overlay-padding:          $spacer;
$card-group-margin:                 $grid-gutter-width * .5;

-->