<template>
  <div class="d-flex justify-content-center">
    <form class="d-flex" role="search" style="width: 50dvh; height: 45px;" onsubmit="return false;">
      <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search" clearable id="myInput1"
        ref="myInput1">
      <button class="btn btn-success" type="button" @click="SearchPushed">
        Search</button>
    </form>
  </div>
  <div>
    <search v-bind:search="search" ref="search" v-if="refresh"></search>
  </div>
  <!-- <div>
    <button @click="CheckData">check</button>
  </div> -->
</template>

<script>
import SearchList from '../search_components/SearchList.vue';
import Entry from '../../data/entry.json'
import AllData from '../../data/sum/AllData.json'

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
      users: ["Rocks", "Biome", "Blocks"],
      update: true,
      refresh: true,
      search: [],
      Entry,
      AllData
    }
  },
  components: {
    "search": SearchList
  },
  setup() {

  },
  methods: {
    SearchPushed() {
      //console.log(Entry)
      let searchcontent = document.getElementById("myInput1").value;
      console.log("Searched: " + searchcontent)
      let searchresult = []; var j = 0;
      console.log(AllData[0])
      var text = ['a', 'b', 'c', 'd', 'a', 'a']
      // for (var i = 0; i < AllData.length; i++) {
      //   if (AllData[i].Entry == searchcontent) {
      //     searchresult[j] = AllData[i];
      //     j++;
      //   }
      // }
      searchresult = this.BFSearch(searchcontent, AllData)
      this.search = searchresult
      console.log("Search received: " + searchcontent)
      console.log("Search result: ")
      console.log(this.search)
      this.refresh = false
      this.$nextTick(() => {
        // 2. 再调用子组件的方法使用该属性
        // 如果不使用 nextTick的话，子组件方法内获取到的有可能是这次赋值之前的值，下次调用时才能获取到此次赋值的值（应该是跟 Vue的异步事件队列有关系）
        this.refresh = true
      })
    },

    CheckData() {
      console.log(this.datasent)
    },

    BFSearch(searchcontent, searchdata) {
      var l = 0; var searchresult = []; var flag = new Boolean(false);
      console.log("Starting search.")
      
      for (var i = 0; i < searchdata.length; i++) {
        for (var k = 0; k < searchdata[i].Entry.length; k++) {
          flag = false;
          for (var j = 0; j < searchcontent.length; j++) {
            if (searchcontent[j] == searchdata[i].Entry[k + j]) {
              flag = true;
              console.log("flag:" + flag)
              continue;
              //console.log(searchcontent[j]+ "==" + AllData[i].Text[k])
            } else {
              flag = false;
              break;
            }
          }
          if (flag) {
            console.log("Got:")

            searchresult[l] = searchdata[i];
            console.log(searchresult[l])
            l++;
            break;
          }
        }

      }
      return searchresult;
    }
  }


}
</script>

<style scoped>
.d-flex {
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>