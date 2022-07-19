<template>
  <div>
    <vheader></vheader>
    <div class="container">
      <div class="banner">
        <div class="row">
          <div class="col-xs-12">
            <img src="/images/zihai_dynamics_banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="row">
          <div class="title col-xs-12">
            <p>26</p>
            <p>{{$t("y_dynamics_newsTitle")}}</p>
          </div>
          <div class="cont2 col-xs-12">
            <p>2018.08</p>
            <p>
              {{$t("y_dynamics_newsInfo")}}
            </p>
          </div>
          <div class="box col-xs-12"></div>
          <div class="tips col-xs-12">
            <div class="tip">
              <p>{{$t("y_dynamics_newsMore")}}</p>
              <a href="dynamic_details.html">
                <img src="/images/right_arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="title col-xs-12">
            <p>25</p>
            <p>{{$t("y_dynamics_newsTitle")}}</p>
          </div>
          <div class="cont2 col-xs-12">
            <p>2018.08</p>
            <p>
              {{$t("y_dynamics_newsInfo")}}
            </p>
          </div>
          <div class="box col-xs-12"></div>
          <div class="tips col-xs-12">
            <div class="tip">
              <p>{{$t("y_dynamics_newsMore")}}</p>
              <a href="dynamic_details.html">
                <img src="/images/right_arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="title col-xs-12">
            <p>22</p>
            <p>{{$t("y_dynamics_newsTitle")}}</p>
          </div>
          <div class="cont2 col-xs-12">
            <p>2018.08</p>
            <p>
              {{$t("y_dynamics_newsInfo")}}
            </p>
          </div>
          <div class="box col-xs-12"></div>
          <div class="tips col-xs-12">
            <div class="tip">
              <p>{{$t("y_dynamics_newsMore")}}</p>
              <a href="dynamic_details.html">
                <img src="/images/right_arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="title col-xs-12">
            <p>19</p>
            <p>{{$t("y_dynamics_newsTitle")}}</p>
          </div>
          <div class="cont2 col-xs-12">
            <p>2018.08</p>
            <p>
              {{$t("y_dynamics_newsInfo")}}
            </p>
          </div>
          <div class="box col-xs-12"></div>
          <div class="tips col-xs-12">
            <div class="tip">
              <p>{{$t("y_dynamics_newsMore")}}</p>
              <a href="dynamic_details.html">
                <img src="/images/right_arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="title col-xs-12">
            <p>19</p>
            <p>{{$t("y_dynamics_newsTitle")}}</p>
          </div>
          <div class="cont2 col-xs-12">
            <p>2018.08</p>
            <p>
              {{$t("y_dynamics_newsInfo")}}
            </p>
          </div>
          <div class="box col-xs-12"></div>
          <div class="tips col-xs-12">
            <div class="tip">
              <p>{{$t("y_dynamics_newsMore")}}</p>
              <a href="dynamic_details.html">
                <img src="/images/right_arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="title col-xs-12">
            <p>16</p>
            <p>{{$t("y_dynamics_newsTitle")}}</p>
          </div>
          <div class="cont2 col-xs-12">
            <p>2018.08</p>
            <p>
              {{$t("y_dynamics_newsInfo")}}
            </p>
          </div>
          <div class="box col-xs-12"></div>
          <div class="tips col-xs-12">
            <div class="tip">
              <p>{{$t("y_dynamics_newsMore")}}</p>
              <a href="dynamic_details.html">
                <img src="/images/right_arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 侧边栏模块 -->
    <vaside></vaside>
    <div class="tailbut container">
      <a href="javascript:;" @click="goto('/company_qualification')"><button>{{$t("y_dynamics_more")}}</button></a>
    </div>
    <!--底部链接部分-->
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
      this.$router.push(address)
    }
  }
};
</script>

<style  src='@/assets/css/zihai_dynamics.css' scoped>
</style>
<style src='@/assets/css/nomal.css' scoped>
</style>
<style src='@/assets/css/bootstrap.css' scoped>
</style>