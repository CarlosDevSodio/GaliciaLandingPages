import HomeView from "@/modules/public/views/HomeView.vue";
import ApolloView from "@/modules/public/views/ApolloView.vue";

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
      {
        path: "apollo",
        name: "apollo",
        component: ApolloView,
        meta: {
          title: "Apollo",
        },
      },
    ],
  },
];
