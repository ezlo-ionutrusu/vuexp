<template>
  <StackLayout>
    <VxpButton :text="'Connect to websocket'" @tap="connectToWebSocket()" />
    <VxpLabel :text="resultOfWebSocket" />
    <VxpLabel :text="responseWebSocket" />
  </StackLayout>
</template>
<script>
import Vue from "vue";
import VueNativeSock from "vue-native-websocket";

if (process.env.VUE_APP_PLATFORM === "web") {
  Vue.use(VueNativeSock, "wss://echo.websocket.org", {
    reconnection: true,
    reconnectionAttempts: 5000,
    reconnectionDelay: 300
  });
} else {
  console.log(true);
  const WS = require("nativescript-websockets");
}
export default {
  computed: {
    resultOfWebSocket() {
      return this.statusWebSocket ? ">: Connected" : ">: Offline";
    },
    responseWebSocket() {
      if (this.socketData)
        return `Sent ${this.socketData} receveied ${this.responseSocketData}`;
      return "";
    }
  },
  data() {
    return {
      statusWebSocket: false,
      socketData: null,
      responseSocketData: null
    };
  },
  methods: {
    getRnd() {
      return Math.random(1, 1111111).toString();
    },
    connectToWebSocketNative() {
      const _this = this;
      var mySocket = new WebSocket("ws://echo.websocket.org", [
        /* "protocol","another protocol" */
      ]);
      mySocket.addEventListener("open", evt => {
        this.socketData = this.getRnd();
        this.statusWebSocket = true;
        evt.target.send(this.socketData);
      });
      mySocket.addEventListener("message", evt => {
        this.responseSocketData = evt.data;
        evt.target.close();
      });
      mySocket.addEventListener("close", function(evt) {
        console.log("The Socket was Closed:", evt.code, evt.reason);
      });
      mySocket.addEventListener("error", function(evt) {
        console.log("The socket had an error", evt.error);
      });
    },
    connectToWebSocketWeb() {
      const rnd = this.getRnd();
      this.socketData = rnd;
      this.statusWebSocket = true;
      this.$socket.send(rnd);
      this.$options.sockets.onmessage = socketData => {
        const { data } = socketData;
        this.responseSocketData = data;
      };
    },
    connectToWebSocket() {
      if (process.env.VUE_APP_PLATFORM === "web") {
        this.connectToWebSocketWeb();
        return;
      }
      this.connectToWebSocketNative();
    }
  }
};
</script>
