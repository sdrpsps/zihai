<template>
  <div>
    <!-- 顶部模块 -->
    <vheader></vheader>
    <!-- 侧边栏模块 -->
    <div class="side">
      <aside>
        <a href="#">
          <img src="/images/aside_call.png" alt="" />
        </a>
        <a href="#">
          <img src="/images/aside_top.png" alt="" />
        </a>
      </aside>
    </div>
    <div class="container">
      <div class="intro">
        <div class="title">
          <h3>公司环境</h3>
          <h5>Company environment</h5>
          <hr />
          <article>
            {{ $t("y_environment_article") }}
          </article>
        </div>
      </div>
    </div>

    <div class="pics container">
      <img src="/images/company_environment_show01.png" alt="" />
    </div>
    <div class="pics container">
      <img src="/images/company_environment_show02.png" alt="" />
    </div>
    <div class="pics container">
      <img src="/images/company_environment_show03.png" alt="" />
    </div>
    <div class="pics last container">
      <img src="/images/company_environment_show04.png" alt="" />
    </div>
    <!-- 底部模块 -->
    <vfooterHd></vfooterHd>
    <!-- 底部导航栏模块 -->
    <vfooterNav></vfooterNav>
  </div>
</template>

<script>
import vheader from "@/components/header/header.vue";
import vfooterNav from "@/components/footer/footerNav.vue";
import vfooterHd from "@/components/footer/footerHd.vue";
import vaside from "@/components/aside/aside.vue";
export default {
  name: "CompanyEnvironment",
  data() {
    return {};
  },
  components: {
    vfooterNav,
    vfooterHd,
    vheader,
    vaside,
  },
};
</script>

<style  src='@/assets/css/reset.css' scoped>
</style>
<style  src='@/assets/css/company_environment.css' scoped>
</style>
<style  src='@/assets/css/nomal.css' scoped>
</style>