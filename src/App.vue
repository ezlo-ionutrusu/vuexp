<template web>
  <Frame>
    <Page :actionBarHidden="false">
      <ActionBar title="Vuexp-App" />
      <GridLayout columns="auto, *" rows="*, *">
        <StackLayout
          row="0"
          col="0"
          class="left-side"
          v-if="handleMenuVisibility"
        >
          <Button text="Main" @tap="redirectTo('/home')" />
          <Button text="Devices" @tap="redirectTo('/devices')" />
          <Button text="Logout" @tap="doLogout()" />
        </StackLayout>
        <StackLayout orientation="horizontal" row="0" col="1">
          <WrapLayout>
            <router-view dock="center" class="router-class" />
          </WrapLayout>
        </StackLayout>
      </GridLayout>
    </Page>
  </Frame>
</template>

<template native>
  <Frame>
    <Page :actionBarHidden="false">
      <ActionBar title="Vuexp-App" />
      <StackLayout orientation="vertical">
        <StackLayout :visibility="handleMenuVisibility">
          <Button text="Main" @tap="redirectTo('/home')" />
          <Button text="Devices" @tap="redirectTo('/devices')" />
          <Button text="Logout" @tap="doLogout()" />
        </StackLayout>
        <router-view class="router-class" />
      </StackLayout>
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

<style lang="scss">
@import "styles/index.scss";
</style>
