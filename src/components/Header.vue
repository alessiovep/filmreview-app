<template>
    <v-app-bar color="primary" dark flat>
        <v-toolbar-title class="font-weight-bold"
            ><v-btn to="/" style="font-size: 20px">FilmCritique</v-btn></v-toolbar-title
        >

        <v-spacer />
        <v-btn v-if="userStore.user !== null" variant="text" to="/account">Hi {{ userStore.user.name }}</v-btn>
        <v-spacer />
        <v-btn variant="text" to="/">Home</v-btn>
        <v-btn variant="text" to="/films">Films</v-btn>
        <v-btn variant="text" to="/reviews">Reviews</v-btn>

        <v-btn
            v-if="userStore.user !== null"
            variant="text"
            @click="logoutAndRedirect"
            data-cy="logout-btn"
        >Logout</v-btn>
        <v-btn v-else variant="text" to="/authentication">Login</v-btn>
    </v-app-bar>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useUserStore } from "../stores/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
onMounted(async () => {
    await userStore.loadUserFromLocalStorage();
});
const logoutAndRedirect = () => {
    userStore.logout();
    router.push("/");
};
</script>
