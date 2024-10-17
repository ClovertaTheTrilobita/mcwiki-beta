<template>
  <!-- <input  type="file" id="files" ref="refFile" v-on:change="importCsv"> -->
  <!-- <li v-for="data in users">{{ data }}</li> -->
  <!-- <div class="d-flex justify-content-center" style="width: 50rem;" id="headers">
    <h1 style="text-align: left; font-family: STHupo; font-size: 4em;">Search results</h1>
  </div> -->

  <!-- <div v-for="data in users" class="d-flex justify-content-center" id="searchresult">
    <div class="card center-block" style="width: 80rem;">
      <div class="col-md-4">
        <img src="../pic/3.jpg" alt="..." class="w-100">
      </div>
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h4 class="card-title">{{ data }}</h4>
        <p class="card-text" style="color: grey; ">{{ data }}'s breaf intro.</p>
        <a href="#" class="btn btn-success">Take a look</a>

      </div>
    </div>
    <br>
  </div> -->

   <div v-for="data in search" class="d-flex justify-content-center" id="searchresult" >
    <div class="card" style="width: 80rem;">
      <div class="row g-0">
        <div class="col-sm-2">
          <div style="font-size: 70%;">
            <img src="..\images\Minecraft_logo.png" alt="..." class="w-100">
          </div>

        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">{{ data.Entry }}</h5>
            <p class="card-text" style="color: grey; ">
              {{ data.Text }}......
            </p>
            <a href="#" class="btn btn-success" style="">Take a look</a>
            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <!-- <div v-for="sea in search" style="background-color: aqua;">
    <p>SeachInput:</p>
    <p>{{ sea }}</p>
  </div> -->
</template>

<script >
export default {
  name: 'SearchList',
  components: {},
  props: {
    search: {
      type: Object,
      required: true
    },
  },
  methods: {

  },
}
</script>

<style scoped>
#searchresult {
  margin-top: 10px;
}

#headers {
  margin-top: 10px;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 0.3s;
  animation-name: fade;
  animation-duration: 0.3s;
}
@-webkit-keyframes fade {
  from {opacity: 0.2; transform: translateY(70%);} 
  to {opacity: 1; transform: translateY(0%);}
}
@keyframes fade {
  from {opacity: 0.2; transform: translateY(70%);} 
  to {opacity: 1; transform: translateY(0%);}
}



.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-title {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgb(32, 119, 112);
}
</style>