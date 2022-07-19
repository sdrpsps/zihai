<template>
  <div>
    <!-- 顶部模块 -->
    <vheader></vheader>

    <!-- 侧边栏模块 -->
    <vaside></vaside>

    <!-- 网站建设解决方案模块 -->
    <div class="solution">
      <div class="solution-hd">
        <h3>{{ $t("l_solution") }}</h3>
        <span>{{ $t("l_pc") }}</span>
      </div>
      <div class="solution-bd container">
        <h3>{{ $t("l_informationsea") }}</h3>
        <p class="container">
          {{ $t("l_informationseaContent") }}
        </p>
      </div>
    </div>

    <!-- 我们的服务模块 -->
    <div class="our_service">
      <div class="serv-hd">{{ $t("l_services") }}</div>
      <div class="serv-bd container">
        <div class="bd-box">
          <h4>{{ $t("l_Interactive") }}</h4>
          <p>{{ $t("l_Interactives") }}</p>
        </div>
        <div class="bd-box">
          <h4>{{ $t("l_page") }}</h4>
          <p>{{ $t("l_pages") }}</p>
        </div>
        <div class="bd-box">
          <h4>{{ $t("l_front") }}</h4>
          <p>{{ $t("l_fronts") }}</p>
        </div>
        <div class="bd-box">
          <h4>{{ $t("l_program") }}</h4>
          <p>{{ $t("l_programs") }}</p>
        </div>
        <div class="bd-box">
          <h4>{{ $t("l_later") }}</h4>
          <p>{{ $t("l_laters") }}</p>
        </div>
      </div>
    </div>

    <!-- 解决案例模块 -->
    <div class="solve_case">
      <div class="sc-hd">
        <h3>{{ $t("l_Website") }}</h3>
      </div>
      <div class="sc-bd"></div>
    </div>

    <!-- 高端定制流程模块 -->
    <div class="high-end-custom">
      <div class="hec-hd">
        <a id="hight"></a>
        {{ $t("l_high_end") }}
      </div>
      <div class="hec-bd container">
        <div class="function-requir">
          <img src="images/programme_details_process.png" alt="" />
        </div>
        <div class="making">
          <div class="web-making">{{ $t("l_Websitets") }}</div>
          <div class="front-end-making">{{ $t("l_Front_endpagemaking") }}</div>
        </div>
      </div>
    </div>

    <!-- 更多案例模块 -->
    <div class="more-case">
      <div class="case-hd">
        <a id="more"></a>
        {{ $t("l_Morecase") }}
      </div>
      <div class="case-bd container">
        <div>
          <img src="images/programme_details_case01.png" alt="" />
          <h3>{{ $t("l_Yongprinting") }}</h3>
          <span>{{ $t("l_Publishingprinting") }}</span>
        </div>
        <div>
          <img src="images/programme_details_case02.png" alt="" />
          <h3>{{ $t("l_Yongprinting") }}</h3>
          <span>{{ $t("l_Publishingprinting") }}</span>
        </div>
        <div>
          <img src="images/programme_details_case03.png" alt="" />
          <h3>{{ $t("l_Yongprinting") }}</h3>
          <span>{{ $t("l_Publishingprinting") }}</span>
        </div>
        <div>
          <img src="images/programme_details_case04.png" alt="" />
          <h3>{{ $t("l_Yongprinting") }}</h3>
          <span>{{ $t("l_Publishingprinting") }}</span>
        </div>
      </div>
      <div class="case-button">
        <div>{{ $t("l_Accessthecaselibrary") }}</div>
      </div>
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
  data() {
    return {};
  },

  methods: {},
  //用完后记得将存储的锚点置空，否则会影响其他页面跳转到当前页面
  components: {
    vfooterNav,
    vfooterHd,
    vheader,
    vaside,
  },
};
</script>



<style src="@/assets/css/programme_details.css"  scoped>
</style>