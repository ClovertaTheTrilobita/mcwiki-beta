<template>
  <!-- <input  type="file" id="files" ref="refFile" v-on:change="importCsv"> -->
  <!-- <li v-for="data in users">{{ data }}</li> -->
  <div class="d-flex justify-content-center" style="width: 50rem;" id="headers">
    <h1 style="text-align: left; font-family: STHupo; font-size: 4em;">Search results</h1>
  </div>

  <div v-for="data in users" class="d-flex justify-content-center" id="searchresult">
    <div class="card center-block" style="width: 80rem;">
      <!-- <div class="col-md-4">
        <img src="../pic/3.jpg" alt="..." class="w-100">
      </div> -->
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h4 class="card-title">{{ data }}</h4>
        <p class="card-text" style="color: grey; ">{{ data }}'s breaf intro.</p>
        <a href="#" class="btn btn-success">Take a look</a>

      </div>
    </div>
    <br>
  </div>

  <!-- <div v-for="data in users" class="d-flex justify-content-center" id="searchresult">
    <div class="card" style="max-width: 80rem;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../pic/3.jpg" alt="..." class="w-100">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{data}}</h5>
            <p class="card-text">
              春夏秋冬皆自然,明月清风共我闲,有春风拂面的温柔,也有美好故事的发生,又一个春天如约而至,温柔的朝阳里布谷鸟声声呼唤,愿普天同安康,迎接春天到来的简...
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script scoped>

export default {
  name: 'SearchList',
  components: {},
  methods: {},
  props: {
    users: {           //这个就是父组件中子标签自定义名字
      type: Array,
      required: true
    }
  }
}



</script>

<style scoped>
#searchresult {
  margin-top: 10px;
}

#headers {
  margin-top: 10px;
}

.card-body {
  /* background-color: rgb(217, 217, 217); */
  /* background-color: rgb(247, 250, 255); */
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-title {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgb(32, 119, 112);
}
</style>