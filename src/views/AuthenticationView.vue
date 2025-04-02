<template>
    <v-container v-if="login"><Login /></v-container>
    <v-container v-else><NewAccount /></v-container>
    <v-btn @click="login = !login"> {{ button }}</v-btn>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import Login from "../components/Login.vue";
import NewAccount from "../components/NewAccount.vue";

const login = ref(true);
const button = computed(() => (login.value ? "Go to Sign Up" : "Back to Login"));
</script>
