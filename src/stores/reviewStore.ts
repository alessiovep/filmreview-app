import { defineStore } from "pinia";
import axios from "axios";

export const useReviewStore = defineStore("reviewStore", {
    state: () => ({
        reviews: [] as any[],
    }),
    actions: {
        async fetchReviews(filmId?: number) {
            const baseUrl = "http://localhost:3001/reviews?_sort=created_at&_order=desc&_expand=user&_expand=film";

            const url = filmId !== undefined || null ? `${baseUrl}&filmId=${filmId}` : baseUrl;

            const { data } = await axios.get(url);
            this.reviews = data;
        },
        async addReview(review: any) {
            await axios.post("http://localhost:3001/reviews", review);
            await this.fetchReviews(review?.filmId);
        },
    },
});
