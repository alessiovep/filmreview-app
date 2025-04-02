import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import FilmsView from "../views/FilmsView.vue";
import ReviewsView from "../views/ReviewsView.vue";
import AccountView from "../views/AccountView.vue";
import FilmDetails from "../views/FilmDetails.vue";
import Authentication from "../views/AuthenticationView.vue";
import { useUserStore } from "../stores/userStore";

const routes = [
    { path: "/", name: "Home", component: HomeView },
    { path: "/films", name: "Films", component: FilmsView },
    { path: "/reviews", name: "Reviews", component: ReviewsView },
    { path: "/account", name: "Account", component: AccountView, meta: { requiresAuth: true } },
    { path: "/films/:id", name: "FilmDetails", component: FilmDetails },
    { path: "/authentication", name: "Authentication", component: Authentication },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.meta.requiresAuth && !userStore.user) {
        next("/authentication");
    } else {
        next();
    }
});
export default router;
