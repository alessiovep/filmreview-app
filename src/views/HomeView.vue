<script setup lang="ts">
import FilmCard from "../components/FilmCard.vue";
import ReviewCard from "../components/ReviewCard.vue";
import axios from "axios";
import type { Film } from "../models/film";
import { onMounted, ref } from "vue";
import type { Review } from "../models/review";
import TestRating from "./TestRating.vue";

const mainFilms = ref<Film[]>([]);
const latestReviews = ref<Review[]>([]);

onMounted(async () => {
    const filmRes = await axios.get("http://localhost:3001/films?_sort=reviews&_order=desc&_limit=6&_expand=director");
    mainFilms.value = filmRes.data;

    const reviewRes = await axios.get(
        "http://localhost:3001/reviews?_expand=user&_expand=film&_sort=created_at&_order=desc&_limit=6"
    );
    latestReviews.value = reviewRes.data;
});
</script>

<template>
    <div class="search-wrapper">
        <input type="text" class="search-input" placeholder="Zoek films of reviews..." />
        <button class="search-button">
            <i class="search-icon">🔍</i>
        </button>
    </div>
    <section class="section">
        <div class="section-header">
            <h2 class="section-title">Populaire Films</h2>
            <a href="/films" class="btn btn-primary">Alle films bekijken</a>
        </div>

        <div class="film-grid">
            <v-container>
                <v-row>
                    <v-col v-for="film in mainFilms" :key="film.id" cols="12" sm="6" md="2">
                        <FilmCard :film="film" />
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
    <section class="section">
        <div class="section-header">
            <h2 class="section-title">Recente Reviews</h2>
            <a href="/reviews" class="btn btn-primary">Alle reviews bekijken</a>
        </div>
        <div class="film-grid">
            <v-container>
                <v-row>
                    <v-col v-for="review in latestReviews" :key="review.id" cols="12" sm="6" md="2">
                        <ReviewCard :review="review" />
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
.search-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}
.search-input {
    width: 400px;
    padding: 12px 20px;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    font-size: 14px;
    background-color: #f1f5f9;
}
.search-button {
    background: none;
    border: none;
    margin-left: -50px;
    cursor: pointer;
}
</style>
