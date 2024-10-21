<template>
  <div class="card mb-3 mx-2" style="background-color: #F6FFF8;">
    <a href="https://www.mcmod.cn/class/version/1.html?jump=276" target="_blank">
      <img src="./images/2.png" class="card-img-top img-fluid" alt="..." id="source">
      <div class="card-body">
        <h5 class="card-title" style="font-family: STXinwei;font-weight: bold;">UPDATE</h5>
        <p class="card-text" style="font-family: Georgia, 'Times New Roman', Times, serif;color:gray">What have been the latest updates to the game? Click here to learn more and download them.</p>
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
