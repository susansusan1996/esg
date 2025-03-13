import { createRouter, createWebHistory } from "vue-router";
import report from "../components/esg/esg.vue";
import carbon from "../components/esg/carbon.vue";

const routes = [
  {
    path: "/esg/",
    name: "Home",
    component: () => import("../components/home.vue"),
  },
  { path: "/esg/report", name: "report", component: report },
  { path: "/esg/carbon", name: "carbon", component: carbon },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
