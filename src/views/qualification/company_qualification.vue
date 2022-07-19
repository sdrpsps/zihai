<template>
  <div>
    <!-- 顶部模块 -->
    <vheader></vheader>

    <section class="content">
      <div class="banner">
        <img src="/images/company_qualification_banner.png" alt="" />
      </div>
      <div class="cerd-list">
        <a href="#" class="active-item">{{ $t("H_Tencent_Authorization") }}</a>
        <a href="#">{{ $t("H_IDC") }}</a>
        <a href="#">{{ $t("H_Multiple") }}</a>
        <a href="#">{{ $t("H_Other_certificates") }}</a>
      </div>
      <div class="sqs-list">
        <li>
          <img src="/images/company_qualification_certificate01.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
        <li>
          <img src="/images/company_qualification_certificate02.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
        <li>
          <img src="/images/company_qualification_certificate03.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
        <li>
          <img src="/images/company_qualification_certificate01.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
        <li>
          <img src="/images/company_qualification_certificate02.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
        <li>
          <img src="/images/company_qualification_certificate03.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
        <li>
          <img src="/images/company_qualification_certificate01.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
        <li>
          <img src="/images/company_qualification_certificate02.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
        <li>
          <img src="/images/company_qualification_certificate03.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
        <li>
          <img src="/images/company_qualification_certificate01.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
        <li>
          <img src="/images/company_qualification_certificate02.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
        <li>
          <img src="/images/company_qualification_certificate03.png" alt="" />
          <span>{{ $t("H_Tencent_Authorization") }}</span>
        </li>
      </div>
      <a href="javascript:" @click="goto('/team_style')">
        <div class="more-team">{{ $t("H_more_news") }}</div>
      </a>
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
  methods:{
    goto(address){
      this.$router.push(address);
    }
  }
};
</script>


<style src="@/assets/css/company_qualification.css" scoped>

</style>