import Invitation from "@/modules/public/views/InvitationView.vue";
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
        path: "invitation/:name",
        name: "invitation",
        component: Invitation,
        props: true,
        meta: {
          title: "Invitation",
        },
      },
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
