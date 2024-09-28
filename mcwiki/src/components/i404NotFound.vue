<template>
  <div class="notfound">
    <h2>404 Not Found</h2>
    <hr>
    <h4>Please check your URL for possible typos.</h4>
    <br><br>
    <img class='image' src="../assets/Ghast.png" alt="img">
  </div>
  
</template>

<script>
  export default{
    name: 'i404NotFound'
  }
</script>

<style>
  .notfound{
    text-align: center;
    position: absolute;
            top: 100px;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
    width: 750px;
  }
  .image{
    width: 100px;
  }
</style>