import Vue from "vue";
import App from "~/App.vue";
import store from "./vuex/store";
import router from "./router";
import registerComponents from "./componentRegisterer";

Vue.config.productionTip = false;

registerComponents(Vue);

new Vue({
  store,
  router,
  components: { App },
  render: h => h(App)
}).$mount("#app");
