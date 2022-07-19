<template>
  <div>
    <!-- 顶部模块 -->
    <vheader></vheader>

    <!-- banner -->
    <div class="banner"></div>

    <!-- zihai Group -->
    <div class="aticle">
      <h2>Zihai Group</h2>
      <p>
        {{ $t("y_profile_zihai") }}
      </p>
    </div>

    <!-- banner-2 为什么选择我们？ -->
    <div class="banner-2">
      <h2>{{ $t("y_profile_why") }}</h2>
    </div>

    <!--四格排列-->
    <div class="container">
      <div class="items">
        <div class="item-box">
          <span class="icon"></span>
          <h4>{{ $t("y_profile_zihaigood") }}</h4>
          <p class="text">{{ $t("y_profile_zihaigood_reason") }}</p>
        </div>
        <div class="item-box">
          <span class="icon"></span>
          <h4>{{ $t("y_profile_techgood") }}</h4>
          <p class="text">{{ $t("y_profile_techgood_reason") }}</p>
        </div>
        <div class="item-box">
          <span class="icon"></span>
          <h4>{{ $t("y_profile_qualitygood") }}</h4>
          <p class="text">{{ $t("y_profile_qualitygood_reason") }}</p>
        </div>
        <div class="item-box">
          <span class="icon"></span>
          <h4>{{ $t("y_profile_servegood") }}</h4>
          <p class="text">{{ $t("y_profile_servegood_reason") }}</p>
        </div>
      </div>
    </div>

    <!-- 我们可以做的更多！ -->
    <div class="do-more">
      <h2>{{ $t("y_profile_canDoMore") }}</h2>
      <ul>
        <li>
          {{ $t("y_profile_canDoMore_r1") }}
        </li>
        <li>
          {{ $t("y_profile_canDoMore_r2") }}
        </li>
        <li>
          {{ $t("y_profile_canDoMore_r3") }}
        </li>
        <li>
          {{ $t("y_profile_canDoMore_r4") }}
        </li>
        <li>
          {{ $t("y_profile_canDoMore_r5") }}
        </li>
      </ul>
    </div>

    <!-- 打造全方位网络营销平台 -->
    <div class="text-3">
      <h2>{{$t("y_profile_allPlat")}}</h2>
      <ul>
        <li>
          <span class="icon"></span>
          <div class="text">{{$t("y_profile_allPlat_r1")}}</div>
        </li>
        <li>
          <span class="icon"></span>
          <div class="text">{{$t("y_profile_allPlat_r2")}}</div>
        </li>
        <li>
          <span class="icon"></span>
          <div class="text">{{$t("y_profile_allPlat_r3")}}</div>
        </li>
        <li>
          <span class="icon"></span>
          <div class="text">{{$t("y_profile_allPlat_r4")}}</div>
        </li>
      </ul>
    </div>

    <!-- 我们的历程 -->
    <div class="container">
      <h2>{{$t("y_profile_weRoad")}}</h2>
    </div>

    <div class="swiper">
      <img src="/images/company_profile_swiper01.png" alt="" />
      <h5>{{$t("y_profile_weBuild")}}</h5>
      <div class="year">2012</div>
    </div>

    <!-- 侧边栏模块 -->
    <vaside></vaside>
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

<style src="@/assets/css/company_profile.css" scoped>
</style>