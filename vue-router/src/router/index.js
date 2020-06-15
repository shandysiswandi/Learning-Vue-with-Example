import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./view.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active", // active class for *exact* links.
});

export default router;
