<template>
    <div class="add-review">
        <v-btn @click="showForm = !showForm" color="primary" class="mb-4">
            {{ showForm ? "Close" : "Add Review" }}
        </v-btn>

        <v-expand-transition>
            <div v-show="showForm">
                <v-form @submit.prevent="submitReview">
                    <!-- <v-text-field v-model.number="userId" label="User ID" type="number" required /> -->

                    <v-text-field
                        v-model.number="rating"
                        label="Rating (1-5)"
                        type="number"
                        min="1"
                        max="5"
                        required
                        data-cy="rating"
                    />

                    <v-textarea v-model="comment" label="Comment" required data-cy="comment" />

                    <v-btn type="submit" color="success" class="mt-2" data-cy="submit">Submit</v-btn>
                    <p v-if="error" class="text-error mt-2">{{ error }}</p>
                </v-form>
            </div>
        </v-expand-transition>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useReviewStore } from "../stores/reviewStore.js";
import { useUserStore } from "../stores/userStore.js";

const rating = ref(5);
const comment = ref("");
const error = ref("");
const showForm = ref(false);
const route = useRoute();
const filmId = Number(route.params.id);
const reviewStore = useReviewStore();
const userStore = useUserStore();
const emit = defineEmits(["review-added"]);

const submitReview = async () => {
    error.value = "";

    if (rating.value < 1 || rating.value > 5) {
        error.value = "Rating must be between 1 and 5.";
        return;
    }

    if (comment.value.length < 5) {
        error.value = "Comment must be at least 5 characters.";
        return;
    }

    try {
        const userRes = await fetch(`http://localhost:3001/users/${userStore.user.id}`);
        if (!userRes.ok) {
            error.value = "User Id not found. Please enter a valid user.";
            return;
        }
        console.log("Current user:", userStore.user);
        const now = new Date();
        const review = {
            filmId: filmId,
            userId: userStore.user.id,
            rating: rating.value,
            comment: comment.value,
            created_at: now,
            updated_at: now,
        };

        await reviewStore.addReview(review);
        await reviewStore.fetchReviews(review.filmId);

        showForm.value = false;
        comment.value = "";
        rating.value = 5;

        emit("review-added");
    } catch (e) {
        error.value = "Error submitting review.";
    }
};
</script>

<style scoped>
.add-review {
    margin-top: 2rem;
}
</style>
