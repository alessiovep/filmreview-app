<template>
    <v-card :to="`/films/${film.id}`" class="film-card" elevation="4"
            data-cy="film-card">
        <v-img
            :src="film.posterUrl"
            height="300px"
            cover
            data-cy="film-poster"
        ></v-img>

        <v-card-title>{{ film.title }}</v-card-title>

        <v-card-subtitle>
            {{ film.year }}
        </v-card-subtitle>
        <v-card-subtitle class="text-caption"> {{ film.director?.name }} </v-card-subtitle>
    </v-card>
</template>

<script setup lang="ts">
import type { Film } from "../models/film";
defineProps<{
    film: Film;
}>();
</script>
