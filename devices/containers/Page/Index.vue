<template>
  <Page>
    <StackLayout>
      <VxpLabel text="Devices page" />
      <VxpButton text="goToMain" @tap="redirectTo('/')" />
    </StackLayout>
  </Page>
</template>
<script>
import commonMixins from "@/mixins/common";
export default {
  mixins: [commonMixins]
};
</script>
