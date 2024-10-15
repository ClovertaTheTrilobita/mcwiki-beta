<template>
  <div>
    <users v-bind:users="users"></users>
  </div>
</template>

<script>
import SearchList from '../search_components/SearchList.vue';

  export default{
    name: "SearchIndex",
    data(){
	    return{
	      users:["Henry","Bucky","Emily"]
	    }
	  },
	  components:{
	    "users":SearchList
	  },
    

  }
</script>

<style scoped>

</style>