<template>
  <Page :actionBarHidden="true" margin="10">
    <DockLayout :stretchLastChild="true">
      <StackLayout dock="top">
        <VxpButton text="Main" @tap="redirectTo('/')" class="vxbutton" />
        <VxpButton
          text="Devices"
          @tap="redirectTo('/devices')"
          class="vxbutton"
        />
      </StackLayout>
      <router-view dock="center" />
    </DockLayout>
  </Page>
</template>
<script>
import commonMixins from "@/mixins/common";
export default {
  mixins: [commonMixins]
};
</script>
<style lang="scss">
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
