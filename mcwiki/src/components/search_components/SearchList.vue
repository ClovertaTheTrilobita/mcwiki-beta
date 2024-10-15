<template>
  <!-- <input  type="file" id="files" ref="refFile" v-on:change="importCsv"> -->
  <li v-for="data in users">{{data}}</li>
</template>

<script scoped>

export default {
  name: 'SearchList',
  components: {},
  methods: {},
  props:{
	    users:{           //这个就是父组件中子标签自定义名字
	      type: Array,
	      required:true
	    }
	  }
}



</script>

<style scoped>

</style>