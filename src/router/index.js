import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminUserList from "@/views/AdminUserList.vue";
import UserLogin from "@/views/UserLogin.vue";
import UserRegistration from "@/views/UserRegistration";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "user-login",
    component: UserLogin
  },
  {
    path: "/registration",
    name: "user-registration",
    component: UserRegistration
  },
  {
    path: "/admin/users",
    name: "admin-user-list",
    component: AdminUserList
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
