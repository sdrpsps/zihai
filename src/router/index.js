import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/index/index.vue";
import HomeDaili from "@/views/index/index_daili.vue";
import Details from "@/views/details/details.vue";
import Detail from "@/views/details/detail.vue";
import CompanyEnvironment from "@/views/envirment/company_environment.vue";
import ZihaiDynamics from "@/views/dynamics/zihai_dynamics.vue";
import CompanyProfile from "@/views/profile/company_profile.vue";
import ContactUs from "@/views/contact/contact_us.vue";
import Nav from "@/views/nav/nav.vue";
import CooperativePartner from "@/views/partner/cooperative_partner.vue";
import DynamiDetails from "@/views/dynamics/dynamic_details.vue";
import CompanyQualification from "@/views/qualification/company_qualification.vue";
import TeamStyle from "@/views/team/team_style.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "资海网络集团-首页",
      needAuth: false,
    },
  },
  {
    path: "/index",
    name: "index",
    component: Home,
    meta: {
      title: "资海网络集团-首页",
      needAuth: false,
    },
  },
  {
    path: "/index_daili",
    name: "home_daili",
    component: HomeDaili,
    meta: {
      title: "资海网络集团-首页",
      needAuth: false,
    },
  },
  {
    path: "/nav",
    name: "nav",
    component: Nav,
    meta: {
      title: "资海网络集团-导航栏",
      needAuth: false,
    },
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail,
    meta: {
      title: "方案详情",
      needAuth: false,
    },
  },
  {
    path: "/details",
    name: "details",
    component: Details,
    meta: {
      title: "方案详情",
      needAuth: false,
    },
  },
  {
    path: "/company_environment",
    name: "company_environment",
    component: CompanyEnvironment,
    meta: {
      title: "关于资海",
      needAuth: false,
    },
  },
  {
    path: "/zihai_dynamics",
    name: "zihai_dynamics",
    component: ZihaiDynamics,
    meta: {
      title: "资海动态",
      needAuth: false,
    },
  },
  {
    path: "/company_profile",
    name: "company_profile",
    component: CompanyProfile,
    meta: {
      title: "公司简介",
      needAuth: false,
    },
  },
  {
    path: "/contact_us",
    name: "contact_us",
    component: ContactUs,
    meta: {
      title: "联系我们",
      needAuth: false,
    },
  },
  {
    path: "/cooperative_partner",
    name: "cooperative_partner",
    component: CooperativePartner,
    meta: {
      title: "合作伙伴",
      needAuth: false,
    },
  },
  {
    path: "/dynamic_details",
    name: "dynamic_details",
    component: DynamiDetails,
    meta: {
      title: "动态详情",
      needAuth: false,
    },
  },
  {
    path: "/company_qualification",
    name: "company_qualification",
    component: CompanyQualification,
    meta: {
      title: "公司资质",
      needAuth: false,
    },
  },
  {
    path: "/team_style",
    name: "team_style",
    component: TeamStyle,
    meta: {
      title: "团队风采",
      needAuth: false,
    },
  },
];

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  let { title } = to.meta;
  if (to.hash == "#height") {
  } else if (to.hash == "#daili") {
  } else {
    window.scrollTo(0, 0);
  }
  next();
  document.title = title;
});

export default router;
