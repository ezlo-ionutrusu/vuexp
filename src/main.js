import Vue from "vue";
import VuexpRouter from "vuexp-router";
import App from "~/App.vue";
import store from "./vuex/store";
import routerOptions from "./router";
import registerComponents from "./componentRegisterer";

Vue.config.productionTip = false;

registerComponents(Vue);
Vue.use(VuexpRouter);
const router = new VuexpRouter(routerOptions);

new Vue({
  store,
  router,
  components: { App },
  render: h => h(App)
}).$mount("#app");
