<template>
  <div class="card mb-3 mx-2">
    <a href="https://mod.3dmgame.com/summary/1192" target="_blank">
      <img src="./media/3.png" class="card-img-top img-fluid" alt="..." id="source">
      <div class="card-body">
        <h5 class="card-title" style="font-family: STXinwei;font-weight: bold;">MATERIAL PACK</h5>
        <p class="card-text" style="font-family: Georgia, 'Times New Roman', Times, serif;color:gray">Click here to download the Material pack to make your world more personal and beautiful.</p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Card3"
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

--#{$prefix}card-spacer-y: #{$card-spacer-y};
--#{$prefix}card-spacer-x: #{$card-spacer-x};
--#{$prefix}card-title-spacer-y: #{$card-title-spacer-y};
--#{$prefix}card-title-color: #{$card-title-color};
--#{$prefix}card-subtitle-color: #{$card-subtitle-color};
--#{$prefix}card-border-width: #{$card-border-width};
--#{$prefix}card-border-color: #{$card-border-color};
--#{$prefix}card-border-radius: #{$card-border-radius};
--#{$prefix}card-box-shadow: #{$card-box-shadow};
--#{$prefix}card-inner-border-radius: #{$card-inner-border-radius};
--#{$prefix}card-cap-padding-y: #{$card-cap-padding-y};
--#{$prefix}card-cap-padding-x: #{$card-cap-padding-x};
--#{$prefix}card-cap-bg: #{$card-cap-bg};
--#{$prefix}card-cap-color: #{$card-cap-color};
--#{$prefix}card-height: #{$card-height};
--#{$prefix}card-color: #{$card-color};
--#{$prefix}card-bg: #{$card-bg};
--#{$prefix}card-img-overlay-padding: #{$card-img-overlay-padding};
--#{$prefix}card-group-margin: #{$card-group-margin};

-->