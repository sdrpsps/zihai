<template>
  <!-- 底部导航栏模块 -->
  <div class="container footer-bot">
    <div class="footer_nav">
      <li>
        <a href="javascript:;" class="active" @click="goto('/')">
          <img src="/images/footer_icon01.png" alt="" />
          <span>{{$t("menu_home_page")}}</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="toguid">
          <img src="/images/footer_icon02.png" alt="" />
          <span>{{$t("high_end_custom")}}</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="goto('details')">
          <img src="/images/footer_icon03.png" alt="" />
          <span>{{$t("menu_solution")}}</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="goto('company_environment')">
          <img src="/images/footer_icon04.png" alt="" />
          <span>{{$t("menu_about")}}</span>
        </a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "/detail",
      id: "hight",
    };
  },
  methods: {
    // 普通跳转
    goto(address) {
      this.$router.push(address);
    },
    // 锚点跳转
    toguid() {
      let Path = this.path;
      let Id = this.id;
      localStorage.setItem("toId", Id);
      this.$router.push(Path);
    },
  }
};
</script>

<style>
</style>