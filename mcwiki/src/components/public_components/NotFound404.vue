<template>

  <div class="notfound">
    <h2>404 Not Found</h2>
    <hr>
    <h4>Please check your URL for possible typos.</h4>
    <br><br>
    <img class='image' src="../images/Ghast.png" alt="img">
  </div>

</template>

<script>

export default {
  name: 'i404NotFound'
}

</script>

<style scoped>

.notfound {
  text-align: center;
  
  top: 200px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 750px;
}

.image {
  width: 100px;
}

</style>