<template>
    <v-container class="mt-6">
        <h1 class="text-h4 font-weight-bold mb-6">All Films</h1>

        <v-row>
            <v-col v-for="film in filmStore.films" :key="film.id" cols="12" sm="6" md="3">
                <FilmCard :film="film" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
import FilmCard from "../components/FilmCard.vue";
import { onMounted } from "vue";
import { useFilmStore } from "../stores/filmStore";

const filmStore = useFilmStore();

onMounted(async () => {
    await filmStore.fetchFilms();
});
</script>
