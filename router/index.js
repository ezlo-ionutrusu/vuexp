import MainPage from "@/main/containers/Page/Index";
import DevicePage from "@/devices/containers/Page/Index";

const routerOptions = {
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: MainPage
    },
    {
      path: "/devices",
      component: DevicePage
    }
  ]
};

export default routerOptions;
