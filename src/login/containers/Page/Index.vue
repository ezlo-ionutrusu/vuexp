<template>
  <Page :actionBarHidden="true">
    <StackLayout>
      <VxpLabel text="Please login to continue" class="label" />
 
      <VxpLabel text="Username" class="label margin_top_10" />
      <TextField v-model="username" hint="Your username" />
      
      <VxpLabel text="Password" class="label margin_top_10" />
      <TextField v-model="password" hint="Your password" />
      
      <VxpCheckbox class="margin_top_10" />

      <VxpButton text="Login" @tap="doLogin" class="margin_top_10" />

      <VxpLabel :text="authLabelText" class="label margin_top_10" />

    </StackLayout>
  </Page>
</template>

<script>

import commonMixins from "@/mixins/common";
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      username: "",
      password: "",
      authLabelText: "",
      isAuth: false
    }
  },
  computed: {
    ...mapGetters([
      'auth/getAuthStatus',
    ])
  },
  mixins: [commonMixins],
  components: {
    "list-component": () => import("@/devices/components/List/Index"),
    "switch-component": () => import("@/devices/components/Switcher/Index"),
    "websocket-component": () => import("@/devices/components/WebSocket/Index")
  },
  mounted(){
    if (this["auth/getAuthStatus"]){
      this.isAuth = this["auth/getAuthStatus"];
    }
  },
  methods: {
    doLogin(){
      if (this.username === "" || this.password === ""){

        this.authLabelText = "Please provide proper credentials";
        setTimeout( () => {
          this.authLabelText = "";
        }, 3 * 1000);

      } else {

        this.authLabelText = "Authenticated";

        setTimeout( () => {
          this.$store.dispatch('auth/setAuthStatus', true);
          this.redirectTo("/home");
        }, 3 * 1000);

      }
    }
  }
};
</script>

<style>
.margin_top_10 {
  margin-top: 10pt;
}
</style>
