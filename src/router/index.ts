import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import FilmsView from "../views/FilmsView.vue";
import ReviewsView from "../views/ReviewsView.vue";
import AccountView from "../views/AccountView.vue";
import FilmDetails from "../views/FilmDetails.vue";

const routes = [
    { path: "/", name: "Home", component: HomeView },
    { path: "/films", name: "Films", component: FilmsView },
    { path: "/reviews", name: "Reviews", component: ReviewsView },
    { path: "/account", name: "Account", component: AccountView },
    { path: "/films/:id", name: "FilmDetails", component: FilmDetails },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
