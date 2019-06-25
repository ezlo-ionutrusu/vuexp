<template>
  <Page :actionBarHidden="true">
    <StackLayout>
      <Label text="Main Page" class="label" />
    </StackLayout>
  </Page>
</template>
<script>
import commonMixins from "@/mixins/common";
export default {
  mixins: [commonMixins]
};
</script>
