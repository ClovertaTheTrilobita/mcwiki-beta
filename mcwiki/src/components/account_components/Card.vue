<template>
  <div class="card mt-4 border-success" style="background-color: #F6FFF8;">
    <a :href="'#/' + title" target="_blank">
      <img :src="img_url" class="card-img-top img-fluid Card-img" alt="Image" id="source">
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <h5 class="card-text mb-2" style="font-weight: 100;">{{ text }}</h5>
      </div>
    </a>
  </div>
</template>

<script>

  export default {
    name: "Card",
    props: {
      img_url: String,
      title: String,
      text: String,
    }
  }

</script>

<style scoped>

.card{
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
