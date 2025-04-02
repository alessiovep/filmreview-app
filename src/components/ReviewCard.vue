<template>
    <v-card class="review-card equal-height" style="min-height: 250px" elevation="4">
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

            <br /><br />

            <div v-if="isEditing">
                <v-textarea v-model="editedComment" label="Edit your comment" auto-grow rows="2" hide-details />
                <v-btn size="small" color="success" class="mt-2" @click="handleEdit">Save</v-btn>
                <v-btn size="small" variant="text" class="mt-2" @click="cancelEdit">Cancel</v-btn>
            </div>
            <div v-else>
                {{ review.comment }}
            </div>
        </v-card-text>

        <v-card-actions class="justify-center" v-if="isOwner">
            <v-icon icon="mdi-delete" size="24" @click="handleDelete" class="cursor-pointer" />
            <v-icon icon="mdi-pencil" size="24" @click="isEditing = true" class="cursor-pointer" />
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { Review } from "../models/review";
import { useReviewStore } from "../stores/reviewStore";
import { useUserStore } from "../stores/userStore";

const props = defineProps<{ review: Review }>();
const reviewStore = useReviewStore();
const userStore = useUserStore();

const isEditing = ref(false);
const editedComment = ref(props.review.comment);

const isOwner = computed(() => userStore.user?.id === props.review.userId);

const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this review?");
    if (!confirmed) return;
    await reviewStore.deleteReview(props.review);
};

const handleEdit = async () => {
    if (editedComment.value.trim().length < 5) {
        alert("Comment must be at least 5 characters long.");
        return;
    }

    await reviewStore.editReview(props.review, editedComment.value);
    isEditing.value = false;
};

const cancelEdit = () => {
    isEditing.value = false;
    editedComment.value = props.review.comment;
};
</script>
