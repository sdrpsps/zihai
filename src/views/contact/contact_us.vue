<template>
  <div>
    <!-- 顶部模块 -->
    <vheader></vheader>

    <!-- banner模块 -->
    <div class="banner">
      <img src="/images/contact_us_banner.png" alt="" />
    </div>

    <!-- nav模块 -->
    <nav class="nav container">
      <a href="" class="item active">{{$t("l_wuhan")}}</a>
      <a href="" class="item">{{ $t("l_nanchang") }}</a>
      <a href="" class="item">{{ $t("l_xiangmen") }}</a>
      <a href="" class="item">{{ $t("l_shanghai") }}</a>
      <a href="" class="item">{{ $t("l_chengdu") }}</a>
    </nav>

    <!-- 地图模块 -->
    <div class="map container">
      <img src="/images/contact_us_map.png" alt="" />
    </div>

    <!-- 地址信息模块 -->
    <div class="map_msg container">
      <li class="item">
        <div class="msg_left">
          <img src="/images/contact_us_map_icon01.png" alt="" />
        </div>
        <div class="msg_right">
          <h4>{{ $t("l_address") }}</h4>
          <p>{{ $t("l_hubeisheng") }}</p>
        </div>
      </li>
      <li class="item">
        <div class="msg_left">
          <img src="/images/contact_us_map_icon02.png" alt="" />
        </div>
        <div class="msg_right">
          <h4>{{ $t("l_phone") }}</h4>
          <p>{{ $t("l_serivce") }}</p>
        </div>
      </li>
      <li class="item">
        <div class="msg_left">
          <img src="/images/contact_us_map_icon03.png" alt="" />
        </div>
        <div class="msg_right">
          <h4>{{ $t("l_em") }}</h4>
          <p>zdys@163.com</p>
        </div>
      </li>
    </div>

    <!-- 联系模块 -->
    <div class="contact container">
      <div class="top">
        <div class="hr">———</div>
        <div class="contact_you">
          <h3>{{ $t("l_contactyou") }}</h3>
          <p>Let's contact you</p>
        </div>
        <div class="hr">———</div>
      </div>

      <form action="" class="bottom">
        <input type="text" class="item" placeholder="请填写您的姓名" />
        <input type="text" class="item" placeholder="请填写您的联系方式" />
        <select class="item">
          <option value="企业网站建设">{{ $t("l_EWc") }}</option>
        </select>
        <input type="text" class="item" placeholder="请填写您的邮箱" />
        <textarea placeholder="请填写您的邮箱"></textarea>
        <div class="btn-center"><button class="btn">{{ $t("l_submisson") }}</button></div>
      </form>
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

<style src="@/assets/css/contact_us.css" scoped>
</style>