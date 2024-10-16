<template>
  <div>
    <!-- <users v-bind:users="users"></users> -->
     <SearchList/>
  </div>
</template>

<script>
import SearchList from '../search_components/SearchList.vue';

export default {
  name: "SearchIndex",
  data() {
    return {
      users: ["Rocks", "Biome", "Blocks"],
      update: true
    }
  },
  components: {
    SearchList
  },
  methods: {
    reload() {
      this.update = false;
      this.$nextTick(() => {
        this.update = true
      })
    }
  }


}
</script>

<style scoped></style>