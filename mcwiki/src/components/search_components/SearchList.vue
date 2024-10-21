<template>
  <div v-for="data in search" class="d-flex justify-content-center" id="searchresult">
    <div class="card" style="width: 80rem;">
      <div class="row g-0">
        <div class="col-sm-2 justify-content-center">
          <div style="font-size: 70%;">
            <img :src="data.Image" alt="img" style="height: 180px;" class="w-90 justify-content-center">
          </div>

        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">{{ data.Entry }}</h5>
            <p class="card-text" style="color: grey; ">
              {{ data.Text }}......
            </p>
            <a :href="'#/' + data.Entry" class="btn btn-success" style="" target="_blank">Take a look</a>
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

<script>

export default {
  name: 'SearchList',
  components: {},
  props: {
    search: {
      type: Object,
      required: true
    },
  },
  data() {
    return {

    };
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
  from {
    opacity: 0.2;
    transform: translateY(70%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fade {
  from {
    opacity: 0.2;
    transform: translateY(70%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
}



.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-title {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgb(32, 119, 112);
}
</style>