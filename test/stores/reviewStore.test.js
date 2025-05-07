import { useFilmStore, useReviewStore } from "../../src/stores/reviewStore";
import { describe, test, expect } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import axios from "axios";

vi.mock("axios");
describe("Review Store", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    const mockReviews = [
        {
            id: 1,
            filmId: 1,
            userId: 1,
            rating: 5,
            comment: "Mind-blowing movie. The concept, visuals and sound were all amazing.",
        },
        {
            id: 2,
            filmId: 1,
            userId: 2,
            rating: 4,
            comment: "Very clever and intense. Slightly confusing at times.",
            created_at: "2024-03-21T09:12:00Z",
        },
    ];
    it("fetchReviewsByUser - should fetch reviews for a specific user", async () => {
        const userId = 1;

        axios.get.mockResolvedValueOnce({ data: mockReviews });

        const store = useReviewStore();
        await store.fetchReviewsByUser(userId);

        expect(axios.get).toHaveBeenCalledWith(
            `http://localhost:3001/reviews?_sort=created_at&_order=desc&_expand=user&_expand=film&userId=${userId}`
        );
        expect(store.reviews).toEqual(mockReviews);
        expect(store.reviews.length).toBe(2);
    });
    it("fetchReviews - should fetch all reviews", async () => {
        axios.get.mockResolvedValue({ data: mockReviews });

        const store = useReviewStore();
        await store.fetchReviews();

        expect(store.reviews).toEqual(mockReviews);
        expect(store.reviews.length).toBe(2);
    });

    it("addReview - should add a new review and fetch updated list", async () => {
        const newReview = {
            id: 3,
            filmId: 1,
            userId: 3,
            rating: 5,
            comment: "A masterpiece!",
        };

        axios.post.mockResolvedValue({ data: newReview });

        axios.get
            .mockResolvedValueOnce({ data: { reviews: 2 } })
            .mockResolvedValueOnce({ data: [...mockReviews, newReview] });

        axios.patch.mockResolvedValue({});

        const store = useReviewStore();
        store.reviews = [...mockReviews];

        await store.addReview(newReview);

        expect(axios.post).toHaveBeenCalledWith("http://localhost:3001/reviews", newReview);
        expect(store.reviews).toEqual([...mockReviews, newReview]);
        expect(store.reviews.length).toBe(3);
    });

    it("deleteReview - should delete a review by ID", async () => {
        const reviewIdToDelete = 1;

        axios.delete.mockResolvedValue({ data: { success: true } });

        const store = useReviewStore();
        store.reviews = [mockReviews];
        await store.deleteReview(reviewIdToDelete);

        expect(store.reviews).not.toContainEqual(mockReviews[0]);
        expect(store.reviews.length).toBe(1);
    });
});
