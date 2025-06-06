import HomeView from "@/modules/public/views/HomeView.vue";


export default [
  {
    path: "",
    component: () => import("@/layouts/PublicLayout.vue"),
    meta: {
      requireAuth: false,
    },
    children: [
      {
        path: "home",
        name: "home",
        component: HomeView,
        meta: {
          title: "Landing Page",
        },
      },
    ],
  },
];
