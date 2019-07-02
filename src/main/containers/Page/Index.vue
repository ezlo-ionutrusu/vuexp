<template>
  <Page :actionBarHidden="true">
    <StackLayout>
      <Label text="Main Page" class="label" />
      <custom-component />
      <TabView
        @selectedIndexChanged="indexChange"
        @selectedIndexChange="indexChange"
        class="mt-10"
      >
        <TabViewItem title="La Liga" id="la-liga">
          <StackLayout>
            <Label text="Barcelona" />
            <Label text="Atletico Madrid" />
            <Label text="Real Madrid" />
          </StackLayout>
        </TabViewItem>
        <TabViewItem title="Premier League" id="premier">
          <StackLayout>
            <Label text="Liverpool" />
            <Label text="Man. City" />
            <Label text="Chelsea" />
          </StackLayout>
        </TabViewItem>
      </TabView>
    </StackLayout>
  </Page>
</template>
<script>
import commonMixins from "@/mixins/common";
export default {
  mixins: [commonMixins],
  components: {
    "custom-component": () => import("@/main/components/CustomComponent/Index")
  },
  methods: {
    indexChange(args) {
      if (process.env.VUE_APP_PLATFORM === "web") {
        const { id } = args;
        console.log(id);
      } else {
        let newIndex = args.value;
        console.log("Current tab index: " + newIndex);
      }
    }
  }
};
</script>
