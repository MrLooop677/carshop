import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CarInfo from "../components/cars/car-info.vue";
import ErrorPage from "../views/ErrorPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/cardetails/:carName/:carId",
    name: "cardetails",
    component: CarInfo,
  },
  {
    path: "/:catchAll(.*)",
    name: "errorpage",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.afterEach((to) => {
  document.title = `${to?.name} page`;
});
export default router;
