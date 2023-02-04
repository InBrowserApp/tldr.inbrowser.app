import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import("../views/HomeView.vue");
const PageView = () => import("../views/PageView.vue");
const PlatformView = () => import("../views/PlatformView.vue");
const LanguageView = () => import("../views/LanguageView.vue");
const NotFoundView = () => import("../views/NotFoundView.vue");
const SearchView = () => import("../views/SearchView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/search/activate-site-search",
      name: "activate-site-search",
      component: () => import("../views/HowToActivateSiteSearchView.vue"),
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
    // Any other route
    {
      path: "/:path(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
