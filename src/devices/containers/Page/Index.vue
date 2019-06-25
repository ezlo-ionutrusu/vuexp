<template>
  <Page :actionBarHidden="true">
    <StackLayout>
      <VxpLabel text="Devices page" />
      <switch-component />
      <list-component :items="['Js', 'Css', 'Html', 'Php']" />
    </StackLayout>
  </Page>
</template>
<script>
import commonMixins from "@/mixins/common";
export default {
  mixins: [commonMixins],
  components: {
    "list-component": () => import("@/devices/components/List/Index"),
    "switch-component": () => import("@/devices/components/Switcher/Index")
  }
};
</script>
