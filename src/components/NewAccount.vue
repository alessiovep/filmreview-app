<template>
    <v-card class="mx-auto" max-width="400" title="User Registration">
        <v-form v-model="formValid" @submit.prevent="submitForm">
            <v-container>
                <v-text-field v-model="first" label="First name" :rules="[required]" variant="underlined" />

                <v-text-field v-model="last" label="Last name" :rules="[required]" variant="underlined" />

                <v-text-field v-model="username" label="Username" :rules="[required]" variant="underlined" />

                <v-text-field v-model="email" label="Email" :rules="[required, validEmail]" variant="underlined" />

                <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    :rules="[required, minPassword]"
                    placeholder="Enter your password"
                    variant="underlined"
                />

                <v-checkbox v-model="terms" :rules="[mustAccept]" label="I agree to site terms and conditions" />
            </v-container>

            <v-divider />

            <v-card-actions>
                <v-spacer />
                <v-btn color="success" type="submit">Complete Registration</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";

const router = useRouter();
const userStore = useUserStore();

const formValid = ref(false);
const first = ref("");
const last = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const terms = ref(false);

const required = (v: string) => !!v || "This field is required";
const validEmail = (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid";
const minPassword = (v: string) => (v && v.length >= 4) || "Password must be at least 6 characters";
const mustAccept = (v: boolean) => v || "You must accept the terms and conditions";

const submitForm = () => {
    const user = {
        id: userStore.users.length,
        username: username.value,
        name: first.value + " " + last.value,
        email: email.value,
        password: password.value,
    };
    const response = userStore.checkIfUserExists(user.email, user.username);
    console.log(formValid.value);
    if (formValid.value && response === null) {
        userStore.addNewUser(user);
        userStore.logedInUser(user);
        alert("User registered successfully!");
        router.push("/");
    } else {
        alert(response);
    }
};
</script>
