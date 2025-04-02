<template>
    <v-container class="mt-6" style="max-width: 800px">
        <h1 class="text-h4 font-weight-bold mb-6 text-center">Welcome, {{ user?.name }}</h1>

        <v-card class="mb-6" elevation="2">
            <v-card-title>Account Information</v-card-title>
            <v-card-text>
                <v-list dense>
                    <v-list-item-title>
                        <strong>Name:</strong>
                        <span v-if="!editing">{{ user?.name }}</span>
                        <v-text-field v-else v-model="editedName" density="compact" hide-details variant="underlined" />
                    </v-list-item-title>

                    <v-list-item-title> <strong>Email:</strong> {{ user?.email }} </v-list-item-title>

                    <v-list-item-title> <strong>Username:</strong> {{ user?.username }} </v-list-item-title>
                </v-list>

                <v-row class="d-flex justify-space-around mt-4">
                    <v-col cols="auto">
                        <v-btn color="error" @click="dialog = true">Delete account</v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn v-if="!editing" @click="startEditing">Edit account</v-btn>
                        <v-btn v-else @click="saveChanges" color="primary">Save changes</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-dialog v-model="dialog" max-width="400">
            <v-card>
                <v-card-title class="text-h6">Confirm Deletion</v-card-title>
                <v-card-text> Are you sure you want to delete your account? This action cannot be undone. </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn text @click="dialog = false">Cancel</v-btn>
                    <v-btn color="error" text @click="confirmDelete">Delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <h2 class="text-h5 font-weight-bold mt-8 mb-4">My reviews</h2>
        <ReviewList :userId="user?.id" />
    </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useUserStore } from "../stores/userStore";
import { useReviewStore } from "../stores/reviewStore";
import { useFilmStore } from "../stores/filmStore";
import ReviewList from "../components/ReviewList.vue";
import router from "../router";

const userStore = useUserStore();
const reviewStore = useReviewStore();
const filmStore = useFilmStore();

const user = computed(() => userStore.user);

const dialog = ref(false);
const editing = ref(false);
const editedName = ref(user.value?.name || "");

onMounted(async () => {
    await reviewStore.fetchReviews();
    await filmStore.fetchFilms();

    if (!userStore.user) {
        router.push("/authentication");
    }
});

const confirmDelete = async () => {
    dialog.value = false;
    if (user.value?.id) {
        await userStore.deleteUser(user.value.id);
        router.push("/authentication");
    }
};

const startEditing = () => {
    editing.value = true;
    editedName.value = user.value?.name || "";
};

const saveChanges = async () => {
    if (user.value?.id && editedName.value.trim()) {
        await userStore.editUser(user.value.id, editedName.value);
        editing.value = false;
    } else {
        alert("Name is required.");
    }
};
</script>
