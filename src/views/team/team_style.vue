<template>
  <div>
    <!-- 顶部模块 -->

    <vheader></vheader>

    <section class="content">
      <section class="banner">
        <img src="/images/team_style_banner.png" alt="" />
      </section>

      <div class="tdfc">
        <h2 class="title">
          {{ $t("y_team_style") }}
          <span class="subtitle">Team demeanor</span>
        </h2>
        <p>
{{ $t("y_team_article") }}
        </p>
      </div>
      <div class="whzh">
        <div class="left-wh">
          <h3>武汉资海</h3>
          <span>WUHAN ZIHAI</span>
        </div>
        <div class="right-wh">
          <img src="/images/team_style_show01.png" alt="" />
        </div>
      </div>
      <div class="nczh">
        <div class="left-nc">
          <img src="/images/team_style_show02.png" alt="" />
        </div>
        <div class="right-nc">
          <h3>南昌资海</h3>
          <span>PingFang</span>
        </div>
      </div>
      <div class="whzh">
        <div class="left-wh">
          <h3>武汉资海</h3>
          <span>WUHAN ZIHAI</span>
        </div>
        <div class="right-wh">
          <img src="/images/team_style_show03.png" alt="" />
        </div>
      </div>
      <div class="nczh">
        <div class="left-nc">
          <img src="/images/team_style_show04.png" alt="" />
        </div>
        <div class="right-nc">
          <h3>南昌资海</h3>
          <span>PingFang</span>
        </div>
      </div>
      <div class="whzh">
        <div class="left-wh">
          <h3>武汉资海</h3>
          <span>WUHAN ZIHAI</span>
        </div>
        <div class="right-wh">
          <img src="/images/team_style_show01.png" alt="" />
        </div>
      </div>
      <div class="nczh">
        <div class="left-nc">
          <img src="/images/team_style_show02.png" alt="" />
        </div>
        <div class="right-nc">
          <h3>南昌资海</h3>
          <span>PingFang</span>
        </div>
      </div>

      <div class="more-team">{{ $t("y_team_moreTeam") }}</div>
    </section>

    <!-- 侧边栏模块 -->
    <vaside></vaside>

    <!-- 底部模块 -->
    <vfooter-hd></vfooter-hd>
    <vfooter-nav></vfooter-nav>
  </div>
</template>

<script>
import vheader from "@/components/header/header.vue";
import vfooterNav from "@/components/footer/footerNav.vue";
import vfooterHd from "@/components/footer/footerHd.vue";
import vaside from "@/components/aside/aside.vue";

export default {
  name: "ZihaiDynamics",
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

<style src="@/assets/css/team_style.css" scoped>

</style>