<template>
  <Page>
    <StackLayout>
      <VxpLabel text="Devices page" />
      <VxpButton text="goToMain" @tap="redirectTo('/')" />
      <list-component />
    </StackLayout>
  </Page>
</template>
<script>
import commonMixins from "@/mixins/common";
export default {
  mixins: [commonMixins],
  components: {
    "list-component": () => import("@/devices/components/List/Index")
  }
};
</script>
