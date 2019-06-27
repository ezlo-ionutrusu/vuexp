<template>
  <StackLayout>
    <TextField
      v-model="componentName"
      hint="Component Name, Button, TextField"
    />
    <componennt v-if="componentInstance !== null" :is="componentInstance" />
    <user-pop :user="userData" :main="'Component from git'" />
    <MyComponent />
  </StackLayout>
</template>

<script>
import externalComponent from "@/utils/external-component";
const MyComponent = () => externalComponent("http://localhost:8081/test.js");
export default {
  components: {
    MyComponent
  },
  computed: {
    componentInstance() {
      const { componentName } = this;
      if (componentName && componentName.trim().length > 0) {
        return () => import(`@/main/components/bundles/${componentName}/Index`);
      }
      return null;
    }
  },
  data() {
    return {
      componentName: null,
      userData: {
        name: "Neo Ighodaro",
        username: "neoighodaro",
        email: "neo@gmail.com",
        profile: {
          profile_image:
            "https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg"
        }
      }
    };
  }
};
</script>

<style></style>
