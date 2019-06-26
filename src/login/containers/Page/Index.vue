<template>
  <Page :actionBarHidden="true">
    <StackLayout>
      <VxpLabel text="Please login to continue" class="h1" />

      <VxpLabel text="Username" class="label mt-20" />
      <TextField v-model="username" hint="Your username" class="mt-5" />

      <VxpLabel text="Password" class="label mt-20" />
      <TextField v-model="password" hint="Your password" class="mt-5" />

      <StackLayout orientation="horizontal" class="mt-20">
        <VxpCheckbox class="margin_top_10" />
        <VxpLabel text="Remember me" class="ml-10" />
      </StackLayout>

      <VxpButton text="Login" @tap="doLogin" class="mt-20" />

      <VxpLabel :text="authLabelText" class="label mt-20" />
    </StackLayout>
  </Page>
</template>

<script>
import commonMixins from "@/mixins/common";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      authLabelText: "",
      isAuth: false
    };
  },
  computed: {
    ...mapGetters(["auth/getAuthStatus"])
  },
  mixins: [commonMixins],
  mounted() {
    if (this["auth/getAuthStatus"]) {
      this.isAuth = this["auth/getAuthStatus"];
    }
  },
  methods: {
    doLogin() {
      if (this.username === "" || this.password === "") {
        this.authLabelText = "Please provide proper credentials";
        setTimeout(() => {
          this.authLabelText = "";
        }, 3 * 1000);
      } else {
        this.authLabelText = "Authenticated";

        setTimeout(() => {
          this.$store.dispatch("auth/setAuthStatus", true);
          this.redirectTo("/home");
        }, 3 * 1000);
      }
    }
  }
};
</script>
