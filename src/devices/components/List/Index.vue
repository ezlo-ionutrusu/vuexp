<template web>
  <section>
    <ul>
      <li v-for="(item, index) in languages" :key="index">{{ item }}</li>
    </ul>
  </section>
</template>
<template native>
  <StackLayout>
    <VxpListView :items="languages">
      <v-template>
        <Label :text="item" />
      </v-template>
    </VxpListView>
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {
      languages: ["Javascript", "Angular", "React", "C#", "Php", "HTML"]
    };
  }
};
</script>
