import { defineStore } from "pinia";
import axios from "axios";
import type { Review } from "../models/review";

export const useReviewStore = defineStore("reviewStore", {
    state: () => ({
        reviews: [] as Review[],
    }),
    actions: {
        async fetchReviews(filmId?: number) {
            const baseUrl = "http://localhost:3001/reviews?_sort=created_at&_order=desc&_expand=user&_expand=film";

            const url = filmId !== undefined || null ? `${baseUrl}&filmId=${filmId}` : baseUrl;

            const { data } = await axios.get(url);
            this.reviews = data;
        },
        async fetchReviewsByUser(userId?: number) {
            if (userId !== null) {
                const { data } = await axios.get(
                    `http://localhost:3001/reviews?_sort=created_at&_order=desc&_expand=user&_expand=film&userId=${userId}`
                );
                this.reviews = data;
            }
        },
        async addReview(review: any) {
            await axios.post("http://localhost:3001/reviews", review);

            const filmRes = await axios.get(`http://localhost:3001/films/${review.filmId}`);
            const amountReviews = filmRes.data.reviews + 1;

            await axios.patch(`http://localhost:3001/films/${review.filmId}`, {
                reviews: amountReviews,
            });

            await this.fetchReviews();
        },
        async deleteReview(review: any) {
            await axios.delete(`http://localhost:3001/reviews/${review.id}`);

            const filmId = review.filmId || review.film?.id;
            if (!filmId) return;

            const filmRes = await axios.get(`http://localhost:3001/films/${filmId}`);
            const amountReviews = filmRes.data.reviews - 1;

            await axios.patch(`http://localhost:3001/films/${filmId}`, {
                reviews: amountReviews,
            });

            this.reviews = this.reviews.filter((r) => r.id !== review.id);
            await this.fetchReviews(filmId);
        },
        async editReview(review: any, comment: string) {
            await axios.patch(`http://localhost:3001/reviews/${review.id}`, {
                comment: comment,
                updated_at: new Date(),
            });
            await this.fetchReviews(review.filmId ?? review.film?.id);
        },
    },
});
