<template>
  <div class="add-review">
    <v-btn @click="showForm = !showForm" color="primary" class="mb-4">
      {{ showForm ? 'Cancel' : 'Add Review' }}
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

    <div v-if="newReview" class="mt-6">
      <h4>Your review:</h4>
      <p><strong>User ID:</strong> {{ newReview.userId }}</p>
      <p><strong>Rating:</strong> {{ newReview.rating }}</p>
      <p><strong>Comment:</strong> {{ newReview.comment }}</p>
      <p><strong>Created at:</strong> {{ newReview.created_at }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const userId = ref(1);
const rating = ref(5);
const comment = ref('');
const error = ref('');
const showForm = ref(false);
const newReview = ref(null);
const route = useRoute();
const filmId = Number(route.params.id);

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
    // Check if user exists
    const userCheck = await axios.get(`http://localhost:3001/users/${userId.value}`);
    if (!userCheck.data || !userCheck.data.id) {
      error.value = 'User ID does not exist.';
      return;
    }

    const now = new Date();
    const review = {
      filmId,
      userId: userId.value,
      rating: rating.value,
      comment: comment.value,
      created_at: now,
      updated_at: now
    };

    const { data } = await axios.post('http://localhost:3001/reviews', review);

    showForm.value = false;
    comment.value = '';
    newReview.value = data;
  } catch (e) {
    if (e.response && e.response.status === 404) {
      error.value = 'User ID does not exist.';
    } else {
      error.value = 'Error submitting review.';
    }
  }
};
</script>

<style scoped>
.add-review {
  margin-top: 2rem;
}
</style>
