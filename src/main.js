import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import "./index.css";

const routes = [
  {
    name: "home",
    path: "/", component: Home,
    props: (route) => ({ cv: route.query.cv === "true" }),
  },
];

export const createApp = ViteSSG(App, { routes })
