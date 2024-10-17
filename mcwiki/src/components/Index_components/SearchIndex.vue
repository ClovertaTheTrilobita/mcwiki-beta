<template>
  <div>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" clearable id="myInput1"
        ref="myInput1">
      <button class="btn btn-outline-success" type="submit" @click="SearchPushed">Search</button>
    </form>
  </div>
  <div>
    <search v-bind:search="search" ref="search" v-if="refresh"></search>
  </div>
</template>

<script>
import SearchList from '../search_components/SearchList.vue';

export default {
  name: "SearchIndex",
  data() {
    return {
      users: ["Rocks", "Biome", "Blocks"],
      update: true,
      refresh: true,
      search: []
    }
  },
  components: {
    "search": SearchList
  },
  methods: {
    SearchPushed() {
      let searchcontent = document.getElementById("myInput1").value;
      console.log("Searched: " + searchcontent)
      let searchresult = []; var j = 0;
      var text = ['a', 'b', 'c', 'd', 'a', 'a']
      for (var i = 0; i < text.length; i++) {
        if (text[i] == searchcontent) {
          searchresult[j] = text[i];
          j++;
        }
      }
      this.search = searchresult
      console.log("Search received: " + searchcontent)
      for (var i = 0; i < searchresult.length; i++) {
        console.log("Search result: " + this.search)
      }
      this.refresh = false
      this.$nextTick(() => {
        // 2. 再调用子组件的方法使用该属性
        // 如果不使用 nextTick的话，子组件方法内获取到的有可能是这次赋值之前的值，下次调用时才能获取到此次赋值的值（应该是跟 Vue的异步事件队列有关系）
        this.refresh = true
      })
    },
  }


}
</script>

<style scoped></style>