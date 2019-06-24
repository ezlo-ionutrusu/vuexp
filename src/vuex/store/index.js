import Vue from "vue";
import Vuex from "vuex";

// actions, mutations, state and getters from main module
import main from "@/main/vuex/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    main
  },
  strict: true
});
global.store = store;
export default store;
