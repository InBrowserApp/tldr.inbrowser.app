import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/SearchView.vue"),
    },
    {
      path: "/search/activate-site-search",
      name: "activate-site-search",
      component: () => import("@/views/HowToActivateSiteSearchView.vue"),
    },
    // Language View
    // pattern: /pages
    {
      path: "/pages:language(.*)",
      name: "language",
      component: () => import("@/views/LanguageView.vue"),
    },
    // Platform View
    // pattern: /pages/common
    {
      path: "/pages:language(.*)/:platform(.*)",
      name: "platform",
      component: () => import("@/views/PlatformView.vue"),
    },
    // Page View
    // pattern: /pages/common/cat
    {
      path: "/pages:language(.*)/:platform(.*)/:page(.*)",
      name: "page",
      component: () => import("@/views/PageView.vue"),
    },
    // Any other route
    {
      path: "/:path(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
