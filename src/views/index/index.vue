<template>
  <div class="home">
    <!-- 顶部模块 -->
    <vheader></vheader>
    <!-- banner模块 -->
    <div class="banner">
      <img src="images/home_banner.png" alt="" />
    </div>
    <!-- 功能模块 -->
    <div class="function">
      <div class="container">
        <div class="function-all container">
          <div>
            <img src="images/home_wzjs.png" alt="" />
            <span>{{ $t("H_website_building") }}</span>
          </div>
          <div>
            <img src="images/home_appkf.png" alt="" />
            <span>{{ $t("H_APP_develop") }}</span>
          </div>
          <div>
            <img src="images/home_xcx.png" alt="" />
            <span>{{ $t("H_mini_program") }}</span>
          </div>
        </div>
        <div class="function-all container">
          <div>
            <img src="images/home_wxyx.png" alt="" />
            <span>{{ $t("H_WeChat_marketing") }}</span>
          </div>
          <div>
            <img src="images/home_dyy.png" alt="" />
            <span>{{ $t("H_thirdpartnar") }}</span>
          </div>
          <div>
            <img src="images/home_idcyw.png" alt="" />
            <span>{{ $t("H_IDC_business") }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 代理业务模块 -->
    <div class="our_product">
      <a id="daili"></a>
      <b>代理业务</b>
      <span>Our product</span>
      <div class="xian1"></div>
      <div class="xian2"></div>
    </div>
    <!-- 腾讯产品 -->
    <div class="tencent">
      <div>
        <img src="images/home_tx.png" alt="" />
        <b>腾讯企业产品</b>
        <span>TENCENT PRODUCTS</span>
      </div>
      <div>
        <img src="images/home_baidu.png" alt="" />
        <b>腾讯企业产品</b>
        <span>TENCENT PRODUCTS</span>
      </div>
      <div>
        <img src="images/home_yiqixiu@2x.png" alt="" />
        <b>腾讯企业产品</b>
        <span>TENCENT PRODUCTS</span>
      </div>
      <div>
        <img src="images/home_aliyun.png" alt="" />
        <b>腾讯企业产品</b>
        <span>TENCENT PRODUCTS</span>
      </div>
      <div>
        <img src="images/home_zb.png" alt="" />
        <b>腾讯企业产品</b>
        <span>TENCENT PRODUCTS</span>
      </div>
      <div>
        <img src="images/home_wx.png" alt="" />
        <b>腾讯企业产品</b>
        <span>TENCENT PRODUCTS</span>
      </div>
    </div>
    <!-- 地图模块 -->
    <div class="map">
      <div class="map_top">
        <b>{{ $t("H_Company_name") }}</b>
        <span>{{ $t("H_Company_introduce") }}</span>
      </div>
      <div class="map_middle">
        <div class="container">
          <div>
            <b>18</b>
            <span>{{ $t("H_eighteen") }}</span>
          </div>
          <div>
            <b>1300</b>
            <span>{{ $t("H_thirdteenHunder") }}</span>
          </div>
          <div>
            <b>30000</b>
            <span>{{ $t("H_thridW") }}</span>
          </div>
        </div>
      </div>
      <div class="map_bottom">
        <img src="images/home_map.png" alt="" />
      </div>
    </div>
    <!-- 我们的案例模块 -->
    <div class="our_product anli">
      <b>我们的案例</b>
      <span>Our case</span>
      <div class="xian1"></div>
      <div class="xian2"></div>
    </div>
    <!-- 全部导航模块 -->
    <div class="quanbu">
      <div class="container">
        <b>{{ $t("H_all") }}</b>
        <b>{{ $t("H_enterprise_group") }}</b>
        <b>{{ $t("H_Building_furniture") }}</b>
        <b>{{ $t("H_medical_education") }}</b>
        <b>{{ $t("H_food") }}</b>
        <div></div>
      </div>
    </div>
    <!-- 广告模块 -->
    <div class="guanggao">
      <img src="images/home_car.png" alt="" />
    </div>
    <div class="publish">
      <div class="container">
        <b>{{ $t("H_Company_Name1") }}</b>
        <span>{{ $t("H_Publishing_printing") }}</span>
        <span class="span1">{{ $t("H_PC_mobile") }}</span>
      </div>
    </div>
    <div class="kongbai"></div>
    <div class="guanggao">
      <img src="images/home_phone.png" alt="" />
    </div>
    <div class="publish">
      <div class="container">
        <b>{{ $t("H_Company_Name1") }}</b>
        <span>{{ $t("H_Publishing_printing") }}</span>
        <span class="span1">{{ $t("H_PC_mobile") }}</span>
      </div>
    </div>
    <div class="kongbai"></div>
    <div class="guanggao">
      <img src="images/home_book.png" alt="" />
    </div>
    <div class="publish">
      <div class="container">
        <b>{{ $t("H_Company_Name1") }}</b>
        <span>{{ $t("H_Publishing_printing") }}</span>
        <span class="span1">{{ $t("H_PC_mobile") }}</span>
      </div>
    </div>
    <div class="kongbai"></div>
    <!-- 进入案例库模块 -->
    <div class="enter">
      <a href="javascript:;">{{ $t("H_Access_library") }}</a>
    </div>
    <!-- 新闻咨询模块 -->
    <div class="our_product xingwen">
      <b>新闻咨询</b>
      <span>News</span>
      <div class="xian1"></div>
      <div class="xian2"></div>
    </div>
    <!-- 支付宝模块 -->
    <div class="zhifubao">
      <img src="images/home_swiper01.png" alt="" />
      <div class="container">
        <b>{{ $t("H_Alipay_faceSwiping") }}</b>
        <p>
          {{ $t("H_Alipay_faceSwiping_introduct1") }} <br />
          {{ $t("H_Alipay_faceSwiping_introduct2") }}
        </p>
      </div>
    </div>
    <div class="riqi">
      <b>26</b>
      <span>2018.08</span>
      <a href="javascript:;" @click="goto('/dynamic_details')">
        <img src="/images/right_arrow.png" alt="" />
      </a>
    </div>
    <div class="yuandian">
      <div>
        <span class="lvse"></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- 合作伙伴模块 -->
    <div class="our_product hezuo">
      <a href="javascript:;" @click="goto('/cooperative_partner')">
        <b>合作伙伴</b>
        <span>Cooperative</span>
        <div class="xian1"></div>
        <div class="xian2"></div>
      </a>
    </div>
    <div class="zuihou">
      <img src="images/end_icon01.png" alt="" />
      <img src="images/end_icon02.png" alt="" />
      <img src="images/end_icon03.png" alt="" />
      <img src="images/end_icon04.png" alt="" />
      <img src="images/end_icon05.png" alt="" />
      <img src="images/end_icon06.png" alt="" />
      <img src="images/end_icon07.png" alt="" />
      <img src="images/end_icon08.png" alt="" />
      <img src="images/end_icon09.png" alt="" />
    </div>
    <!-- 侧边栏模块 -->
    <vaside></vaside>
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
  name: "home",
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



<style lang="css" scoped>
@import "@/assets/css/reset.css";
</style>

<style src="@/assets/css/home.css" scoped>
</style>
<style src="@/assets/css/common.css" scoped>
</style>