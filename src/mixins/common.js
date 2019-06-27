import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["auth/getAuthStatus"])
  },
  methods: {
    checkValidation() {
      if (this["auth/getAuthStatus"]) {
        return true;
      }
      return false;
    },
    redirectTo(pageName) {
      if (process.env.VUE_APP_PLATFORM !== "web") {
        if (this.checkValidation() && !pageName.includes("login")) {
          return this.$router.push(pageName);
        }
        return this.$router.push("/login");
      }
      return this.$router.push(pageName);
    }
  }
};
