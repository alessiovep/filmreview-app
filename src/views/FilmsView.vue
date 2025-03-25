<template>
    <v-container class="mt-6">
        <h1 class="text-h4 font-weight-bold mb-6">All Films</h1>

        <v-row>
            <v-col v-for="film in films" :key="film.id" cols="12" sm="6" md="3">
                <FilmCard :film="film" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
import FilmCard from "../components/FilmCard.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import type { Film } from "../models/film";

const films = ref<Film[]>([]);

onMounted(async () => {
    const { data } = await axios.get("http://localhost:3001/films?_expand=director");
    films.value = data;
});
</script>
