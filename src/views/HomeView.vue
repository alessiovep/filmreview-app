<template>
    <section class="section">
        <div class="section-header">
            <h2 class="section-title">Populaire Films</h2>
            <a href="/films" class="btn btn-primary">Alle films bekijken</a>
        </div>

        <div class="film-grid">
            <v-container>
                <v-row>
                    <v-col v-for="film in films" :key="film.id" cols="12" sm="6" md="2">
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
                    <v-col v-for="review in reviews" :key="review.id" cols="12" sm="6" md="2">
                        <ReviewCard :review="review" />
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<script setup lang="ts">
import FilmCard from "../components/FilmCard.vue";
import ReviewCard from "../components/ReviewCard.vue";
import { computed, onMounted, ref } from "vue";
import { useFilmStore } from "../stores/filmStore";
import { useReviewStore } from "../stores/reviewStore";

const filmStore = useFilmStore();
const reviewStore = useReviewStore();

const films = computed(() => {
    return filmStore.films.slice(0, 6);
});
const reviews = computed(() => {
    return reviewStore.reviews.slice(0, 6);
});

onMounted(async () => {
    await filmStore.fetchFilms();
    await reviewStore.fetchReviews();
});
</script>

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
