<template web>
  <StackLayout>
    <TextField
      v-model="componentName"
      hint="Component Name, Button, TextField"
    />
    <component v-if="componentInstance !== null" :is="componentInstance" />
    <user-name :userName="'Some name from git'" />
  </StackLayout>
</template>
<template native>
  <StackLayout>
    <TextField
      v-model="componentName"
      hint="Component Name, Button, TextField"
    />
    <component v-if="componentInstance !== null" :is="componentInstance" />
  </StackLayout>
</template>

<script>
export default {
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
      componentName: null
    };
  }
};
</script>

<style></style>
