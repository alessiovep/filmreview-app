<template>
  <div class="add-review">
    <v-btn @click="showForm = !showForm" color="primary" class="mb-4">
      {{ showForm ? 'Close' : 'Add Review' }}
    </v-btn>

    <v-expand-transition>
      <div v-show="showForm">
        <v-form @submit.prevent="submitReview">
          <v-text-field
              v-model.number="userId"
              label="User ID"
              type="number"
              required
          />

          <v-text-field
              v-model.number="rating"
              label="Rating (1-5)"
              type="number"
              min="1"
              max="5"
              required
          />

          <v-textarea
              v-model="comment"
              label="Comment"
              required
          />

          <v-btn type="submit" color="success" class="mt-2">Submit</v-btn>
          <p v-if="error" class="text-error mt-2">{{ error }}</p>
        </v-form>
      </div>
    </v-expand-transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import {useReviewStore} from "../stores/reviewStore.js";

const userId = ref(1);
const rating = ref(5);
const comment = ref('');
const error = ref('');
const showForm = ref(false);
const route = useRoute();
const filmId = Number(route.params.id);
const reviewStore = useReviewStore();

const submitReview = async () => {
  error.value = '';

  if (rating.value < 1 || rating.value > 5) {
    error.value = 'Rating must be between 1 and 5.';
    return;
  }

  if (comment.value.length < 5) {
    error.value = 'Comment must be at least 5 characters.';
    return;
  }

  try {
    const now = new Date();
    const review = {
      filmId: filmId,
      userId: userId.value,
      rating: rating.value,
      comment: comment.value,
      created_at: now,
      updated_at: now
    };

    await reviewStore.addReview(review);

    showForm.value = false;
    comment.value = '';
  } catch (e) {
    error.value = 'Error submitting review.';
  }
};
</script>

<style scoped>
.add-review {
  margin-top: 2rem;
}
</style>
