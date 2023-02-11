import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import VueGtag from "vue-gtag";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);

// Only for inbrowser.app
if (location.hostname.endsWith("inbrowser.app")) {
  app.use(VueGtag, {
    config: { id: "G-NSM970Q544" },
  });
}

// import styles
import "@/styles/hidden-on-print.css";

app.mount("#app");
