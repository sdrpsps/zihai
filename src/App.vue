<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created(){
    // 第一次打开页面时，如果cookie里面没有language值，写入zh
    if(localStorage.getItem("language") == null){
      localStorage.setItem("language", "zh");
    }
  }
}
</script>

<style lang="less">

</style>
