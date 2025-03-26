import { defineStore } from "pinia";
import axios from "axios";
import type { Film } from "../models/film";

export const useFilmStore = defineStore("filmStore", {
    state: () => ({
        films: [] as Film[],
    }),
    actions: {
        async fetchFilms() {
            const { data } = await axios.get("http://localhost:3001/films?_sort=reviews&_order=desc&_expand=director");
            this.films = data;
        },
    },
});
