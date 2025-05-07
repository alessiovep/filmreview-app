import { useFilmStore } from "../src/stores/filmStore";
import { describe, test, expect } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import axios from "axios";

vi.mock("axios");
describe("Film Store", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    it("fetchFilms - should fetch and store films", async () => {
        const mockFilms = [
            { id: 1, title: "Inception" },
            { id: 2, title: "The Matrix" },
        ];
        axios.get.mockResolvedValue({ data: mockFilms });

        const store = useFilmStore();
        await store.fetchFilms();

        expect(store.films).toEqual(mockFilms);
        expect(store.films.length).toBe(2);
    });
});
