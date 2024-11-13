import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import About from "@/pages/About.vue";
import Login from "@/pages/Login.vue";
import Vuetify from "@/pages/Vuetify.vue";
import ElementPlus from "@/pages/ElementPlus.vue";
import YupPage from "@/pages/YupPage.vue";
import YupVuePage from "@/pages/YupVuePage.vue";

const routes = [
  {
    path: "/",
    component: Login,
    meta: { layout: "login" },
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
    meta: { layout: "login" },
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    meta: { layout: "default" },
  },
  {
    path: "/vuetify",
    component: Vuetify,
    name: "Vuetify",
    meta: { layout: "default" },
  },
  {
    path: "/elementplus",
    component: ElementPlus,
    name: "ElementPlus",
    meta: { layout: "default" },
  },
  {
    path: "/yup",
    component: YupPage,
    name: "YupPage",
    meta: { layout: "default" },
  },
  {
    path: "/yup-vue",
    component: YupVuePage,
    name: "YupVuePage",
    meta: { layout: "default" },
  },
  {
    path: "/about",
    component: About,
    name: "About",
    meta: { layout: "custom" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
