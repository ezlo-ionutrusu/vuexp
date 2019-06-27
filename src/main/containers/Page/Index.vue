<template>
  <Page :actionBarHidden="true">
    <StackLayout>
      <Label text="Main Page" class="label" />
      <custom-component />
    </StackLayout>
  </Page>
</template>
<script>
import commonMixins from "@/mixins/common";
export default {
  mixins: [commonMixins],
  components: {
    "custom-component": () => import("@/main/components/CustomComponent/Index")
  }
};
</script>
