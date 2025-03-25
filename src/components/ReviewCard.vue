<template>
    <v-card class="review-card equal-height" elevation="4">
        <v-card-title class="review-film-title text-h6">
            {{ review.film?.title }}
        </v-card-title>

        <v-card-subtitle class="review-author text-captionn"> Door: {{ review.user?.username }} </v-card-subtitle>

        <v-card-text class="review-excerpt text-body-2">
            <strong>Rating:</strong> {{ getStars(review.film.rating) }}
            <br />
            <br />
            {{ review.comment }}
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type { Review } from "../models/review";
defineProps<{
    review: Review;
}>();
function getStars(rating: number): string {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
}
</script>

<style lang="css">
.force-visible-rating .v-btn {
    background-color: transparent !important;
    color: #ffd700 !important; /* amarelo ouro */
    opacity: 1 !important;
}

.force-visible-rating .v-icon {
    font-size: 20px !important;
}
.equal-height {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.review-excerpt {
    min-height: 60px; /* ajuste conforme necessário */
}
</style>
