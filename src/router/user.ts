export const userRoutes = {
  path: "/user",
  component: () => import("../layouts/UserLayout.vue"),
  children: [
    {
      path: "leads",
      name: "user-leads",
      component: () => import("../pages/user/Home.vue"),
    },
    {
      path: "quotes",
      name: "user-quotes",
      component: () => import("../pages/user/Quotes.vue"),
    },
    {
      path: "orders",
      name: "user-orders",
      component: () => import("../pages/user/Orders.vue"),
    },
    {
      path: "messages",
      name: "user-messages",
      component: () => import("../pages/user/Messages.vue"),
    },
    {
      path: "tasks",
      name: "user-tasks",
      component: () => import("../pages/user/Tasks.vue"),
    },
    {
      path: "profile",
      name: "user-profile",
      component: () => import("../pages/user/Profile.vue"),
    },
    {
      path: "insights",
      name: "user-insights",
      component: () => import("../pages/user/Statistics.vue"),
    },
    {
      path: "settings",
      component: () => import("../pages/user/settings/index.vue"),
      children: [
        {
          path: "users",
          name: "user-settings-users",
          component: () => import("../pages/user/settings/pages/Users.vue"),
        },
      ],
    },
    {
      path: "technique",
      name: "user-technique",
      component: () => import("../pages/user/Technique.vue"),
    },
    {
      path: "other",
      name: "user-others",
      component: () => import("../pages/user/Other.vue"),
    },
  ],
};
