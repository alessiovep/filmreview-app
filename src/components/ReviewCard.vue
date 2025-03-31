<template>
    <v-card class="review-card equal-height" elevation="4">
        <v-card-title class="review-film-title text-h6">
            {{ review.film?.title }}
        </v-card-title>

        <v-card-subtitle class="review-author text-captionn"> Door: {{ review.user?.username }} </v-card-subtitle>

        <v-card-text class="review-excerpt text-body-2">
            <v-rating
                :model-value="review?.rating"
                readonly
                half-increments
                color="amber"
                background-color="grey-lighten-2"
                density="compact"
            ></v-rating>
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
</script>

<style lang="css">
.force-visible-rating .v-btn {
    background-color: transparent !important;
    color: #ffd700 !important;
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
    min-height: 150px;
}
</style>
