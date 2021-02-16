import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Glasses from "../views/Glasses";
import Locations from "../views/Locations"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/glasses",
    name: "Glasses",
    component: Glasses
  },
  {
    path: "/locations",
    name: "Locations",
    component: Locations
  }
];

const router = new VueRouter({
  routes
});

export default router;
