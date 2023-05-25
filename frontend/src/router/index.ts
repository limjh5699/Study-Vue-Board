import { createRouter, createWebHistory } from "vue-router";

import ListView from "@/views/List.vue";

const routes = [
  {
    path: "/",
    name: "List",
    component: ListView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
