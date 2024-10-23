<template>

  <div class="d-flex justify-content-center">
    <form class="d-flex" role="search" style="width: 50dvh; height: 45px;">
      <input class="form-control me-2" placeholder="Search" aria-label="Search" clearable id="myInput1" ref="myInput1">
      <button class="btn btn-success" type="submit" @click="SearchPushed">
        Search</button>
    </form>
  </div>
  <div>
    <search v-bind:search="search" ref="search" v-if="refresh"></search>
  </div>

</template>

<script>
import SearchList from '../search_components/SearchList.vue';
import AllDataFinal from '../../data/Summary/AllDataFinal.json'

export default {

  name: "SearchIndex",

  props: {
    datasent: {
      type: Array,
      required: true
    },
  },

  data() {
    return {
      refresh: true,
      search: [],
      AllDataFinal
    }
  },

  components: {
    "search": SearchList
  },

  setup() {

  },

  methods: {
    SearchPushed() {
      let searchcontent = document.getElementById("myInput1").value;
      console.log("Searched: " + searchcontent)
      this.search = this.BFSearch(searchcontent, AllDataFinal);
      console.log("Search result: ")
      console.log(this.search)

      this.refresh = false
      this.$nextTick(() => {
        this.refresh = true
      })
    },

    BFSearch(searchcontent1, searchdata1) {
      console.log("Search received: " + searchcontent1);
      var l = 0; var searchresult = []; var flag = new Boolean(false);
      console.log("Starting search.");
      var searchcontent = searchcontent1.toLowerCase();

      for (var i = 0; i < searchdata1.length; i++) {  // BF Search
        var searchdata = searchdata1[i].Entry.toLowerCase();
        for (var k = 0; k < searchdata.length; k++) {
          flag = false;
          for (var j = 0; j < searchcontent.length; j++) {
            if (searchcontent[j] == searchdata[k + j]) {
              flag = true;
              console.log("flag:" + flag);
              continue;
            } else {
              flag = false;
              break;
            }
          }

          if (flag) {
            console.log("Got:");
            searchresult[l] = searchdata1[i];
            console.log(searchresult[l]);
            l++;
            break;
          }
        }
      }
      return searchresult;
    },
  }
}
</script>

<style scoped>
.d-flex {
  margin-top: 30px;
  margin-bottom: 20px;
}

.form-control:focus {
  border-color: rgba(108, 177, 99, 0.25);
  box-shadow: 0 0 0 0.25rem rgba(108, 177, 99, 0.25);
}
</style>