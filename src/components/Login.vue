<template>
    <v-sheet class="bg-indigo-lighten-2 pa-8" rounded>
        <v-card class="mx-auto px-4 py-8" max-width="344">
            <v-form v-model="form" @submit.prevent="handleLogin">
                <v-text-field
                    v-model="email"
                    :readonly="loading"
                    :rules="[required]"
                    class="mb-2"
                    label="Email"
                    clearable
                    data-cy="email"
                />

                <v-text-field
                    v-model="password"
                    :readonly="loading"
                    :rules="[required]"
                    label="Password"
                    placeholder="Enter your password"
                    clearable
                    data-cy="password"
                />

                <v-alert type="error" class="mt-2" v-if="error">{{ error }}</v-alert>

                <br />

                <v-btn
                    :disabled="!form"
                    :loading="loading"
                    color="success"
                    size="large"
                    type="submit"
                    variant="elevated"
                    block
                    data-cy="login-btn"
                >
                    Sign In
                </v-btn>
            </v-form>
        </v-card>
    </v-sheet>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/userStore";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref("");
const form = ref(false);
const loading = ref(false);

const userStore = useUserStore();
const router = useRouter();

onMounted(async () => {
    await userStore.fetchUsers();
});

function required(v: string) {
    return !!v || "Field is required";
}

const handleLogin = async () => {
    if (!form.value) return;

    loading.value = true;

    const tryUser = userStore.users.find((user) => user.email === email.value) || null;

    setTimeout(async () => {
        loading.value = false;

        if (tryUser !== null && password.value === tryUser?.password) {
            error.value = "";
            await userStore.logedInUser(tryUser);
            await router.push("/");
        } else {
            error.value = "Invalid Email or password";
        }
    }, 1500);
};
</script>
