export const signRoutes = {
  path: "/login",
  component: () => import("../layouts/LoginLayout.vue"),
  children: [
    {
      path: "sign",
      name: "user-sign",
      component: () => import("../pages/sign/Login.vue"),
    },
  ],
};
