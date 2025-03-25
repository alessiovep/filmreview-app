<template>
  <v-container class="mt-6">
    <h1 class="text-h4 font-weight-bold mb-6">All Reviews</h1>

    <v-row>
      <v-col v-for="review in reviews" :key="review.id" cols="12" sm="6" md="3">
        <ReviewCard :review="review"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import axios from "axios";
import {onMounted, ref} from "vue";
import ReviewCard from "../components/ReviewCard.vue";
import type {Review} from "../models/review.ts";

const reviews = ref<Review[]>([]);

onMounted(async () => {
  const { data } = await axios.get("http://localhost:3001/reviews?_expand=user&_expand=film&_sort=created_at&_order=desc");
  reviews.value = data;
});
</script>

