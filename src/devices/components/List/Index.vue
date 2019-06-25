<template web>
  <section v-if="!!items">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="itemTap(item, index)"
      >
        <div class="text">{{ item }}</div>
      </li>
    </ul>
  </section>
</template>
<template native>
  <StackLayout orientation="horizontal" v-if="!!items">
    <ListView
      for="(item, index) in items"
      @itemTap="({ item, index }) => itemTap(item, index)"
    >
      <v-template>
        <StackLayout>
          <Label :text="item" />
        </StackLayout>
      </v-template>
    </ListView>
  </StackLayout>
</template>
<script>
export default {
  name: "list",
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    itemTap(item, index) {
      this.$emit("onItemTap", item, index);
    }
  }
};
</script>
