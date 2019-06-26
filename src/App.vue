<template>
  <Frame>
    <Page :actionBarHidden="false" margin="10">
      <ActionBar title="Start here" />
      <DockLayout :stretchLastChild="true">
        <StackLayout orientation="horizontal">
          <StackLayout
            dock="top"
            :visibility="handleMenuVisibility"
            v-if="handleMenuVisibility"
          >
            <Button text="Main" @tap="redirectTo('/home')" class="vxbutton" />
            <Button
              text="Devices"
              @tap="redirectTo('/devices')"
              class="vxbutton"
            />
            <Button text="Logout" @tap="doLogout()" class="vxbutton" />
          </StackLayout>
          <router-view dock="center" />
        </StackLayout>
      </DockLayout>
    </Page>
  </Frame>
</template>

<script>
import commonMixins from "@/mixins/common";
import { mapGetters } from "vuex";

export default {
  mixins: [commonMixins],
  computed: {
    ...mapGetters(["auth/getAuthStatus"]),
    getAuthStatus() {
      return this["auth/getAuthStatus"];
    },
    handleMenuVisibility() {
      let status = this.getAuthStatus;
      let output = false;

      switch (process.env.VUE_APP_PLATFORM) {
        case "web":
          output = status;
          break;
        default:
          output = status === false ? "collapsed" : "visible";
          break;
      }

      return output;
    }
  },
  data() {
    return {};
  },
  methods: {
    doLogout() {
      setTimeout(() => {
        this.$store.dispatch("auth/setAuthStatus", false);
        this.redirectTo("/");
      }, 3 * 1000);
    }
  }
};
</script>

<style>
.label {
  font-size: 20px;
}
.vxbutton {
  border-radius: 0;
  margin-bottom: 10px;
}
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.vxp-dock-layout ul,
.vxp-dock-layout li {
  display: list-item;
}
</style>
