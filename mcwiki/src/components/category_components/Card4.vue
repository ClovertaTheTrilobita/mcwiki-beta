<template>
  <div class="card mb-3 mx-2" style="background-color: #F6FFF8;">
    <a href="https://mc.163.com/fab/" target="_blank">
      <img src="./images/4.png" class="card-img-top img-fluid" alt="..." id="source">
      <div class="card-body">
        <h5 class="card-title" style="font-family: STXinwei;font-weight: bold;">CN WEBSITE</h5>
        <p class="card-text" style="font-family: Georgia, 'Times New Roman', Times, serif;color:gray">This is a website
          provided by Minecraft China agent NetEase. Click to find out more.</p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Card4"
  }
</script>

<style scoped>

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

a {
  text-decoration: none;
  color: #000000;
}

.card-body{
  background-color: white;
}

</style>