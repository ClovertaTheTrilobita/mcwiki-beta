<template>
  <input  type="file" id="files" ref="refFile" v-on:change="importCsv">
</template>

<script scoped>
import { parse } from 'papaparse';
import { encoding } from 'jschardet';

export default {
  name: 'SearchList',
  components: {},
  methods: {
    importCsv(){
        let selectedFile = null
        selectedFile = this.$refs.refFile.files[0];
        if (selectedFile === undefined){
          return
        }
        var reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = evt => {
          // 检查编码
          // let encoding = this.checkEncoding(evt.target.result);
          // 将csv转换成二维数组
          parse(selectedFile, {
            encoding:encoding,
            complete: res => {
              // UTF8 \r\n与\n混用时有可能会出问题
              let data = res.data;
              if (data[data.length - 1] == "") {
                //去除最后的空行
                data.pop();
              }
              console.log(data);  // data就是文件里面的数据
            }
          });
        };
      },
      checkEncoding(base64Str) {
        // 这种方式得到的是一种二进制串
        var str = atob(base64Str.split(';base64,')[1])
        // console.log(str);
        // 要用二进制格式
        const jschardet = require("jschardet");
        var encoding = jschardet.detect(str)
        encoding = encoding.encoding
        // console.log( encoding );
        if (encoding === 'windows-1252') {	// 有时会识别错误（如UTF8的中文二字）
          encoding = 'ANSI'
        }
        return encoding
      },
  },
  	/**
	  * by 王佳伟
	  * 2020年6月17日08:42:11
	  */
    

}



</script>

<style scoped>

</style>