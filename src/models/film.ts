import type { Director } from "./director";
import type { Genre } from "./genre";

export interface Film {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    directorId: number;
    posterUrl: string;
    year: number;
    rating: number;
    reviews: number;
    genre?: Genre;
    director?: Director;
}
