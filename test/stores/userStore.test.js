import { describe, it, beforeEach, expect, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "../../src/stores/userStore";
import axios from "axios";

vi.mock("axios");

describe("User Store", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        localStorage.clear();
    });

    it("fetchUsers - should fetch and set users", async () => {
        const mockUsers = [
            { id: 1, name: "Alice", email: "a@example.com", username: "alice" },
            { id: 2, name: "Bob", email: "b@example.com", username: "bob" },
        ];
        axios.get.mockResolvedValueOnce({ data: mockUsers });

        const store = useUserStore();
        await store.fetchUsers();

        expect(store.users).toEqual(mockUsers);
    });

    it("logedInUser - should set user and save in localStorage", () => {
        const store = useUserStore();
        const user = { id: 1, name: "Alice", email: "a@example.com", username: "alice" };

        store.logedInUser(user);

        expect(store.user).toEqual(user);
        expect(localStorage.getItem("user")).toBe(JSON.stringify(user));
    });

    it("loadUserFromLocalStorage - should load user from localStorage", () => {
        const user = { id: 1, name: "Alice", email: "a@example.com", username: "alice" };
        localStorage.setItem("user", JSON.stringify(user));

        const store = useUserStore();
        store.loadUserFromLocalStorage();

        expect(store.user).toEqual(user);
    });

    it("logout - should clear user and localStorage", () => {
        const store = useUserStore();
        store.user = { id: 1, name: "Alice", email: "a@example.com", username: "alice" };
        localStorage.setItem("user", JSON.stringify(store.user));

        store.logout();

        expect(store.user).toBeNull();
        expect(localStorage.getItem("user")).toBeNull();
    });

    it("checkIfUserExists - should return correct conflict messages", () => {
        const store = useUserStore();
        store.users = [{ id: 1, name: "Alice", email: "a@example.com", username: "alice" }];

        expect(store.checkIfUserExists("a@example.com", "alice")).toBe("Both email and username are already in use.");
        expect(store.checkIfUserExists("a@example.com", "bob")).toBe("Email is already in use.");
        expect(store.checkIfUserExists("b@example.com", "alice")).toBe("Username is already in use.");
        expect(store.checkIfUserExists("b@example.com", "bob")).toBeNull();
    });

    it("addNewUser - should add user and push to store", async () => {
        const store = useUserStore();
        const newUser = { id: 3, name: "Carol", email: "c@example.com", username: "carol" };

        axios.post.mockResolvedValueOnce({ data: newUser });
        await store.addNewUser(newUser);

        expect(store.users).toContainEqual(newUser);
        expect(axios.post).toHaveBeenCalledWith("http://localhost:3001/users", newUser);
    });

    it("deleteUser - should call API and logout", async () => {
        const store = useUserStore();
        store.user = { id: 1, name: "Alice", email: "a@example.com", username: "alice" };

        axios.delete.mockResolvedValueOnce({});
        window.alert = vi.fn(); // mock alert

        await store.deleteUser(1);

        expect(axios.delete).toHaveBeenCalledWith("http://localhost:3001/users/1");
        expect(store.user).toBeNull();
        expect(window.alert).toHaveBeenCalledWith("User deleted successfully!");
    });

    it("editUser - should update name and set in localStorage", async () => {
        const store = useUserStore();
        const updatedUser = { id: 1, name: "Alice Updated", email: "a@example.com", username: "alice" };

        axios.patch.mockResolvedValueOnce({});
        axios.get.mockResolvedValueOnce({ data: [updatedUser] });

        await store.editUser(1, "Alice Updated");

        expect(axios.patch).toHaveBeenCalledWith("http://localhost:3001/users/1", { name: "Alice Updated" });
        expect(store.user).toEqual(updatedUser);
        expect(localStorage.getItem("user")).toBe(JSON.stringify(updatedUser));
    });
});
