<template>
  <!-- 顶部模块 -->
  <div class="container header-top">
    <header class="header">
      <div class="header_left">
        <h1>
          <a href="#"> 资海网络集团 </a>
        </h1>
        <i></i>
        <div class="stock_code">
          <span>{{ $t("index_stock") }}</span>
          <span>870835</span>
        </div>
      </div>
      <select v-model="language">
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
      <a href="javascript:;" class="header_right" @click="goto('nav')"></a>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "zh",
    };
  },
  created() {
    // this.setLanguage();
    this.language = localStorage.getItem("language");
    this.$i18n.locale = localStorage.getItem("language");
  },
  methods: {
    goto(address) {
      this.$router.push(address);
    },
  },
  watch: {
    language(newValue) {
      localStorage.setItem("language", newValue);
      this.$i18n.locale = localStorage.getItem("language");
    },
  },
};
</script>

<style>
</style>