import Vue from "nativescript-vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store";
import registerComponents from "./componentRegisterer.native";

// Set the following to `true` to hide the logs created by nativescript-vue
Vue.config.silent = false;
// Set the following to `false` to not colorize the logs created by nativescript-vue
// disabled in template due to typing issue for Typescript projects....NEEDS TO BE FIXED
// Vue.config.debug = true;

registerComponents(Vue);

new Vue({
  store,
  router,
  components: { App },
  render: h => h(App)
}).$start();
