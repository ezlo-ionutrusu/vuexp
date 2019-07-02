import Vue from "vue";
import App from "~/App.vue";
import store from "./vuex/store";
import router from "./router";
import registerComponents from "./componentRegisterer";
import RepoComponent from "repo-component";

Vue.config.productionTip = false;
Vue.use(RepoComponent);

registerComponents(Vue);

new Vue({
  store,
  router,
  components: { App },
  render: h => h(App)
}).$mount("#app");
