import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageView from "../views/PageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // Page View
    // pattern: /pages/
    {
      path: "/pages:lang(.*)/:platform(.*)/:page(.*)",
      name: "page",
      component: PageView,
    },
  ],
});

export default router;
