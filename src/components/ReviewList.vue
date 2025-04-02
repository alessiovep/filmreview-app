<template>
    <v-container class="mt-6">
        <v-row v-if="reviews.length">
            <v-col v-for="review in reviews" :key="review.id" cols="12" sm="6" md="3">
                <ReviewCard :review="review" />
            </v-col>
        </v-row>

        <div v-else class="text-subtitle-1 mt-4">No reviews found.</div>
    </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { useReviewStore } from "../stores/reviewStore";
import ReviewCard from "../components/ReviewCard.vue";

const props = defineProps<{ filmId?: number; userId?: number }>();

const reviewStore = useReviewStore();

const reviews = computed(() => reviewStore.reviews);

const fetchIfReady = () => {
    reviewStore.reviews = [];
    if (props.userId !== undefined) {
        reviewStore.fetchReviewsByUser(props.userId);
    } else {
        reviewStore.fetchReviews(props.filmId);
    }
};

onMounted(() => {
    fetchIfReady();
    console.log(reviews);
});

watch(
    () => [props.filmId, props.userId],
    () => {
        fetchIfReady();
    },
    { immediate: true }
);
</script>
