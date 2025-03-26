<template>
    <v-container fluid class="mt-6" style="max-width: 1000px; margin: 0 auto">
        <v-row>
            <v-col cols="12" md="4">
                <v-img :src="film?.posterUrl" height="300px" width="200px" cover class="rounded-lg" />
            </v-col>
            <v-col cols="12" md="8" class="mx-auto" style="max-width: 500px; text-align: center">
                <h1 class="text-h4 font-weight-bold mb-2">{{ film?.title }}</h1>
                <p class="text-subtitle-1 mb-1">
                    Directed by: <strong>{{ film?.director?.name }}</strong>
                </p>
                <p class="text-subtitle-2 mb-2">Release: {{ film?.releaseDate }}</p>
                <p class="text-subtitle-2 mb-2">{{ film?.genre }}</p>

                <v-rating
                    :model-value="film?.rating"
                    readonly
                    half-increments
                    color="amber"
                    background-color="grey-lighten-2"
                    density="compact"
                ></v-rating>
                <p class="mt-4">{{ film?.description }}</p>
            </v-col>
        </v-row>
        <AddReview v-if="userStore.user !== null" />
        <h2 class="text-h5 font-weight-bold mt-8 mb-4">Reviews for this film ({{ film?.reviews }})</h2>
        <ReviewList v-if="film?.id" :filmId="film.id" />
    </v-container>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import type { Film } from "../models/film";
import AddReview from "../components/AddReview.vue";
import ReviewList from "../components/ReviewList.vue";
import { useUserStore } from "../stores/userStore";

const route = useRoute();
const userStore = useUserStore();
const film = ref<Film | null>(null);
onMounted(async () => {
    const filmId = route.params.id;
    const { data } = await axios.get(`http://localhost:3001/films/${filmId}?_expand=director`);
    film.value = data;
    userStore.loadUserFromLocalStorage();
});
</script>
