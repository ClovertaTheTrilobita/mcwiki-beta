<template>
  <div class="container mt-1">
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" role="tablist" style="--bs-nav-link-color: #48af3a; --bs-nav-link-hover-color: #69cf5c;">
        <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" aria-current="true" href="#home">原版介绍</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu1">原版资料</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu2">更新日志</a>
          </li>
        </ul>
      </div>
      <div class="card-body" style="text-align: left;">
        <div class="tab-content">
          <div id="home" class="container tab-pane active show"> 
            <div class="row row-cols-2 row-cols-lg-4">
              <div class="col"><Card/></div>
              <div class="col"><Card/></div>
              <div class="col"><Card/></div>
              <div class="col"><Card/></div>
              <div class="col"><Card/></div>
              <div class="col"><Card/></div>
              <div class="col"><Card/></div>
              <div class="col"><Card/></div>
              <div class="col"><Card/></div>
            </div>
          </div>
          <div id="menu1" class="container tab-pane">
            <h5>HelloWorld</h5>
          </div>
          <div id="menu2" class="container tab-pane">
            <h4>Hello</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './Card.vue';
  import placeHolders from './placeHolders.vue';
  export default {
    name: "tabsCard",
    components: {
      Card,
      placeHolders,
    }
  }
</script>

<style>
</style>