import Vue from "vue";
import Vuex from "vuex";
import VuexpRouter from "vuexp-router";
import store from "../vuex/store/index";

Vue.use(Vuex);
Vue.use(VuexpRouter);

import MainPage from "@/main/containers/Page/Index";
import DevicePage from "@/devices/containers/Page/Index";
import LoginPage from "@/login/containers/Page/Index";

const routerOptions = {
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: LoginPage
    },
    {
      path: "/login",
      component: LoginPage
    },
    {
      path: "/home",
      component: MainPage
    },
    {
      path: "/devices",
      component: DevicePage
    }
  ]
};

const router = new VuexpRouter(routerOptions);
export default router;

router.beforeEach(async (to, from, next) => {
  if (!store.getters["auth/getAuthStatus"] && to.path !== "/login") {
    return next("/login");
  }
  next();
});
