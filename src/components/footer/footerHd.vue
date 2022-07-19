<template>
  <!-- 底部模块 -->
  <div class="footerHD">
    <div class="container">
      <div class="footer_hd">
        <li>
          <a href="javascript:;" @click="goto('zihai_dynamics')"> {{ $t("H_zihai_infomation") }} </a>
        </li>
        <li>
          <a href="javascript:;" @click="toguid"> {{ $t("H_agent_service") }} </a>
        </li>
        <li>
          <a href="javascript:;" @click="goto('company_profile')"> {{ $t("H_brand") }} </a>
        </li>
        <li>
          <a href="javascript:;" @click="goto('contact_us')"> {{ $t("H_contactUs") }} </a>
        </li>
      </div>
      <div class="copyright">
        123 ©copyright:2016-2017 www.bfnic.cn 版权所有<br />
        鄂字备 23010402000047号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "/index_daili",
      id: "daili",
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
  },
};
</script>

<style>
</style>