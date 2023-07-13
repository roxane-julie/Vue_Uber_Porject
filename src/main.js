import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/home.vue";
import RestaurantSingle from "./pages/RestaurantSingle.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/restaurant", component: RestaurantSingle },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const VueApp = createApp(App);

VueApp.use(router);

VueApp.mount("#app");
