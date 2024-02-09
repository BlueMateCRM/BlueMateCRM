import { createRouter, createWebHistory } from "vue-router";
import { userRoutes } from "./user";
import { errorRoutes } from "./errors";
import { signRoutes } from "./sign.ts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [userRoutes, errorRoutes, signRoutes],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
