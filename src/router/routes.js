import Home from "../pages/HomePage.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
    props: (route) => ({ cv: route.query.cv === "true" }),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];
