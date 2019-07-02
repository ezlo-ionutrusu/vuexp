<template>
  <Page :actionBarHidden="true">
    <StackLayout>
      <switch-component />
      <list-component :items="['Js', 'Css', 'Html', 'Php']" />
      <ws-component />
    </StackLayout>
  </Page>
</template>
<script>
import commonMixins from "@/mixins/common";
export default {
  mixins: [commonMixins],
  components: {
    "list-component": () => import("@/devices/components/List/Index"),
    "switch-component": () => import("@/devices/components/Switcher/Index"),
    "ws-component": () => import("@/devices/components/WSocket/Index")
  }
};
</script>
