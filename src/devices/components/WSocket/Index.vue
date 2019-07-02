<template>
  <StackLayout class="mt-20">
    <VxpButton :text="'Connect to websocket'" @tap="connectToWebSocket()" />
    <VxpLabel :text="resultOfWebSocket" class="mt-10" />
    <VxpLabel :text="responseWebSocket" class="mt-10" />
    <VxpLabel :text="responseTime" class="mt-10" />
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
  require("nativescript-websockets");
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
    },
    responseTime() {
      return this.timeDiff;
    }
  },
  data() {
    return {
      statusWebSocket: false,
      socketData: null,
      responseSocketData: null,
      timeDiff: null
    };
  },
  methods: {
    getRnd() {
      return Math.random(1, 1111111).toString();
    },
    connectToWebSocketNative() {
      var t1, t2;
      var mySocket = new WebSocket("ws://echo.websocket.org", [
        /* "protocol","another protocol" */
      ]);
      mySocket.addEventListener("open", evt => {
        this.socketData = this.getRnd();
        this.statusWebSocket = true;
        t1 = Date.now();
        evt.target.send(this.socketData);
      });
      mySocket.addEventListener("message", evt => {
        this.responseSocketData = evt.data;
        t2 = Date.now();
        this.timeDiff = `Package received in  ${Math.floor(t2 - t1) /
          1000} seconds`;
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
      if (this.$socket) {
        const rnd = this.getRnd();
        this.socketData = rnd;
        this.statusWebSocket = true;
        const t1 = Date.now();
        this.$socket.send(rnd);
        this.$options.sockets.onmessage = socketData => {
          const { data } = socketData;
          this.responseSocketData = data;
          const t2 = Date.now();
          this.timeDiff = `Package received in  ${Math.floor(t2 - t1) /
            1000} seconds`;
        };
      }
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
