<template>
  <StackLayout>
    <VxpButton :text="'Connect to websocket'" @tap="connectToWebSocket()" />
    <VxpLabel :text="resultOfWebSocket" />
  </StackLayout>
</template>
<script>
export default {
  computed: {
    resultOfWebSocket() {
      return this.statusWebSocket ? "Connected" : "Offline";
    }
  },
  data() {
    return {
      statusWebSocket: false
    };
  },
  methods: {
    connectToWebSocket() {
      console.log(true);
    }
  }
};
</script>
