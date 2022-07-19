<template>
  <div>
      <vheader></vheader>
      <!-- banner -->
    <div class="banner"></div>

    <!-- 内容部分 -->
    <div class="title">
        <h2>我们的客户</h2>
        <span>Our customers</span>
    </div>

    <!-- map -->
    <div class="map">
        <span class="text-1">{{$t("y_partner_map_m1")}}</span>
        <span class="text-2">{{$t("y_partner_map_m2")}}</span>
        <span class="text-3">{{$t("y_partner_map_m3")}}</span>
        <span class="text-4">{{$t("y_partner_map_m4")}}</span>
        <div class="title"> <span>{{$t("y_partner_map_Internet")}}</span>{{$t("y_partner_map_onestep")}}</div>
        <div class="icon-box items-1">
            <span class="icon"></span>
            <span class="icon-title">{{$t("y_partner_map_i1")}}</span>
        </div>
        <div class="icon-box items-2">
            <span class="icon"></span>
            <span class="icon-title">{{$t("y_partner_map_i2")}}</span>
        </div>
        <div class="icon-box items-3">
            <span class="icon"></span>
            <span class="icon-title">{{$t("y_partner_map_i3")}}</span>
        </div>
        <div class="icon-box items-4">
            <span class="icon"></span>
            <span class="icon-title">{{$t("y_partner_map_i4")}}</span>
        </div>
        <div class="icon-box items-5">
            <span class="icon"></span>
            <span class="icon-title">{{$t("y_partner_map_i5")}}</span>
        </div>
    </div>

    <!-- 合作伙伴 -->
    <div class="title partner">
        <h2>合作伙伴</h2>
        <span>Cooperative partner</span>
    </div>

    <!-- 图片列表 -->
    <div class="container">
        <ul class="pic-items">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
        </ul>
    </div>
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

<style src="@/assets/css/cooperative_partner.css" scoped>

</style>