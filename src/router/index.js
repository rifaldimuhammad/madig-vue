import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/magazine",
      name: "magazine",
      component: () => import("../views/Magazine.vue"),
    },
    {
      path: "/detail-magazine/:id",
      name: "detailMagazine",
      component: () => import("../views/DetailMagazine.vue"),
    },
    {
      path: "/AppMagazine",
      name: "AppMagazine",
      component: () => import("../views/appMagazine/AppMagazine.vue"),
    },
    {
      path: "/bookmark",
      name: "about",
      component: () => import("../views/Bookmark.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/Signup.vue"),
    },
    {
      path: "/AppDashboard",
      name: "AppDashboard",
      component: () => import("../views/AppDashboard.vue"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("../views/appDashboard/Dashboard.vue"),
        },
        {
          path: "/dashboard/magazine",
          name: "dashboardMagazine",
          component: () => import("../views/appDashboard/Magazine.vue"),
        },
        {
          path: "/dashboard/teams",
          name: "dashboardTeams",
          component: () => import("../views/appDashboard/Teams.vue"),
        },
      ],
    },
  ],
});

export default router;
