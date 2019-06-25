<template>
  <Page :actionBarHidden="true">
    <StackLayout>
      <Label
        text="This is an main page"
        :textWrap="true"
        horizontalAlignment="center"
        verticalAlignment="center"
      />
    </StackLayout>
  </Page>
</template>
<script>
import commonMixins from "@/mixins/common";
export default {
  mixins: [commonMixins]
};
</script>
