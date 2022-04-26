import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import About from "../components/about.vue";
import Servise from "../components/servise.vue";
import Team from "../components/team.vue";
import Testmonials from "../components/testmonials.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
   
    },
    {
      path: "/about",
      name: "about",
      component: About,
   
    },
    {
      path: "/servise",
      name: "servise",
      component: Servise,
   
    },
    {
      path: "/team",
      name: "team",
      component: Team,
   
    },
    {
      path: "/testmonials",
      name: "testmonials",
      component: Testmonials,
   
    },
  ],
});

export default router;
