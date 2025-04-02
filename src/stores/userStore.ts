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
        checkIfUserExists(email: string, username: string) {
            const emailExists = this.users.find((u) => u.email === email);
            const usernameExists = this.users.find((u) => u.username === username);

            if (emailExists && usernameExists) {
                return "Both email and username are already in use.";
            } else if (emailExists) {
                return "Email is already in use.";
            } else if (usernameExists) {
                return "Username is already in use.";
            } else {
                return null; // Everything is fine, no conflict
            }
        },
        async addNewUser(user: User) {
            await axios.post("http://localhost:3001/users", user);
            await this.users.push(user);
        },
        async deleteUser(userId?: number) {
            try {
                await axios.delete(`http://localhost:3001/users/${userId}`);
                alert("User deleted successfully!");
                this.logout();
            } catch (error) {
                console.error("Failed to delete user:", error);
            }
        },
        async editUser(id: number, newName: string) {
            await axios.patch(`http://localhost:3001/users/${id}`, { name: newName });

            await this.fetchUsers();
            const updated = this.users.find((u) => u.id === id);
            if (updated) {
                this.user = updated;
                localStorage.setItem("user", JSON.stringify(updated));
            }
        },
    },
});
