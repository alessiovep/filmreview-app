import { mount } from "@vue/test-utils";
import ReviewCard from "../../src/components/ReviewCard.vue";
import { createPinia, setActivePinia, wrapper } from "pinia";

describe("ReviewCard.vue", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    const mockReview = {
        comment: "Great movie!",
        user: { username: "Maria" },
        rating: 4,
        created_at: "2024-05-05T10:00:00Z",
    };
    it("renders comment and username", () => {
        const wrapper = mount(ReviewCard, {
            props: { review: mockReview },
        });

        expect(wrapper.text()).toContain("Great movie!");
        expect(wrapper.text()).toContain("Maria");
    });
});
