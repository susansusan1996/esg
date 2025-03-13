import { createRouter, createWebHistory } from "vue-router";
import esg from "../components/esg/esg.vue";
import carbon from "../components/esg/carbon.vue";

const routes = [
  {
    path: "/my_front/",
    name: "Home",
    component: () => import("../components/home.vue"),
  },
  { path: "/my_front/esg", name: "esg", component: esg },
  { path: "/my_front/carbon", name: "carbon", component: carbon },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
