<template>
  <div class="card mb-3 mx-2">
    <a href="https://www.mcmod.cn/class/version/1.html?jump=276" target="_blank">
      <img src="./media/2.png" class="card-img-top img-fluid" alt="..." id="source">
      <div class="card-body">
        <h5 class="card-title" style="font-family: STXinwei;font-weight: bold;">UPDATE</h5>
        <p class="card-text">What have been the latest updates to the game? Click here to learn more.</p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Card2"
  }
</script>

<style scoped>

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform:  scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

a {
    text-decoration: none;
    color: #000000;
  }

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