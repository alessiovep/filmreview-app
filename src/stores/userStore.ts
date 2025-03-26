import { defineStore } from "pinia";
import axios from "axios";
import type { User } from "../models/user";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        users: [] as User[],
        user: null as User | null,
    }),
    actions: {
        async fetchUsers() {
            const { data } = await axios.get("http://localhost:3001/users");
            this.users = data;
        },
        logedInUser(user: User) {
            this.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        loadUserFromLocalStorage() {
            const saved = localStorage.getItem("user");
            if (saved) {
                this.user = JSON.parse(saved);
            }
        },
        logout() {
            this.user = null;
            localStorage.removeItem("user");
        },
    },
});
