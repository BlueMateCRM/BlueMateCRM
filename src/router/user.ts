export const userRoutes = {
  path: "/",
  component: () => import("../layouts/UserLayout.vue"),
  children: [
    {
      path: "/",
      name: "user-home",
      component: () => import("../pages/user/Home.vue"),
    },
  ],
};
