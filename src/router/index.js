import MainPage from "@/main/containers/Page/Index";
import DevicePage from "@/devices/containers/Page/Index";
import LoginPage from "@/login/containers/Page/Index";
import LogoutPage from "@/logout/containers/Page/Index";

const routerOptions = {
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: LoginPage
    },
    {
      path: "/home",
      component: MainPage
    },
    {
      path: "/devices",
      component: DevicePage
    }
  ]
};

export default routerOptions;
