export const clientRoutes = {
  path: "/client",
  component: () => import("../layouts/ClientLayout.vue"),
  children: [
    {
      path: "contract",
      component: () => import("../pages/client/contract/index.vue"),
      children: [
        {
          path: "main",
          name: "contract-main",
          component: () =>
            import("../pages/client/contract/pages/Contract.vue"),
        },
        {
          path: "term",
          name: "contract-term",
          component: () => import("../pages/client/contract/pages/Term.vue"),
        },
        {
          path: "contract-completed",
          name: "contract-main-completed",
          component: () =>
            import("../pages/client/contract/pages/ContactCompleted.vue"),
        },
        {
          path: "term-completed",
          name: "contract-term-completed",
          component: () =>
            import("../pages/client/contract/pages/TermCompleted.vue"),
        },
      ],
    },
  ],
};
