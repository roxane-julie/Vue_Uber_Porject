import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/home.vue";
import RestaurantSingle from "./pages/RestaurantSingle.vue";

const routes = [
  { path: "/", component: Home },
  {
    name: "Restaurant",
    path: "/restaurant/:name",
    component: RestaurantSingle,
  },
];

const route = createRouter({
  history: createWebHashHistory(),
  routes,
});

const VueApp = createApp(App).use(route);

VueApp.use(route);

VueApp.mount("#app");
