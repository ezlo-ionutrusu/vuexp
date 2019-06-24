<template>
  <Page>
    <StackLayout>
      <Label text="Main Page" />
      <VxpButton text="goToDevices" @tap="redirectTo('/devices')" />
    </StackLayout>
  </Page>
</template>
<script>
import commonMixins from "@/mixins/common";
export default {
  mixins: [commonMixins],
  data() {
    return {
      value: false,
      textViewInput: "",
      currentProgress: 49,
      maxValueProgress: 100
    };
  }
};
</script>
