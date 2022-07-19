<template>
  <div>
    <!-- 顶部模块 -->
    <vheader></vheader>

    <!-- banner -->
    <section class="banner">
      <img src="/images/dynamic_details_banner.png" alt="" />
    </section>

    <!-- 浏览量模块 -->
    <div class="visitor">
      <span class="visitor_left">{{ $t("H_Ceate_in") }}2018.8.29</span>
      <span class="visitor_right">{{ $t("H_page_view") }}:598</span>
    </div>

    <!-- 内容模块 -->
    <div class="content">
      <div class="top">
        <img src="/images/dynamic_details_text_top_img.png" alt="" />
      </div>

      <div class="middle">
        <p>
          {{ $t("H_DY_text") }}
        </p>
      </div>

      <div class="bottom">
        <a href="">{{ $t("H_DY_last") }}<br /></a>
        <a href="">{{ $t("H_DY_next") }}</a>
      </div>
    </div>

    <!-- 热门新闻模块 -->
    <div class="new">
      <div class="new-title">
        <div class="bor"></div>
        <h4>{{ $t("H_DY_News") }}</h4>
      </div>

      <div class="new-content">
        <div class="content-top">
          <div class="top-left">
            <p>26</p>
            <span>2018.08</span>
          </div>
          <div class="top-right">
            <p>{{ $t("H_Alipay_faceSwiping") }}</p>
            <span class="sp">{{ $t("H_Alipay_faceSwiping_introduct1") }}</span>
          </div>
        </div>

        <div class="content-bottom">
          <div class="bottom-left"><a href="">{{ $t("H_Detail") }}</a></div>
          <div class="bottom-right">
            <a href=""><img src="/images/right_arrow.png" alt="" /></a>
          </div>
        </div>
      </div>

      <div class="new-content">
        <div class="content-top">
          <div class="top-left">
            <p>25</p>
            <span>2018.08</span>
          </div>
          <div class="top-right">
            <p>{{ $t("H_Alipay_faceSwiping") }}</p>
            <span class="sp">{{ $t("H_Alipay_faceSwiping_introduct1") }}</span>
          </div>
        </div>

        <div class="content-bottom">
          <div class="bottom-left"><a href="">{{ $t("H_Detail") }}</a></div>
          <div class="bottom-right">
            <a href=""><img src="/images/right_arrow.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>

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

<style src="@/assets/css/dynamic_details.css" scoped>

</style>