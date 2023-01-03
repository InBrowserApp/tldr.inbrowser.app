import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageView from "../views/PageView.vue";
import PlatformView from "../views/PlatformView.vue";
import LanguageView from "../views/LanguageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // Language View
    // pattern: /pages
    {
      path: "/pages:language(.*)",
      name: "language",
      component: LanguageView,
    },
    // Platform View
    // pattern: /pages/common
    {
      path: "/pages:language(.*)/:platform(.*)",
      name: "platform",
      component: PlatformView,
    },
    // Page View
    // pattern: /pages/common/cat
    {
      path: "/pages:language(.*)/:platform(.*)/:page(.*)",
      name: "page",
      component: PageView,
    },
  ],
});

export default router;
