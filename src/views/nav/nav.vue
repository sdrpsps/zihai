<template>
  <div>
    <!-- 导航栏 -->
    <div class="nav">
      <div class="nav-top">
        <a href="javascript:;" @click="goto('/index')">x</a>
      </div>
      <div class="nav-middle">
        <a href="javascript:;" @click="goto('/index')"><b>首页</b></a>
      </div>
      <div class="nav-middle">
        <a href="javascript:;" @click="goto('/company_environment')"
          ><b>关于资海</b></a
        >
        <div></div>
      </div>
      <div class="nav-middle">
        <a href="javascript:;" @click="toguid"><b>高端定制</b></a>
        <div></div>
      </div>
      <div class="nav-middle">
        <a href="javascript:;" @click="goto('/details')"><b>解决方案</b></a>
        <div></div>
      </div>
      <div class="nav-middle">
        <a href="javascript:;" @click="toguid2"><b>案例展示</b></a>
      </div>
      <div class="nav-middle">
        <a href="javascript:;" @click="goto('/contact_us')"><b>联系我们</b></a>
      </div>
      <span>服务热线</span>
      <span class="span1">400-650-5024</span>
    </div>
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
              <span>网站建设</span>
            </div>
            <div>
              <img src="images/home_appkf.png" alt="" />
              <span>APP开发</span>
            </div>
            <div>
              <img src="images/home_xcx.png" alt="" />
              <span>小程序</span>
            </div>
          </div>
          <div class="function-all container">
            <div>
              <img src="images/home_wxyx.png" alt="" />
              <span>微信营销</span>
            </div>
            <div>
              <img src="images/home_dyy.png" alt="" />
              <span>代运营</span>
            </div>
            <div>
              <img src="images/home_idcyw.png" alt="" />
              <span>IDC业务</span>
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
          <b>资海网络科技集团股份有限公司</b>
          <span>中 国 专 业 企 业 信 息 化 服 务 商</span>
        </div>
        <div class="map_middle">
          <div class="container">
            <div>
              <b>18</b>
              <span>全国近18分公司</span>
            </div>
            <div>
              <b>1300</b>
              <span>1300余名员工</span>
            </div>
            <div>
              <b>30000</b>
              <span>3万余家客户的选择</span>
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
          <b>全部</b>
          <b>企业集团</b>
          <b>建筑家居</b>
          <b>医疗教育</b>
          <b>餐饮食品</b>
          <div></div>
        </div>
      </div>
      <!-- 广告模块 -->
      <div class="guanggao">
        <img src="images/home_car.png" alt="" />
      </div>
      <div class="publish">
        <div class="container">
          <b>湖北勇志印刷设计有限公司</b>
          <span>出版、印刷</span>
          <span class="span1">PC网站/移动端开发</span>
        </div>
      </div>
      <div class="kongbai"></div>
      <div class="guanggao">
        <img src="images/home_phone.png" alt="" />
      </div>
      <div class="publish">
        <div class="container">
          <b>湖北勇志印刷设计有限公司</b>
          <span>出版、印刷</span>
          <span class="span1">PC网站/移动端开发</span>
        </div>
      </div>
      <div class="kongbai"></div>
      <div class="guanggao">
        <img src="images/home_book.png" alt="" />
      </div>
      <div class="publish">
        <div class="container">
          <b>湖北勇志印刷设计有限公司</b>
          <span>出版、印刷</span>
          <span class="span1">PC网站/移动端开发</span>
        </div>
      </div>
      <div class="kongbai"></div>
      <!-- 进入案例库模块 -->
      <div class="enter">
        <a href="programme_details.html#more">进入案例库</a>
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
          <b>支付宝刷脸支付启动商业化</b>
          <p>
            去年9月1日，支付宝在肯德基的KPRO餐厅上线 <br />
            刷付，不用手机，通过刷脸即可支付......
          </p>
        </div>
      </div>
      <div class="riqi">
        <b>26</b>
        <span>2018.08</span>
        <a href="dynamic_details.html">
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
        <a href="cooperative_partner.html">
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
    return {
      path: "/detail",
      id: "hight",
      id2:"more",
    };
  },
  components: {
    vfooterNav,
    vfooterHd,
    vheader,
    vaside,
  },
  methods: {
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
    // 锚点跳转
    toguid2() {
      let Path = this.path;
      let Id = this.id2;
      localStorage.setItem("toId", Id);
      this.$router.push(Path);
    },
  },
};
</script>

<style src="@/assets/css/reset.css" scoped>
</style>
<style src="@/assets/css/home.css" scoped>
</style>
<style src="@/assets/css/common.css" scoped>
</style>
<style src="@/assets/css/nav.css" scoped>
</style>