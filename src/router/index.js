import { createRouter, createWebHistory } from "vue-router";
import Map from "@/components/Map.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "map",
      component: Map,
    },
//    {
//     path: "/map",
//      name: "map",
//      component: () => import("../components/Map.vue"),
//    },
  ],
});

export default router;
