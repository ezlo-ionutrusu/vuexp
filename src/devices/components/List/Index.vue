<template>
  <VxpListView :items="itemList" :itemSelect="itemConditions">
    <v-template slot-scope="{ item }" slot="showIfStateFalse">
      <Label :text="item.text" />
    </v-template>

    <v-template slot-scope="{ item }" slot="showIfStateTrue">
      <Label :text="item.text" />
    </v-template>
  </VxpListView>
</template>

<script>
export default {
  name: "VxpLisxxtViewDoc",
  components: {
    "v-template": null
  },
  data() {
    return {
      itemList: [
        { text: "Item 1", state: true },
        { text: "Item 2", state: true },
        { text: "Item 3", state: false }
      ],
      itemConditions: {
        showIfStateTrue: "item.state === true",
        showIfStateFalse: "item.state === false"
      }
    };
  }
};
</script>
