<template>
    <v-container fluid class="d-flex justify-center align-center fill-height">
        <v-card class="pa-6" max-width="1000px">
            <v-card-title class="text-h5 font-weight-bold">Login</v-card-title>

            <v-form @submit.prevent="handleLogin" ref="loginForm" v-model="valid">
                <v-text-field
                    v-model="email"
                    label="Email"
                    type="email"
                    prepend-inner-icon="mdi-email"
                    :rules="[(v) => !!v || 'Email is required']"
                    required
                />
                <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    prepend-inner-icon="mdi-lock"
                    :rules="[(v) => !!v || 'Password is required']"
                    required
                />
                <v-btn type="submit" color="primary" block class="mt-4">Login</v-btn>
            </v-form>

            <v-alert type="error" class="mt-4" v-if="error">{{ error }}</v-alert>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUserStore } from "../stores/userStore";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref("");
const valid = ref(false);
const userStore = useUserStore();
const router = useRouter();

onMounted(async () => {
    await userStore.fetchUsers();
});

const handleLogin = async () => {
    if (!valid.value) return;

    const tryUser = userStore.users.find((user) => user.email === email.value) || null;

    if (tryUser !== null && password.value === tryUser?.password) {
        error.value = "";
        await userStore.logedInUser(tryUser);
        await router.push("/");
    } else {
        error.value = "Invalid Email or password";
    }
};
</script>
