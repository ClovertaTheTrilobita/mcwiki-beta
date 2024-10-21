<template>
  <div class="card mb-3 mx-2" style="background-color: #F6FFF8;">
    <a href="https://www.minecraft.net/" target="_blank">
      <img src="./images/1.png" class="card-img-top img-fluid" alt="..." id="source">
      <div class="card-body">
        <h5 class="card-title" style="font-family: STXinwei;font-weight: bold;">OFFICAL WEBSITE</h5>
        <p class="card-text" style="font-family: Georgia, 'Times New Roman', Times, serif; color:gray">If you want to browse more game information, click here to open the Minecraft official website.</p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Card1"
  }
</script>

<style scoped>

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-body{
  background-color: white;
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