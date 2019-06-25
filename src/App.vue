<template>
  <Page :actionBarHidden="true">
    <DockLayout :stretchLastChild="true">
      <StackLayout dock="left">
        <VxpButton text="Main" @tap="redirectTo('/')" />
        <VxpButton text="Devices" @tap="redirectTo('/devices')" />
      </StackLayout>
      <router-view dock="right" />
    </DockLayout>
  </Page>
</template>
<script>
import commonMixins from "@/mixins/common";
export default {
  mixins: [commonMixins]
};
</script>
