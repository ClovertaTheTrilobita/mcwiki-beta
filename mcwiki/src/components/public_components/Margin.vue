<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#/home">
      <img src="./icons/Minecraft_logo.png" class="mb-1 img_title">
    </a>
  </nav>
</template>

<script>

export default {
  name: "Margin",
  methods: {
    SearchPushed() {
      window.location.href = "#/search"
    }
  }
}

</script>

<style>

.img_title {
  width: 30px;
  height: 24px;
  margin-left: 12px;
}

</style>
